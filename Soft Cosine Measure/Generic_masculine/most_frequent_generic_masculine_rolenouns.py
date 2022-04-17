r"""
Most frequent nouns in Corpus with generic masculine role nouns
==================

Demonstrates filtering the original corpus in order to find key words for later Soft Cosine Measure
"""


#import packages
import regex as re
from collections import Counter
import codecs

#open text file in read mode
text_file = open('C:/Users/Franka/Wahlprogrammetext/full_right.txt', "r", encoding="utf8")

#read whole file to a string
data = text_file.read()

#close file
text_file.close()

#filter words with captial initial
def filterupper(text):
    return " ".join([word for word in text.split() if word[0].isupper()])

uppercase = filterupper(data)

#define stop_words
stop_words = 'Ab Aber Ach Acht Achte Achten Achter Achtes Ag Alle Allein Allem Allen Aller Allerdings Alles Allgemeinen Als Also Am An Andere Anderen Andern Anders Au Auch Auf Aus Ausser Außer Ausserdem Außerdem Bald Bei Beide Beiden Beim Beispiel Bekannt Bereits Besonders Besser Besten Bin Bis Bisher Bist Da Dabei Dadurch Dafür Dagegen Daher Dahin Dahinter Damals Damit Danach Daneben Dank Dann Daran Darauf Daraus Darf Darfst Darin Darüber Darum Darunter Das Dasein Daselbst Dass Daß Dasselbe Davon Davor Dazu Dazwischen Dein Deine Deinem Deiner Dem Dementsprechend Demgegenüber Demgemäss Demgemäß Demselben Demzufolge Den Denen Denn Denselben Der Deren Derjenige Derjenigen Dermassen Dermaßen Derselbe Derselben Des Deshalb Desselben Dessen Deswegen D.h Dich Die Diejenige Diejenigen Dies Diese Dieselbe Dieselben Diesem Diesen Dieser Dieses Dir Doch Dort Drei Drin Dritte Dritten Dritter Drittes Du Durch Durchaus Dürfen Dürft Durfte Durften Eben Ebenso Ehrlich Ei Ei, Eigen Eigene Eigenen Eigener Eigenes Ein Einander Eine Einem Einen Einer Eines Einige Einigen Einiger Einiges Einmal Eins Elf En Ende Endlich Entweder Er Ernst Erst Erste Ersten Erster Erstes Es Etwa Etwas Euch Früher Fünf Fünfte Fünften Fünfter Fünftes Für Gab Ganz Ganze Ganzen Ganzer Ganzes Gar Gedurft Gegen Gegenüber Gehabt Gehen Geht Gekannt Gekonnt Gemacht Gemocht Gemusst Genug Gerade Gern Gesagt Geschweige Gewesen Gewollt Geworden Gibt Ging Gleich Gott Gross Groß Grosse Große Grossen Großen Grosser Großer Grosses Großes Gut Gute Guter Gutes Habe Haben Habt Hast Hat Hatte Hätte Hatten Hätten Heisst Her Heute Hier Hin Hinter Hoch Ich Ihm Ihn Ihnen Ihr Ihre Ihrem Ihren Ihrer Ihres Im Immer In Indem Infolgedessen Ins Irgend Ist Ja Jahr Jahre Jahren Je Jede Jedem Jeden Jeder Jedermann Jedermanns Jedoch Jemand Jemandem Jemanden Jene Jenem Jenen Jener Jenes Jetzt Kam Kann Kannst Kaum Kein Keine Keinem Keinen Keiner Kleine Kleinen Kleiner Kleines Kommen Kommt Können Könnt Konnte Könnte Konnten Kurz Lang Lange Leicht Leide Lieber Los Machen Macht Machte Mag Magst Mahn Man Manche Manchem Manchen Mancher Manches Mann Mehr Mein Meine Meinem Meinen Meiner Meines Mensch Menschen Mich Mir Mit Mittel Mochte Möchte Mochten Mögen Möglich Mögt Morgen Muss Muß Müssen Musst Müsst Musste Mussten Na Nach Nachdem Nahm Natürlich Neben Nein Neue Neuen Neun Neunte Neunten Neunter Neuntes Nicht Nichts Nie Niemand Niemandem Niemanden Noch Nun Nur Ob Oben Oder Offen Oft Ohne Ordnung Recht Rechte Rechten Rechter Rechtes Richtig Rund Sa Sache Sagt Sagte Sah Satt Schlecht Schluss Schon Sechs Sechste Sechsten Sechster Sechstes Sehr Sei Seid Seien Sein Seine Seinem Seinen Seiner Seines Seit Seitdem Selbst Sich Sie Sieben Siebente Siebenten Siebenter Siebentes Sind So Solang Solche Solchem Solchen Solcher Solches Soll Sollen Sollte Sollten Sondern Sonst Sowie Später Statt Tag Tage Tagen Tat Teil Tel Tritt Trotzdem Tun Über Überhaupt Übrigens Uhr Um Und Und? Uns Unser Unsere Unserer Unter Vergangenen Viel Viele Vielem Vielen Vielleicht Vier Vierte Vierten Vierter Viertes Vom Von Vor Wahr? Während Währenddem Währenddessen Wann War Wäre Waren Wart Warum Was Wegen Weil Weit Weiter Weitere Weiteren Weiteres Welche Welchem Welchen Welcher Welches Wem Wen Wenig Wenige Weniger Weniges Wenigstens Wenn Wer Werde Werden Werdet Wessen Wie Wieder Will Willst Wir Wird Wirklich Wirst Wo Wohl Wollen Wollt Wollte Wollten Worden Wurde Würde Wurden Würden Z.b Zehn Zehnte Zehnten Zehnter Zehntes Zeit Zu Zuerst Zugleich Zum Zunächst Zur Zurück Zusammen Zwanzig Zwar Zwei Zweite Zweiten Zweiter Zweites Zwischen Zwölf Euer Eure Hattest Hattet Jedes Mußt Müßt Sollst Sollt Soweit Weshalb Wieso Woher Wohin ab aber ach acht achte achten achter achtes ag alle allein allem allen aller allerdings alles allgemeinen als also am an andere anderen andern anders au auch auf aus ausser außer ausserdem außerdem bald bei beide beiden beim beispiel bekannt bereits besonders besser besten bin bis bisher bist da dabei dadurch dafür dagegen daher dahin dahinter damals damit danach daneben dank dann daran darauf daraus darf darfst darin darüber darum darunter das dasein daselbst dass daß dasselbe davon davor dazu dazwischen dein deine deinem deiner dem dementsprechend demgegenüber demgemäss demgemäß demselben demzufolge den denen denn denselben der deren derjenige derjenigen dermassen dermaßen derselbe derselben des deshalb desselben dessen deswegen d.h dich die diejenige diejenigen dies diese dieselbe dieselben diesem diesen dieser dieses dir doch dort drei drin dritte dritten dritter drittes du durch durchaus dürfen dürft durfte durften eben ebenso ehrlich ei ei, eigen eigene eigenen eigener eigenes ein einander eine einem einen einer eines einige einigen einiger einiges einmal eins elf en ende endlich entweder er ernst erst erste ersten erster erstes es etwa etwas euch früher fünf fünfte fünften fünfter fünftes für gab ganz ganze ganzen ganzer ganzes gar gedurft gegen gegenüber gehabt gehen geht gekannt gekonnt gemacht gemocht gemusst genug gerade gern gesagt geschweige gewesen gewollt geworden gibt ging gleich gott gross groß grosse große grossen großen grosser großer grosses großes gut gute guter gutes habe haben habt hast hat hatte hätte hatten hätten heisst her heute hier hin hinter hoch ich ihm ihn ihnen ihr ihre ihrem ihren ihrer ihres im immer in indem infolgedessen ins irgend ist ja jahr jahre jahren je jede jedem jeden jeder jedermann jedermanns jedoch jemand jemandem jemanden jene jenem jenen jener jenes jetzt kam kann kannst kaum kein keine keinem keinen keiner kleine kleinen kleiner kleines kommen kommt können könnt konnte könnte konnten kurz lang lange leicht leide lieber los machen macht machte mag magst mahn man manche manchem manchen mancher manches mann mehr mein meine meinem meinen meiner meines mensch menschen mich mir mit mittel mochte möchte mochten mögen möglich mögt morgen muss muß müssen musst müsst musste mussten na nach nachdem nahm natürlich neben nein neue neuen neun neunte neunten neunter neuntes nicht nichts nie niemand niemandem niemanden noch nun nur ob oben oder offen oft ohne ordnung recht rechte rechten rechter rechtes richtig rund sa sache sagt sagte sah satt schlecht schluss schon sechs sechste sechsten sechster sechstes sehr sei seid seien sein seine seinem seinen seiner seines seit seitdem selbst sich sie sieben siebente siebenten siebenter siebentes sind so solang solche solchem solchen solcher solches soll sollen sollte sollten sondern sonst sowie später statt tag tage tagen tat teil tel tritt trotzdem tun über überhaupt übrigens uhr um und und? uns unser unsere unserer unter vergangenen viel viele vielem vielen vielleicht vier vierte vierten vierter viertes vom von vor wahr? während währenddem währenddessen wann war wäre waren wart warum was wegen weil weit weiter weitere weiteren weiteres welche welchem welchen welcher welches wem wen wenig wenige weniger weniges wenigstens wenn wer werde werden werdet wessen wie wieder will willst wir wird wirklich wirst wo wohl wollen wollt wollte wollten worden wurde würde wurden würden z.b zehn zehnte zehnten zehnter zehntes zeit zu zuerst zugleich zum zunächst zur zurück zusammen zwanzig zwar zwei zweite zweiten zweiter zweites zwischen zwölf euer eure hattest hattet jedes mußt müßt sollst sollt soweit weshalb wieso woher wohin'

#split stopwords
#return list of all stopwords
stop_words = stop_words.split()

#remove stopwords from all uppercase words
def removestopwords(text):
    return " ".join([word for word in text.split() if word not in stop_words])

words = removestopwords(uppercase)

#filter all words that end with generic form "er" from words
def ending_with(ending, text):
    return " ".join([word for word in text.split() if word.endswith(ending)])

#safe as generics
generics = ending_with('er', words)


# split() returns list of all the words in the string
split_it = generics.split()

# Pass the split_it list to instance of Counter class.
Counter = Counter(split_it)

# most_common() produces k frequently encountered
# input values and their respective counts.
most_occur = Counter.most_common(500)

print(most_occur)

# von konsole speichern:
# python mein_programm.py > most_frequent_generic-masculine-nouns.txt
