"""Visualization of Politik and its most similar words"""

#import packages
from __future__ import absolute_import, division, print_function
from gensim.models import Word2Vec
from sklearn.manifold import TSNE
from gensim.test.utils import datapath
from gensim import utils
import gensim.models
import gensim
import pandas as pd
import seaborn as sns
sns.set_style("darkgrid")
import numpy as np
import matplotlib.pyplot as plt
from sklearn.decomposition import PCA
from sklearn.manifold import TSNE
from gensim.models import KeyedVectors
from gensim import models
from sklearn.metrics.pairwise import cosine_similarity

#ignore warnings
import warnings

warnings.filterwarnings("ignore")

#create gender-neutral corpus
class MyCorpus:
    """An iterator that yields sentences (lists of str)."""

    def __iter__(self):
        for line in open("C:/Users/Franka/Soft_Cosine_Measure/Gender_neutral_language/corpus_gender_neutral.txt",encoding="utf8"):
            # assume there's one document per line, tokens separated by whitespace
            yield utils.simple_preprocess(line)

# import packages
import gensim.models

# train model on gender-neutral corpus
sentences = MyCorpus()
model = gensim.models.Word2Vec(sentences=sentences, min_count = 1)

#write scatterplot function
def tsnescatterplot(model, word):
    """ Plot in seaborn the results from the t-SNE dimensionality reduction algorithm of the vectors of a query word,
    its list of most similar words, and a list of words.
    """
    arrays = np.empty((0, 100), dtype='f')
    word_labels = [word]
    color_list  = ['red']

    # adds the vector of the query word
    arrays = np.append(arrays, model.wv.__getitem__([word]), axis=0)

    # gets list of most similar words
    close_words = model.wv.most_similar([word])

    # adds the vector for each of the closest words to the array
    for wrd_score in close_words:
        wrd_vector = model.wv.__getitem__([wrd_score[0]])
        word_labels.append(wrd_score[0])
        color_list.append('blue')
        arrays = np.append(arrays, wrd_vector, axis=0)

    # adds the vector for each of the words from list_names to the array
    # for wrd in list_names:
    #     wrd_vector = model.wv.__getitem__([wrd])
    #     word_labels.append(wrd)
    #     color_list.append('green')
    #     arrays = np.append(arrays, wrd_vector, axis=0)

    # Reduces the dimensionality from 300 to 50 dimensions with PCA
    reduc = PCA(n_components=10).fit_transform(arrays)

    # Finds t-SNE coordinates for 2 dimensions
    np.set_printoptions(suppress=True)

    Y = TSNE(n_components=2, random_state=0, perplexity=15).fit_transform(reduc)

    # Sets everything up to plot
    df = pd.DataFrame({'x': [x for x in Y[:, 0]],
                       'y': [y for y in Y[:, 1]],
                       'words': word_labels,
                       'color': color_list})

    fig, _ = plt.subplots()
    fig.set_size_inches(9, 9)

    # Basic plot
    p1 = sns.regplot(data=df,
                     x="x",
                     y="y",
                     fit_reg=False,
                     marker="o",
                     scatter_kws={'s': 40,
                                  'facecolors': df['color']
                                 }
                    )

    # Adds annotations one by one with a loop
    for line in range(0, df.shape[0]):
         p1.text(df["x"][line],
                 df['y'][line],
                 '  ' + df["words"][line].title(),
                 horizontalalignment='left',
                 verticalalignment='bottom', size='medium',
                 color=df['color'][line],
                 weight='normal'
                ).set_size(15)


    plt.xlim(Y[:, 0].min()-50, Y[:, 0].max()+50)
    plt.ylim(Y[:, 1].min()-50, Y[:, 1].max()+50)

    plt.title('Visualization for {} and its most similar words'.format(word.title()))
    plt.show()

tsnescatterplot(model, 'politik')

#[i[0] for i in model.wv.most_similar(negative=["politik"])]


fig.savefig('plot.png')
