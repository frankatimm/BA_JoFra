##leftwing

import regex as re
from collections import Counter
import codecs

#open text file in read mode
text_file = open('C:/Users/Franka/Wahlprogrammetext/leftwing.txt', "r", encoding="utf8")

#read whole file to a string
data = text_file.read()

#close file
text_file.close()


# https://stackoverflow.com/questions/29680287/how-to-find-words-ending-with-ing
# spit so we have list of words from sentence
words =  data.split(' ')

def ending_with(ending, words):
    # loop through words
    for word in words:
        # if word has ends with ending
        if word.endswith(ending):
            #print
            print(word)





ending_with('Innen', words)

# von konsole speichern:
# python mein_programm.py > datei.txt
