r"""
Most frequent nouns in Corpus with gender neutral role nouns
==================

Demonstrates filtering the original corpus in order to find key words for later Soft Cosine Measure
"""

#import packages

import regex as re
from collections import Counter
import codecs

#open text file in read mode
text_file = open('C:/Users/Franka/Soft_Cosine_Measure/Gender_neutral_language/corpus_gender_neutral.txt', "r", encoding="utf8")

#read whole file to a string
#save string as "data"
data = text_file.read()

#close file
text_file.close()


#filter all words that end with generic form "er" from words
def ending_with(ending, text):
    return " ".join([word for word in text.split() if word.endswith(ending)])

#safe as generics
gendered_nouns = ending_with('Innen', data)


# split() returns list of all the words in the string
split_it = gendered_nouns.split()

# Pass the split_it list to instance of Counter class.
Counter = Counter(split_it)

# most_common() produces k frequently encountered
# input values and their respective counts.
most_occur = Counter.most_common(500)

print(most_occur)
# #writing function
# #filter words with certain endings
# def ending_with(ending, words):
#     # loop through words
#     for word in words:
#         # if word has ends with ending
#         if word.endswith(ending):
#             #print
#             print(word)
#
# #filter all words that end with "Innen"
# gendered_nouns = ending_with('Innen', words)
#
# import nltk
# from pprint import pprint
#
# fdist = nltk.FreqDist(generics)
#
# pprint(fdist.most_common(200))

# save output form the console:
# python mein_programm.py > most_frequent_gender_neutral_nouns.txt
