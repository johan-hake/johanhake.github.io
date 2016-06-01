#!/bin/bash
set -x
#bash clean.sh

function system {
  "$@"
  if [ $? -ne 0 ]; then
    echo "make.sh: unsuccessful command $@"
    echo "abort!"
    exit 1
  fi
}

function common_replacements {
  filename=$1
  # Replace English phrases
  # __Summary.__ is needed for identifying the abstract
  doconce replace Summary Sammendrag $1
  doconce replace "Tables of Contents" "Innholdsfortegnelse" $1
  doconce replace "Figure" "Figur" $1
  doconce replace "Exercise" "Oppgave" $1
  doconce replace "Project" "Prosjekt" $1
  doconce replace "Example" "Eksempel" $1
}

# ----- scientific_writing talk -------
name=presentasjon

# Note: since Doconce syntax is demonstrated inside !bc/!ec
# blocks we need a few fixes

function editfix {
# Fix selected backslashes inside verbatim envirs that doconce has added
# (only a problem when we want to show full doconce code with
# labels in !bc-!ec envirs as in this presentation).
doconce replace '\label{this:section}' 'label{this:section}' $1
doconce replace '\label{fig1}' 'label{fig1}' $1
doconce replace '\label{demo' 'label{demo' $1
doconce replace '\eqref{eq1}' '(ref{eq1})' $1
doconce replace '\eqref{myeq}' '(ref{myeq})' $1
doconce replace '\eqref{mysec:eq:Dudt}' '(ref{mysec:eq:Dudt})' $1
}

rawgit="--html_raw_github_url=raw.github"

html=${name}-reveal
system doconce format html $name --pygments_html_style=native --keep_pygments_html_bg --html_links_in_new_window --html_output=$html $rawgit
system doconce slides_html $html reveal --html_slide_theme=darkgray --copyright=titlepage
editfix $html.html
# Crank up the font:
doconce replace 'pre style="' 'pre style="font-size: 120%; ' $html.html

# Increase slide size
doconce replace 'width: 1170' 'width: 1240' $html.html

# Set reload of movies
doconce replace "preload='none'" "preload='auto'" $html.html

## LaTeX Beamer slides
#beamertheme=red_shadow
#system doconce format pdflatex $name --latex_title_layout=beamer --latex_admon_title_no_period -DBEAMER
#editfix ${name}.p.tex
#system doconce ptex2tex $name envir=minted
#system doconce slides_beamer $name --beamer_slide_theme=$beamertheme
#cp $name.tex ${name}-beamer.tex
#system pdflatex -shell-escape ${name}-beamer
#system pdflatex -shell-escape ${name}-beamer
#
## Merge slides to 2x3 per page
#pdfnup --nup 2x3 --frame true --delta "1cm 1cm" --scale 0.9 --outfile ${name}-beamer.pdf ${name}-beamer.pdf
#cp ${name}-beamer.pdf ${name}-beamer_${beamertheme}_handouts2x3.pdf
exit

LaTeX documents
system doconce format pdflatex $name --minted_latex_style=trac
editfix ${name}.p.tex
system doconce ptex2tex $name envir=minted
doconce replace 'section{' 'section*{' $name.tex
system common_replacements ${name}.tex
doconce replace '10pt]{' '10pt,norsk]{' ${name}.tex
# package [norsk]{label} requires texlive-lang-norwegian package
doconce subst '% insert custom LaTeX commands...' '\usepackage[norsk]{babel}\n\n% insert custom LaTeX commands...' ${name}.tex

# Hack: suddenly \subex{} didn't work in this document
doconce subst -m '^\\subex\{' '\paragraph{' $name.tex
system pdflatex -shell-escape $name
system pdflatex -shell-escape $name
mv -f $name.pdf ${name}-minted.pdf
cp $name.tex ${name}-minted.tex

#system doconce format pdflatex $name
#editfix ${name}.p.tex
#doconce replace 'section{' 'section*{' ${name}.p.tex
#system doconce ptex2tex $name envir=ans:nt
## Hack: suddenly \subex{} didn't work in this document
#doconce subst -m '^\\subex\{' '\paragraph{' $name.tex
#system pdflatex $name
#system pdflatex $name
#mv -f $name.pdf ${name}-anslistings.pdf
#cp $name.tex ${name}-anslistings.tex

# sphinx doesn't handle math inside code well, we drop it since
# other formats demonstrate doconce writing this way
system doconce format sphinx $name
common_replacements $name.rst
editfix ${name}.rst
system doconce sphinx_dir theme=pyramid $name

doconce replace "Indices and tables" "Indeks og tabeller" sphinx-rootdir/index.rst
doconce replace "Contents:" "Innhold:" sphinx-rootdir/index.rst
doconce replace "language = None" "language = 'nb_NO'" sphinx-rootdir/conf.py
doconce subst "#html_search_language =.+" "html_search_language = 'no'" sphinx-rootdir/conf.py

system python automake_sphinx.py

# Prepare for publishing the html version
rm -rf sphinx
mv sphinx-rootdir/_build/html sphinx
# Fix headings that Sphinx did not provide in Norwegian
cd sphinx
files="*.html"
doconce replace "Previous page" "Forrige side" $files
doconce replace "Next page" "Neste side" $files
doconce replace "Page contents" "Sideinnhold" $files
doconce replace "Index" "Register" $files
doconce replace "Modulindex" "Modulregister" $files
cd ..

#system doconce format pandoc $name  # Markdown (pandoc extended)
#system doconce format gwiki  $name  # Googlecode wiki

# These don't like slides with code after heading:
#doconce format rst    $name  # reStructuredText
#doconce format plain  $name  # plain, untagged text for email

pygmentize -l text -f html -o ${name}-doconce.html ${name}.do.txt

dest=pub

cp -r ${name}*.pdf ${name}*.html reveal.js fig sphinx $dest/
