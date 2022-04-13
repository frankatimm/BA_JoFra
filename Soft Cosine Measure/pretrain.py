#https://radimrehurek.com/gensim/auto_examples/tutorials/run_word2vec.html#introducing-the-word2vec-model
# Initialize logging.
import logging
logging.basicConfig(format='%(asctime)s : %(levelname)s : %(message)s', level=logging.INFO)

from gensim.test.utils import datapath
from gensim import utils

class MyCorpus:
    """An iterator that yields sentences (lists of str)."""

    def __iter__(self):
        #corpus_path = datapath('C:/Users/Franka/Wahlprogrammetext/leftwing.txt')
        for line in open('C:/Users/Franka/Wahlprogrammetext/leftwing.txt',encoding="utf8"):
            # assume there's one document per line, tokens separated by whitespace
            yield utils.simple_preprocess(line)

import gensim.models

sentences = MyCorpus()
model = gensim.models.Word2Vec(sentences=sentences)


#retrieving vocabulary
for index, word in enumerate(model.wv.index_to_key):
    if index == 10:
        break
    print(f"word #{index}/{len(model.wv.index_to_key)} is {word}")

# import tempfile
#
# with tempfile.NamedTemporaryFile(prefix='gensim-model-', delete=False) as tmp:
#     temporary_filepath = tmp.name
#     model.save(temporary_filepath)
#     #
#     # The model is now safely stored in the filepath.
#     # You can copy it to other machines, share it with others, etc.
#     #
#     # To load a saved model:
#     #
#     new_model = gensim.models.Word2Vec.load(temporary_filepath)
#
# model = gensim.models.KeyedVectors.load_word2vec_format('C:/Users/Franka/Wahlprogrammetext/', binary=False)

# #Initialize queries for comparison
# query_basic = 'Mann und Männer und Frau und Frauen'
# query_wähler_gmasc = 'Wähler'
# query_wähler_gneu = 'Wählerin und Wählerinnen und Wähler'
#
#leftwing
#open text file in read mode
gendered_nouns = open('C:/Users/Franka/Wahlprogrammetext/gendered_nouns.txt', "r")
#encoding="utf8")

#read whole file to a string
data = gendered_nouns.read()

#close file
gendered_nouns.close()

query_basic = 'Mann, Männer, Frau, Frauen, Kinder, Menschen, Mensch, Jugendliche, Teenager, Familie, Jung, Alt, Identität, Religion, Kultur, Herkunft, Gesellschaft, Deutschland, Ehefrau, Ehemann, Ehepaar Mensch Grüne Bündnis Land Zukunft Deutschland Bundestagswahlprogramm Europa Arbeit Kind Zeit Jahr Unternehmen Gesellschaft Recht Euro Ziel Frau Politik Leben Eu Wirtschaft Kapitel Energie Bildung Beschäftigt Wandel Kommune Welt Schutz Demokratie Bürger Staat Bund Familie Entwicklung Teilhabe Zugang Prozent Schule  Linke Weg Ge Umwelt Ort Einkommen Stadt Förderung Möglichkeit Chance Sicherheit Krise Energiewende Bereich Verantwortung Beispiel Angebot Arbeitsplatz Ausbau Lohn Pflege Mittel Infrastruktur Investition Region Kosten Ausbildung Geld JugendlicheBeitrag Forschung Aufgabe Teil Freiheit Gerechtigkeit Vielfalt Klimaschutz Grundlage Finanzierung Raum Produkt Rente Hand Leistung Ebene Betrieb Bürgerinnen Armut Bank Mobilität Blick  Mut Einsatz Hochschule Rahmen Kultur Maßnahme Behinderung  Versorgung Tier Anspruch Bundesregierung Million  Standard Schritt Markt Union Unterstützung Alter Landwirtschaft Reform Programm Eltern Wohlstand Digitalisierung Regel  Netz Gesundheit Interesse Natur Gewalt  Frage Hilfe Parlament Menschenrecht Chen Erfolg Struktur Form Transparenz Verbraucher Beteiligung Verkehr Beruf Folge Wissenschaft Bedingung Industrie Entscheidung Sicherung  Projekt Weiterbildung Job Voraussetzung Mann Arbeitsbedingung Stärkung Dienstleistung Umbau  Wohnung Milliarde Haushalt Einführung  Gesetz Einrichtung Internet Qualität Datum Konzern Kopf Nutzung Frieden Innovation Sinn Personal Verfügung Risiko Kontorolle Strom Seite Herausforderung Anreiz Platz Lösung Ressource Steuer Zusammenarbeit Grenze Regelung Auto Wettbewerb Gewerkschaft System Rolle Beschäftigung Regierung Lebensmittel Miete Spd Arbeitsmarkt Ende Problem Initiative Engagement Handeln Kitas Finanzmarkt'
query_wähler_gmasc = 'Wähler'
query_wähler_gneu = data

##result: similarity = 0.0268


# # #rightwing
# #open text file in read mode
# generic_masculine_nouns = open('C:/Users/Franka/Wahlprogrammetext/generic_masculine_nouns.txt', "r")
# #encoding="utf8")
#
# #read whole file to a string
# data = generic_masculine_nouns.read()
#
# #close file
# generic_masculine_nouns.close()
#
# # query_basic =  'Mann, Männer, Frau, Frauen, Kinder, Menschen, Mensch, Jugendliche, Teenager, Familie, Jung, Alt, Identität, Religion, Kultur, Herkunft, Gesellschaft, Deutschland, Ehefrau, Ehemann, Ehepaar'
# query_basic = 'Deutschland  Land  Mensch  Demokrat Europa Staat Afd Kind  Unternehmen  Bildung Chance  Jahr  Bürger  Familie  Zukunft  Eu  Wirtschaft  Sicherheit  Freiheit  Ziel  Schule  Euro  Entwicklung  Welt  Gesellschaft  Weg  Schutz  Möglichkeit  Leistung  Arbeit  Seite  Verantwortung  Politik  Leben  Recht  Zeit  Union  Bereich  Digitalisierung  Forschung  Demokratie  Arbeitsplatz  Beispiel  Wettbewerb  Rahmen  Wohlstand  Ausbau  Bund  Interesse  Förderung  Maßnahme  Prozent  Frau  Beitrag  Zusammenarbeit  Aufgabe  Ausbildung  Investition  Infrastruktur  Mittel  Wachstum  Teil  Steuer  Hochschule  Geld  Einführung  Integration  Versorgung  Ebene  Herausforderung  Entscheidung  Grundlage  Eltern  Raum  Regel  Marktwirtschaft  Landwirtschaft  Bürgerinnen  Datum  Partner  Kultur  Rahmenbedingung  Dienst  Energie  Region  Chen  Stärkung  Einsatz  Voraussetzung  Gesetz  Betrieb  Ge  Programm  Finanzierung  Kommune  Innovation  Vielfalt  Rente  Lösung  Hilfe  Cdu  Csu  Technologie  Unterstützung  Reform  Mittelstand  Prinzip  Erfolg  Beruf  Altersvorsorge  Schritt  Bürokratie  Zugang  Form  Idee  Generation  Bundestagswahl  Rechtsstaat  Partei  Regelung  Bundesregierung  Markt  Pflege  Mobilität  Grundgesetz  Ort  Schüler  Nutzung  Million  Arbeitsmarkt  Angebot  Anreiz  Einkommen  Alter  Arbeitnehmer  Grenze  Abschaffung  Kosten  Bundeswehr  Blick  Menschenrecht  Stadt  Zahl  Verwaltung  Wert  Frieden  Migration  Nation  Volk  Milliarde  Rolle  Parlament  Art  Standard  Einrichtung  Kraft  Nato  Kontorolle  Sprache  Bedeutung  Arbeitgeber  Produkt  Ezb  Fortschritt  Wettbewerbsfähigkeit  Verbraucher  Asyl  Selbstbestimmung  Industrie  Höhe  Anspruch  Internet  %  Studierend  Schuld  Verbesserung  Instrument  Sinn  Hand  Ausland  Grund  Wissenschaft  Mann  Beschäftigt  Behinderung  Polizei  Kooperation  Fall  System  Usa  Lernen  Stärke  Problem  Regierungsprogramm  Türkei  Vorbild Patient Finanz Kriminalität Währung'
# query_wähler_gmasc = 'Wähler'
# query_wähler_gneu = data
# ##similarity = 0.0955

# Import and download stopwords from NLTK.
from nltk.corpus import stopwords
from nltk import download
download('stopwords')  # Download stopwords list.
stop_words = stopwords.words('german')

def preprocess(sentence):
    return [w for w in sentence.lower().split() if w not in stop_words]

query_basic = preprocess(query_basic)
query_wähler_gmasc = preprocess(query_wähler_gmasc)
query_wähler_gneu = preprocess(query_wähler_gneu)

print(query_basic, query_wähler_gmasc, query_wähler_gneu)

from gensim.corpora import Dictionary
documents = [query_basic, query_wähler_gmasc, query_wähler_gneu]
dictionary = Dictionary(documents)

query_basic = dictionary.doc2bow(query_basic)
query_wähler_gmasc = dictionary.doc2bow(query_wähler_gmasc)
query_wähler_gneu = dictionary.doc2bow(query_wähler_gneu)


from gensim.models import TfidfModel
documents = [query_basic, query_wähler_gmasc, query_wähler_gneu]
tfidf = TfidfModel(documents)

query_basic = tfidf[query_basic]
query_wähler_gmasc = tfidf[query_wähler_gmasc]
query_wähler_gneu = tfidf[query_wähler_gneu]


from gensim.similarities import SparseTermSimilarityMatrix, WordEmbeddingSimilarityIndex
termsim_index = WordEmbeddingSimilarityIndex(model.wv)

termsim_matrix = SparseTermSimilarityMatrix(termsim_index, dictionary, tfidf)

#leftwing
similarity = termsim_matrix.inner_product(query_basic, query_wähler_gneu, normalized=(True, True))
print('similarity = %.4f' % similarity ,'für "Wählerinnen und Wähler" und query_basic(Mann, Männer, Frau, Frauen, Kinder, Menschen, Mensch, Jugendliche, Teenager, Familie, Jung, Alt, Identität, Religion, Kultur, Herkunft, Gesellschaft, Deutschland, Ehefrau, Ehemann, Ehepaar)"')


# #rightwing
# similarity = termsim_matrix.inner_product(query_basic, query_wähler_gmasc, normalized=(True, True))
#print('similarity = %.4f' % similarity ,'für "Wähler" und "query_basic(Mann, Männer, Frau, Frauen, Kinder, Menschen, Mensch, Jugendliche, Teenager, Familie, Jung, Alt, Identität, Religion, Kultur, Herkunft, Gesellschaft, Deutschland, Ehefrau, Ehemann, Ehepaar)"')
