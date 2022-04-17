r"""
Most frequent gender-neutral nouns
==================

Demonstrates searching through the gender-neutral corpus in order to find key words for later Soft Cosine Measure.
The key words are gender-neutral nouns that share the ending "Innen".
"""

# import packages
import regex as re
from collections import Counter
import codecs

# open text file in read mode
text_file = open('C:/Users/Franka/Soft_Cosine_Measure/Gender_neutral_language/corpus_gender_neutral.txt', "r", encoding="utf8")

# read whole file to a string
data = text_file.read()

# close file
text_file.close()


# function filters all words that end with gender-neutral form "Innen" from data and returns them as a string
def ending_with(ending, text):
    return " ".join([word for word in text.split() if word.endswith(ending)])

# safe selected words as "gendered_nouns"
gendered_nouns = ending_with('Innen', data)

# split() returns list of all the words in the string
split_it = gendered_nouns.split()

# Pass the split_it list to instance of Counter class.
Counter = Counter(split_it)

# most_common() produces k frequently encountered
# input values and their respective counts.
most_occur = Counter.most_common(500)

print(most_occur)

# save output from the console in text file:
# python most_frequent_gender_neutral_rolenouns.py > most_frequent_gender_neutral_nouns.txt
