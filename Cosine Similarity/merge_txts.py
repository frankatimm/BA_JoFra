filenames = ['Wahlprogramme_konservativtext\AFD_2013.txt', 'Wahlprogramme_konservativtext\AFD_2017.txt',
             'Wahlprogramme_konservativtext\AFD_2021.txt', 'Wahlprogramme_konservativtext\CDU_2013.txt',
             'Wahlprogramme_konservativtext\CDU_2017.txt', 'Wahlprogramme_konservativtext\CDU_2021.txt',
             'Wahlprogramme_konservativtext\FDP_2013.txt', 'Wahlprogramme_konservativtext\FDP_2017.txt',
             'Wahlprogramme_konservativtext\FDP_2021.txt']

# Open file3 in write mode
with open('/Users/johannaschillig/Documents/Gender_neutral_language/full_right.txt', 'w') as outfile:

    for fname in filenames:
        with open(fname) as infile:
            for line in infile:
                outfile.write(line)


filenames2 = ['Wahlprogrammetext\Gruene_2013.txt', 'Wahlprogrammetext\Gruene_2017.txt',
             'Wahlprogrammetext\Gruene_2021.txt','Wahlprogrammetext\Linke_2013.txt',
             'Wahlprogrammetext\Linke_2017.txt','Wahlprogrammetext\Linke_2021.txt',
             'Wahlprogrammetext\SPD_2013.txt','Wahlprogrammetext\SPD_2017.txt',
             'Wahlprogrammetext\SPD_2021.txt']

# Open file3 in write mode
with open('/Users/johannaschillig/Documents/Gender_neutral_language/full_left.txt', 'w') as outfile:

    for fname in filenames2:
        with open(fname) as infile:
            for line in infile:
                outfile.write(line)
