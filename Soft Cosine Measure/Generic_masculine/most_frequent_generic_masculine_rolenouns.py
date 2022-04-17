r"""
Most frequent generic masculine nouns
==================

Demonstrates searching through the generic-masculine corpus in order to find key words for later Soft Cosine Measure.
The key words are generic masculine nouns that share the ending "er".
"""


# import packages
import regex as re
from collections import Counter
import codecs

# open text file in read mode
text_file = open('C:/Users/Franka/Soft_Cosine_Measure/Generic_masculine/corpus_generic_masculine.txt', "r", encoding="utf8")

# read whole file to a string
data = text_file.read()

# close file
text_file.close()

# filter words with captial initial and returns them as a string
def filterupper(text):
    return " ".join([word for word in text.split() if word[0].isupper()])

# save as uppercase
uppercase = filterupper(data)

# define stop_words (captial initial)
stop_words = 'Ab Aber Ach Acht Achte Achten Achter Achtes Ag Alle Allein Allem Allen Aller Allerdings Alles Allgemeinen Als Also Am An Andere Anderen Andern Anders Au Auch Auf Aus Ausser Außer Ausserdem Außerdem Bald Bei Beide Beiden Beim Beispiel Bekannt Bereits Besonders Besser Besten Bin Bis Bisher Bist Da Dabei Dadurch Dafür Dagegen Daher Dahin Dahinter Damals Damit Danach Daneben Dank Dann Daran Darauf Daraus Darf Darfst Darin Darüber Darum Darunter Das Dasein Daselbst Dass Daß Dasselbe Davon Davor Dazu Dazwischen Dein Deine Deinem Deiner Dem Dementsprechend Demgegenüber Demgemäss Demgemäß Demselben Demzufolge Den Denen Denn Denselben Der Deren Derjenige Derjenigen Dermassen Dermaßen Derselbe Derselben Des Deshalb Desselben Dessen Deswegen D.h Dich Die Diejenige Diejenigen Dies Diese Dieselbe Dieselben Diesem Diesen Dieser Dieses Dir Doch Dort Drei Drin Dritte Dritten Dritter Drittes Du Durch Durchaus Dürfen Dürft Durfte Durften Eben Ebenso Ehrlich Ei Ei, Eigen Eigene Eigenen Eigener Eigenes Ein Einander Eine Einem Einen Einer Eines Einige Einigen Einiger Einiges Einmal Eins Elf En Ende Endlich Entweder Er Ernst Erst Erste Ersten Erster Erstes Es Etwa Etwas Euch Früher Fünf Fünfte Fünften Fünfter Fünftes Für Gab Ganz Ganze Ganzen Ganzer Ganzes Gar Gedurft Gegen Gegenüber Gehabt Gehen Geht Gekannt Gekonnt Gemacht Gemocht Gemusst Genug Gerade Gern Gesagt Geschweige Gewesen Gewollt Geworden Gibt Ging Gleich Gott Gross Groß Grosse Große Grossen Großen Grosser Großer Grosses Großes Gut Gute Guter Gutes Habe Haben Habt Hast Hat Hatte Hätte Hatten Hätten Heisst Her Heute Hier Hin Hinter Hoch Ich Ihm Ihn Ihnen Ihr Ihre Ihrem Ihren Ihrer Ihres Im Immer In Indem Infolgedessen Ins Irgend Ist Ja Jahr Jahre Jahren Je Jede Jedem Jeden Jeder Jedermann Jedermanns Jedoch Jemand Jemandem Jemanden Jene Jenem Jenen Jener Jenes Jetzt Kam Kann Kannst Kaum Kein Keine Keinem Keinen Keiner Kleine Kleinen Kleiner Kleines Kommen Kommt Können Könnt Konnte Könnte Konnten Kurz Lang Lange Leicht Leide Lieber Los Machen Macht Machte Mag Magst Mahn Man Manche Manchem Manchen Mancher Manches Mann Mehr Mein Meine Meinem Meinen Meiner Meines Mensch Menschen Mich Mir Mit Mittel Mochte Möchte Mochten Mögen Möglich Mögt Morgen Muss Muß Müssen Musst Müsst Musste Mussten Na Nach Nachdem Nahm Natürlich Neben Nein Neue Neuen Neun Neunte Neunten Neunter Neuntes Nicht Nichts Nie Niemand Niemandem Niemanden Noch Nun Nur Ob Oben Oder Offen Oft Ohne Ordnung Recht Rechte Rechten Rechter Rechtes Richtig Rund Sa Sache Sagt Sagte Sah Satt Schlecht Schluss Schon Sechs Sechste Sechsten Sechster Sechstes Sehr Sei Seid Seien Sein Seine Seinem Seinen Seiner Seines Seit Seitdem Selbst Sich Sie Sieben Siebente Siebenten Siebenter Siebentes Sind So Solang Solche Solchem Solchen Solcher Solches Soll Sollen Sollte Sollten Sondern Sonst Sowie Später Statt Tag Tage Tagen Tat Teil Tel Tritt Trotzdem Tun Über Überhaupt Übrigens Uhr Um Und Und? Uns Unser Unsere Unserer Unter Vergangenen Viel Viele Vielem Vielen Vielleicht Vier Vierte Vierten Vierter Viertes Vom Von Vor Wahr? Während Währenddem Währenddessen Wann War Wäre Waren Wart Warum Was Wegen Weil Weit Weiter Weitere Weiteren Weiteres Welche Welchem Welchen Welcher Welches Wem Wen Wenig Wenige Weniger Weniges Wenigstens Wenn Wer Werde Werden Werdet Wessen Wie Wieder Will Willst Wir Wird Wirklich Wirst Wo Wohl Wollen Wollt Wollte Wollten Worden Wurde Würde Wurden Würden Z.b Zehn Zehnte Zehnten Zehnter Zehntes Zeit Zu Zuerst Zugleich Zum Zunächst Zur Zurück Zusammen Zwanzig Zwar Zwei Zweite Zweiten Zweiter Zweites Zwischen Zwölf Euer Eure Hattest Hattet Jedes Mußt Müßt Sollst Sollt Soweit Weshalb Wieso Woher Wohin'

# split stop_words and return list of all stopwords
stop_words = stop_words.split()

# function removes stop_words from all uppercase words and returns them as a string
def removestopwords(text):
    return " ".join([word for word in text.split() if word not in stop_words])

# save as words
words = removestopwords(uppercase)

# function filters all words that end with generic form "er" from words and returns them as a string
def ending_with(ending, text):
    return " ".join([word for word in text.split() if word.endswith(ending)])

# save as generics
generics = ending_with('er', words)


# split() returns list of all the words in the string
split_it = generics.split()

# Pass the split_it list to instance of Counter class.
Counter = Counter(split_it)

# most_common() produces k frequently encountered
# input values and their respective counts.
most_occur = Counter.most_common(500)

print(most_occur)

# save output from the console in text file:
# python most_frequent_generic_masculine_rolenouns.py > most_frequent_generic-masculine-nouns.txt
