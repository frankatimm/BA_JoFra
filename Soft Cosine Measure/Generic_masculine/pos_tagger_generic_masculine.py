r"""
Soft Cosine Measure
===================

Demonstrates using Gensim's implemenation of the SCM.

"""

import nltk
import codecs
import os

textfile = codecs.open('C:/Users/Franka/Wahlprogrammetext/full_right.txt', "r", "utf-8")
text = textfile.read()
textfile.close()

sentences = nltk.sent_tokenize(text,language='german')

tokenized_sent = nltk.tokenize.word_tokenize(sentences[23],language='german')
print(tokenized_sent)

from HanTa import HanoverTagger as ht

tagger = ht.HanoverTagger('morphmodel_ger.pgz')

tags = tagger.tag_sent(tokenized_sent)
print(tags)

from pprint import pprint

nouns = []
sentences_tok = [nltk.tokenize.word_tokenize(sent) for sent in sentences]
for sent in sentences_tok:
    tags = tagger.tag_sent(sent)
    nouns_from_sent = [lemma for (word,lemma,pos) in tags if pos == "NN" or pos == "NE"]
    nouns.extend(nouns_from_sent)

fdist = nltk.FreqDist(nouns)

pprint(fdist.most_common(200))
