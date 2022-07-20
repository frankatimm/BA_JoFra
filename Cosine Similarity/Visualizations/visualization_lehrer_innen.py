#import packages
import argparse

import gensim
import matplotlib.pyplot as plt
from sklearn.decomposition import PCA
from sklearn.manifold import TSNE



# create list of target words
role_nouns = [
    'frauen', 'männer', 'lehrer', 'lehrerinnen'
]


def draw_words(model, words, pca=False, alternate=True, arrows=True, x1=3, x2=3, y1=3, y2=3, title=''):
    """
    Reduces dimensionality of vectors of given words either with PCA or with t-SNE and draws the words into a diagram.

    :param model: to visualize vectors from
    :param words: list of word strings to visualize
    :param pca: use PCA (True) or t-SNE (False) to reduce dimensionality
    :param alternate: use different color and label align for every second word
    :param arrows: use arrows to connect related words (items that are next to each other in list)
    :param x1: x axis range (from)
    :param x2: x axis range (to)
    :param y1: y axis range (from)
    :param y2: y axis range (to)
    :param title: for diagram
    :return: None
    """
    # get vectors for given words from model
    vectors = [model.wv[word] for word in words]

    if pca:
        pca = PCA(n_components=2, whiten=True)
        vectors2d = pca.fit(vectors).transform(vectors)
    else:
        tsne = TSNE(n_components=2, random_state=0)
        vectors2d = tsne.fit_transform(vectors)

    # draw image
    plt.figure(figsize=(6, 6))
    if pca:
        plt.axis([x1, x2, y1, y2])

    first = True  # color alternation to divide given groups
    for point, word in zip(vectors2d, words):
        # plot points
        plt.scatter(point[0], point[1], c='r' if first else 'g')
        # plot word annotations
        plt.annotate(
            word,
            xy=(point[0], point[1]),
            xytext=(-7, -6) if first else (7, -6),
            textcoords='offset points',
            ha='right' if first else 'left',
            va='bottom',
            size="x-large"
        )
        first = not first if alternate else first

    # draw arrows
    if arrows:
        for i in range(0, len(words)-1, 2):
            a = vectors2d[i][0] + 0.04
            b = vectors2d[i][1]
            c = vectors2d[i+1][0] - 0.04
            d = vectors2d[i+1][1]
            plt.arrow(
                a, b, c-a, d-b,
                shape='full',
                lw=0.1,
                edgecolor='#bbbbbb',
                facecolor='#bbbbbb',
                length_includes_head=True,
                head_width=0.08,
                width=0.01
            )

    # draw diagram title
    if title:
        plt.title(title)
    plt.tight_layout()
    plt.show()

from gensim.test.utils import datapath
from gensim import utils
import gensim.models
import gensim

class MyCorpus:
    """An iterator that yields sentences (lists of str)."""

    def __iter__(self):
        for line in open("C:/Users/Franka/Soft_Cosine_Measure/Gender_neutral_language/corpus_gender_neutral.txt",encoding="utf8"):
            # assume there's one document per line, tokens separated by whitespace
            yield utils.simple_preprocess(line)

# import packages
import gensim.models

# train model on generic_masculine corpus
sentences = MyCorpus()
model = gensim.models.Word2Vec(sentences=sentences, min_count = 1)

# # get trained model
# word2vec_path = 'C:/Users/Franka/Soft_Cosine_Measure/german.model'
#
# trained_model = gensim.models.KeyedVectors.load_word2vec_format(word2vec_path, binary=True)
# draw pca plots
draw_words(model, role_nouns, True, True, True, -3, 3, -2, 2, r'Visualisierung')
#draw_words(trained_model, capital, True, True, True, -3, 3, -2, 2.2, r'$PCA\ Visualisierung:\ Hauptstadt$')
# draw_words(trained_model, language, True, True, True, -3, 3, -2, 1.7, r'$PCA\ Visualisierung:\ Sprache$')
