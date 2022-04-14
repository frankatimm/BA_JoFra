import sys, fitz
import glob, os

DIR = '/Users/johannaschillig/Documents/Gender_neutral_language/Wahlprogramme_konservativ'
os.chdir(DIR + '')

def listToString(s):
    str1 = ""
    for ele in s:
        str1 += ele
    return str1

for file in glob.glob("*.pdf"):
    print(file)
    filename = os.path.splitext(file)
    filename = filename[0]
    pdfs = []

    with fitz.open(file) as doc:
        text = ""
        for page in doc:
            text += page.getText(text)
            pdfs.append(text)

        textfile = open(DIR + 'text\\' + filename + '.txt', 'w',encoding="utf-8")
    pages = listToString(pdfs)
    textfile.write(pages)
    textfile.close()
