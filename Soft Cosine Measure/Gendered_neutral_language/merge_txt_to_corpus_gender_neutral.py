filenames2 = ['Wahlprogrammetext\Gruene_2013.txt', 'Wahlprogrammetext\Gruene_2017.txt',
             'Wahlprogrammetext\Gruene_2021.txt','Wahlprogrammetext\Linke_2013.txt',
             'Wahlprogrammetext\Linke_2017.txt','Wahlprogrammetext\Linke_2021.txt',
             'Wahlprogrammetext\SPD_2013.txt','Wahlprogrammetext\SPD_2017.txt',
             'Wahlprogrammetext\SPD_2021.txt']

# Open file3 in write mode
with open('C:/Users/Franka/Soft_Cosine_Measure/Gender_neutral_language/corpus_gender_neutral.txt', 'w') as outfile:

    for fname in filenames2:
        with open(fname) as infile:
            for line in infile:
                outfile.write(line)
