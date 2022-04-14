##right wing

import regex as re
from collections import Counter
import codecs

#open text file in read mode
text_file = open('C:/Users/Franka/Wahlprogrammetext/full_right.txt', "r", encoding="utf8")

#read whole file to a string
data = text_file.read()

#close file
text_file.close()

#words =  data.split(' ')

# Import and download stopwords from NLTK.
from nltk.corpus import stopwords
from nltk import download
download('stopwords')  # Download stopwords list.
stop_words = stopwords.words('german')


def preprocess(sentence):
    return [w for w in sentence.lower().split() if w not in stop_words]

words = preprocess(data)

# def preprocess(words):
#     for word in words:
#         if word not in stop_words:
#             return(word)
#
# preprocessed_words = preprocess(words)
# print(preprocessed_words)

# https://stackoverflow.com/questions/29680287/how-to-find-words-ending-with-ing
# spit so we have list of words from sentence


def ending_with(ending, words):
    # loop through words
    return[word for word in words if word.endswith(ending)]
            #print






generics = ending_with('er', words)


import nltk
from pprint import pprint

fdist = nltk.FreqDist(generics)

pprint(fdist.most_common(200))
# von konsole speichern:
# python mein_programm.py > datei.txt
