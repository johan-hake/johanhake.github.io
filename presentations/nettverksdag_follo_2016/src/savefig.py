import matplotlib.pyplot as plt


def savetransparent(ax, filename):
    ax.spines['bottom'].set_color('white')
    ax.spines['top'].set_color('white') 
    ax.spines['right'].set_color('white')
    ax.spines['left'].set_color('white')
    
    ax.tick_params(axis='x', colors='white')
    ax.tick_params(axis='y', colors='white')
    
    ax.yaxis.label.set_color('white')
    ax.xaxis.label.set_color('white')
    
    ax.title.set_color('white')
    
    plt.savefig(filename, transparent=True)
