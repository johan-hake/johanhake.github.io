// En array med informasjon om fugler
var fugler = [
    {
        navn: "Gråspurv",
        bilde: "bilder/graspurv.jpg",
        lyd: "lyd/graspurv.mp3",
        info: "Gråspurv eller spurv er en fugleart i spurvefamilien. Den er hjemmehørende i Europa, Asia og Nord-Afrika, men arten har også blitt innført til eller utilsiktet spredt til andre deler av Afrika, Amerika og Australia. Som følge av dette er den i dag verdens mest utbredte fugleart. Den globale bestanden av gråspurv utgjorde i 2004 cirka 540 millioner individer. Den er blant annet utbredt i det meste av Europa, inkludert i Skandinavia og store deler av Russland.",
        infoBarn : "Gråspurv eller spurv er en fugleart i spurvefamilien. Den er hjemmehørende i Europa, Asia og Nord-Afrika, men arten har også blitt innført til eller utilsiktet spredt til andre deler av Afrika, Amerika og Australia.",
    },
    {
        navn: "Gulspurv",
        bilde: "bilder/gulspurv.jpg",
        lyd: "lyd/gulspurv.mp3",
        info: "Den er 17-18 cm lang og har et vingespenn på 23-30 cm. Vekten kan komme opp i 30 gram. Gulspurven finnes i åpent terreng med busker el. nær dyrket mark over det meste av landet. Stand- og streiffugl, enkelte overvintrer på Kontinentet. Hannen er gul på hodet, med mørkere flekker og strek på halsen og brystet. Buken er helt gul. På ryggen og skuldrene er den gråaktig rødbrun med svarte flekker. Hunnen har en noe mindre fargerik fjærdrakt.",
        infoBarn: "Den er 17-18 cm lang og har et vingespenn på 23-30 cm. Vekten kan komme opp i 30 gram.",
    },
    {
        navn: "Blåmeis", 
        bilde: "bilder/blameis.jpg",
        lyd: "lyd/blameis.mp3",
        info: "Blåmeisen er en fugl i meisefamilien. Den er lyseblå på issen, vingene og stjerten. Brystet og buken er gul. Hunnens farger er mye blekere enn hannen. Ungfuglene har gulaktige kinn og grågrønn isse. Blåmeisen er hardfør og svært nysgjerrig fugl. Nysgjerrigheten og oppfinnsomheten gjør at blåmeisen kan finne nye ting å spise når den er nødt. Det fortelles at blåmeisen enkelte steder har hakket løs vinduskitt og spist dette for å overleve.",
       infoBarn: "Blåmeisen er en fugl i meisefamilien. Den er lyseblå på issen, vingene og stjerten.",
    },
    {
        navn: "Pilfink", 
        bilde: "bilder/pilfink.jpg",
        lyd: "lyd/pilfink.mp3",
        info: "Pilfink tilhører spurvefamilien. Lever i Europa, Sibir og andre deler av Asia, har blitt satt ut i Australia. Pilfinken er 139-155 mm lang, med ett vingespenn på 20-22 cm og veier 20 gram. Pilfinken ligner gråspurvhannen, men kjennes igjen på den den svarte flekken på kinnet og den rødbrune pannen og issen (gråspurvhannen har ett rødbrunt band fra øyet til bak i nakken). På oversiden er pilfinken stripete i rødbrun, svart, gulbrunt og grått. Strupen er svart. Nebbet er konisk og ganske grovt. Munnvikene har tydelige børstehår.",
        infoBarn: "Pilfink tilhører spurvefamilien. Lever i Europa, Sibir og andre deler av Asia, har blitt satt ut i Australia.",
    },
    {
        navn: "Kjøttmeis", 
        bilde: "bilder/kjottmeis.jpg",
        lyd: "lyd/kjottmeis.mp3",
        info: "Kjøttmeis er en fugl i meisefamilien. I Norge finnes den i hele landet. Kalles også kjøtterik, tertitt, musvitt og talgokse. Lengden er cirka 15 cm, og vekten er fra 14 til 20 g. Fuglen er den største i meisefamilien. Kjøttmeisen har et svart hode med hvite kinn og en svart stripe langs den gule undersiden. Hos hannen er denne stripen breiere enn hos hunnene. Ryggen er grønnaktig, mens stjerten og vingene er blåaktige. Unge fugler har ofte litt mattere farger enn de eldre fuglene.",
        infoBarn: "Kjøttmeis er en fugl i meisefamilien. I Norge finnes den i hele landet.",
    },
    {
        navn: "Flaggspett",
        bilde: "bilder/flaggspett.jpg",
        lyd: "lyd/flaggspett.mp3",
        info: "Flaggspetten er en mellomstor spette og den mest tallrike av spettene i Europa. Ryggen er svart med et stort hvitt felt på hver vinge. Undersiden er hvit med kraftig rød undergump. Hannen skilles fra hunnen ved et rødfarget parti i nakken. Unge flaggspetter kjennetegnes med en rød hette med sort kant. Flaggspetten er ca. 25 cm lang, og veier 70-90 g. Nebbet er kraftig og meiselformet.",
        infoBarn: "Flaggspetten er en mellomstor spette og den mest tallrike av spettene i Europa. Ryggen er svart med et stort hvitt felt på hver vinge.",
    },
    {
        navn: "Dompap",
        bilde: "bilder/dompap.jpg",
        lyd: "lyd/dompap.mp3",
        info: "Dompap er en fugl i finkefamilien. Lengden er ca. 16 cm, og vekten er rundt 21 gram, altså på størrelse med de mindre trostefuglene. Dompapen er lett å kjenne igjen når man først får øye på den. Hannen har rosenrødt bryst, blåsvart hette på hodet og oksegrå rygg. Hunnen ligner hannen, men har et gråbrunt bryst. Vingene har gråhvite bånd hos begge kjønn. Nebbet er kort og kraftig med skarpe kanter slik at den kan ta av skallet av frø og knopper.",
        infoBarn: "Dompap er en fugl i finkefamilien. Lengden er ca. 16 cm, og vekten er rundt 21 gram, altså på størrelse med de mindre trostefuglene.",
    },
    {
        navn: "Svartmeis",
        bilde: "bilder/svartmeis.jpg",
        lyd: "lyd/svartmeis.mp3",
        info: "Svartmeis er en fugl i meisefamilien. Lengden er ca. 11 cm, og vekten er ca. 9 gram. Den er med dette den minste i meisefamilien. Svartmeisen har en kort stjert. Hodet er svart med hvite kinnflekker og fuglen har en hvit flekk i nakken. På oversiden er den grå med hvite vingebånd og på undersiden har den en lys gråbeige farge. Den kan forveksles med granmeis og løvmeis, men disse har ikke en hvit nakkeflekk. Svartmeisen er en sosial fugl som gjerne holder seg sammen med andre fugler om vinteren. Ofte kan man se den i flokker sammen med granmeis og fuglekonger.",
        infoBarn: "Svartmeis er en fugl i meisefamilien. Lengden er ca. 11 cm, og vekten er ca.",
    },
];
