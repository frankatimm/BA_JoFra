r"""
Part of Speech Tagging of nouns
===================

Demonstrates using HanoverTagger in order to identify nouns and specifying the 200 most frequent of those.
"""

# import packages
import nltk
import codecs
import os

# open text file in read mode
textfile = codecs.open('C:/Users/Franka/Soft_Cosine_Measure/Gender_neutral_language/corpus_gender_neutral.txt', "r", "utf-8")

# read whole file to a string
text = textfile.read()

# close file
textfile.close()

# tokenize text by sentences
sentences = nltk.sent_tokenize(text,language='german')

# import HanoverTagger

# download and install HanTag once
# !pip install HanTa
from HanTa import HanoverTagger as ht

# include the module and load a pre-trained model
tagger = ht.HanoverTagger('morphmodel_ger.pgz')

# the function _tagsent() all words in a sentence are lemmatized and tagged
tags = tagger.tag_sent(tokenized_sent)
print(tags)

from pprint import pprint

# create empty list for nouns
nouns = []

# pos tagging of sentences for NN or NE
sentences_tok = [nltk.tokenize.word_tokenize(sent) for sent in sentences]
for sent in sentences_tok:
    # tag and lemmatize words in each sentence
    tags = tagger.tag_sent(sent)
    # pos tagging for if position is NN or NE and save those words
    nouns_from_sent = [lemma for (word,lemma,pos) in tags if pos == "NN" or pos == "NE"]
    # add tagged nouns from sentences in list nouns
    nouns.extend(nouns_from_sent)

# find most frequent nouns
fdist = nltk.FreqDist(nouns)

# print first 200 most frequent nouns
pprint(fdist.most_common(200))

# save output from the console in text file:
# python pos_tagger_gender_neutral.py > pos_gender_neutral.txt
