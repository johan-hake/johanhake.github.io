# -*- coding: utf-8 -*-
# Importerer moduler for numeriske beregninger (NumPy) og
# for plotting (matplotlib)
import matplotlib
import matplotlib.pyplot as plt
import numpy as np
import savefig

matplotlib.rc("font", family="sans-serif", weight="bold", size=20)

# Tidspunkter (diskrete og "kontinuerlige")
t_h = np.linspace(0,1,6)
t_k = np.linspace(0,1,1001)

# Vår kvadratiske funksjon
def f(t):
    return t**2

# Plottar en "kontinuerlig linje og en diskret"
plt.plot(t_k, f(t_k), '-r', t_h, f(t_h), 'ob', lw=2, ms=10)

# Annoterar aksene på plottet
plt.xlabel('t')
plt.ylabel('y=f(t)')
plt.title(r'$f(t)=t^2$')

# Får tak på gjeldende plot
ax = plt.gca()

# Lagrer plottet
savefig.savetransparent(ax, 'fig/diskret_funksjon.svg')
