r"""
Computing the Soft Cosine Measure
===================

Demonstrates using Gensim's implemenation of the SCM.
Compares basic query with generic-masculine query.
"""

# Initialize logging.
import logging
logging.basicConfig(format='%(asctime)s : %(levelname)s : %(message)s', level=logging.INFO)

# import packages
from gensim.test.utils import datapath
from gensim import utils

# training our own model on our gender-neutral corpus
# implement a memory-friendly iterator that reads it line-by-line
class MyCorpus:
    """An iterator that yields sentences (lists of str)."""

    def __iter__(self):
        for line in open('C:/Users/Franka/Soft_Cosine_Measure/Generic_masculine/corpus_generic_masculine.txt',encoding="utf8"):
            # assume there's one document per line, tokens separated by whitespace
            yield utils.simple_preprocess(line)

# import packages
import gensim.models

# train model on generic_masculine corpus
sentences = MyCorpus()
model = gensim.models.Word2Vec(sentences=sentences)


# retrieve the vocabulary of our model
for index, word in enumerate(model.wv.index_to_key):
    if index == 10:
        break
    print(f"word #{index}/{len(model.wv.index_to_key)} is {word}")


# Initialize queries

query_mann = 'Mann Männer männlich Jungen Herr Herren'
query_frau = 'Frau Frauen weiblich Mädchen Damen'

query_all = 'Bürger, Arbeitnehmer, Verbraucher, Wähler, Steuerzahler, Urheber, Nutzer, Schüler, Unternehmer, Lehrer, Sportler, Politiker'
query_buerger = 'Bürger'
query_arbeitnehmer = 'Arbeitnehmer'
query_verbraucher = 'Verbraucher'
query_waehler = 'Wähler'
query_steuerzahler = 'Steuerzahler'
query_urheber = 'Urheber'
query_nutzer = 'Nutzer'
query_schueler = 'Schüler'
query_unternehmer = 'Unternehmer'
query_lehrer = 'Lehrer'
query_sportler = 'Sportler'
query_politiker = 'Politiker'

######################################################################################
# # basic query with most frequent nouns
# query_basic = 'Mann, Männer, Frau, Frauen, Kinder, Menschen, Mensch, Jugendliche, Teenager, Familie, Jung, Alt, Identität, Religion, Kultur, Herkunft, Gesellschaft, Deutschland, Ehefrau, Ehemann, Ehepaar Mensch Deutschland  Land  Mensch  Demokrat Europa Staat Afd Kind  Unternehmen  Bildung Chance  Jahr  Bürger  Familie  Zukunft  Eu  Wirtschaft  Sicherheit  Freiheit  Ziel  Schule  Euro  Entwicklung  Welt  Gesellschaft  Weg  Schutz  Möglichkeit  Leistung  Arbeit  Seite  Verantwortung  Politik  Leben  Recht  Zeit  Union  Bereich  Digitalisierung  Forschung  Demokratie  Arbeitsplatz  Beispiel  Wettbewerb  Rahmen  Wohlstand  Ausbau  Bund  Interesse  Förderung  Maßnahme  Prozent  Frau  Beitrag  Zusammenarbeit  Aufgabe  Ausbildung  Investition  Infrastruktur  Mittel  Wachstum  Teil  Steuer  Hochschule  Geld  Einführung  Integration  Versorgung  Ebene  Herausforderung  Entscheidung  Grundlage  Eltern  Raum  Regel  Marktwirtschaft  Landwirtschaft  Bürgerinnen  Datum  Partner  Kultur  Rahmenbedingung  Dienst  Energie  Region  Chen  Stärkung  Einsatz  Voraussetzung  Gesetz  Betrieb  Ge  Programm  Finanzierung  Kommune  Innovation  Vielfalt  Rente  Lösung  Hilfe  Cdu  Csu  Technologie  Unterstützung  Reform  Mittelstand  Prinzip  Erfolg  Beruf  Altersvorsorge  Schritt  Bürokratie  Zugang  Form  Idee  Generation  Bundestagswahl  Rechtsstaat  Partei  Regelung  Bundesregierung  Markt  Pflege  Mobilität  Grundgesetz  Ort  Schüler  Nutzung  Million  Arbeitsmarkt  Angebot  Anreiz  Einkommen  Alter  Arbeitnehmer  Grenze  Abschaffung  Kosten  Bundeswehr  Blick  Menschenrecht  Stadt  Zahl  Verwaltung  Wert  Frieden  Migration  Nation  Volk  Milliarde  Rolle  Parlament  Art  Standard  Einrichtung  Kraft  Nato  Kontorolle  Sprache  Bedeutung  Arbeitgeber  Produkt  Ezb  Fortschritt  Wettbewerbsfähigkeit  Verbraucher  Asyl  Selbstbestimmung  Industrie  Höhe  Anspruch  Internet  %  Studierend  Schuld  Verbesserung  Instrument  Sinn  Hand  Ausland  Grund  Wissenschaft  Mann  Beschäftigt  Behinderung  Polizei  Kooperation  Fall  System  Usa  Lernen  Stärke  Problem  Regierungsprogramm  Türkei  Vorbild Patient Finanz Kriminalität Währung'
#
# # generic_masculine query with most frequent masculine generic nouns
# query_generic_masculine = '  Kinder  Länder   Lehrer  Dauer  Schweizer  Steuerzahler  Ferner  Mitarbeiter  Zeitalter  Mitglieder  Männer  Träger  Opfer  Wälder  Asylbewerber  Krankenhäuser  Erbschaftsteuer  Gründer  Täter  Rentner  Miteinander  Digitalsteuer  Mutter  Väter  Völker  Bundesländer  Vermögensteuer  Unternehmer  Anbieter  Grunderwerbsteuer  Umsatzsteuer  Gewerbesteuer  Einkommensteuer  Wasser  Tarifpartner  Sparer  Pariser  Regierungspolitiker  Vorreiter  Minister  Stabilitätsanker  Verkehrsträger  Hinweisgeber  Vaterländer  Mieter  Impulsgeber  Wähler  Vermögenssteuer  Moderner  Gelder  Forscher  Sozialer  Straftäter  Neuer  Politiker  Master  Sozialgesetzbücher  Beitragszahler  Stromsteuer  Fächer  Krimineller  Rentenalter  Fairer  Digitalzeitalter  Transfer  Güter  Richter  Meister  Freier  Mütter  Magister  Internationaler  Urheber  Leistungsträger  Gefährder  Partnerländer  Bewerber  Ausländer  Einwanderer  Geschlechter  Entwicklungsländer  Bezugsdauer  Leider  September  Vorbilder Handwerker  Vater  Digitaler  Bundeskanzler  Nutzer  Künstlicher  Riester  Nummer  Vertreter  Wirtschaftsgüter  Genfer  Geldgeber  Ämter  Leiharbeitnehmer  Parlamentarier  Gläubiger  Grundpfeiler  Mittelmeer  Volksvertreter  Finger  Leistungsempfänger  Bündnispartner  Hersteller  Grundsteuer  Wissenschaftler  Hunger  Mandatsträger  Besserer  Zentraler  Europäer  Flexiblerer  Aussiedler  Aktivierender  Whistleblower  Fehler  Erzieher  Biersteuer  Flexibler  Newcomer  Wettbewerber  Erneuerbarer  Nebeneinander  Neugier  Klassenzimmer  Auftraggeber  Pfeiler  Herkunftsländer  Renteneintrittsalter  Betreiber  Anleger  CO-neutraler  Zweitwohnungssteuer  MINT-Fächer  Zuwanderer  Deutscher  Finanztransaktionssteuer  Jugendämter  Geber  Angehöriger  Energieträger  Königsteiner  Justizminister  Gegner  Effektiver  Sozialpartner  Oktober  Eigentümer  Berliner  Jäger  Sicher  Landesämter  Entscheidungsträger  Freiberufler  Strafmündigkeitsalter  November  EU-Ausländer  Mehrwertsteuer  Technischer  Eckpfeiler  Schaumweinsteuer  Fischereisteuer  Generationsübergreifender  Treiber  Kindesalter  Nachhaltiger  Bezieher  Verfassungsrechtler  Einwohner  Körperschaftsteuer  Einkommensteuerzahler  Speicher  Voller  Erfinder  Quereinsteiger  Mehrgenerationenhäuser  Wirksamer  Beschäftigtenvertreter  Vermieter  Rentenbezieher  Gewässer  Zeitarbeitnehmer  Per  Lindner  Finanzminister  Schiller  Regenwälder  Weimarer  Semester  Anwohner  Gesetzgeber  Wachstumstreiber  Handelspartner  Entwickler  Gesellschafter  Weder  Trinkwasser  Erzeuger  Kleinkinder  Stromzähler  Wider  Schlecker  Ungeborener  Ehepartner  Luftverkehrssteuer  Schuldner  Fördergelder  Existenzgründer  Steuerschlupflöcher  Tier  Marschflugkörper  Legalwaffenbesitzer  Wiener  Gemeinsamer  Stimmungsbilder  Schulabgänger  Clan-Mitglieder  Flüchtlingskinder  Aufenthaltsdauer  Marktteilnehmer  Sportler  Personenstandsregister  Standesämter  Abgeltungsteuer  Berufsschüler  Fürsprecher  Prozentualer  Automobilhersteller  Deutsch-französischer  Aachener  Spätaussiedler  Kandidatenländer  Urlaubssemester  EU-Bürger  Berufsfelder  Niedriglohnempfänger  Abgelehnter  Asylantragsteller  Schwellenländer  Verfahrensdauer  EU-Länder  Endlager  Tech-Gründer  Ausreisepflichtiger  Erbschaftssteuer  Dienstleister  Identitätstäuscher  Mitwirkungsverweigerer  Datenträger  Mitbürger  Papier  Alzheimer  Amtsträger  Quantencomputer  Provider  Parlamentarischer'

#similarity = 0.0816 für "query_basic" und "query_generic_masculine"
######################################################################################

# Import and download stopwords from NLTK.
from nltk.corpus import stopwords
from nltk import download
download('stopwords')  # Download stopwords list.
stop_words = stopwords.words('german')

# Before we compute the SCM, we do some preprocessing
# we want to remove stopwords as these do not contribute a lot to the information in the sentences
# split sentences into words and
# lowercasing each word
def preprocess(sentence):
    return [w for w in sentence.lower().split() if w not in stop_words]

# preprocess queries
query_mann = preprocess(query_mann)
query_frau = preprocess(query_frau)

query_all = preprocess(query_all)
query_buerger = preprocess(query_buerger)
query_arbeitnehmer = preprocess(query_arbeitnehmer)
query_verbraucher = preprocess(query_verbraucher)
query_waehler = preprocess(query_waehler)
query_steuerzahler = preprocess(query_steuerzahler)
query_urheber = preprocess(query_urheber)
query_nutzer = preprocess(query_nutzer)
query_schueler = preprocess(query_schueler)
query_unternehmer = preprocess(query_unternehmer)
query_lehrer = preprocess(query_lehrer)
query_sportler = preprocess(query_sportler)
query_politiker = preprocess(query_politiker)


# import packages
from gensim.corpora import Dictionary

# build a dictionary and a TF-IDF model, and convert the sentences to the bag-of-words format
documents = [query_mann, query_frau, query_all, query_buerger, query_arbeitnehmer, query_verbraucher, query_waehler, query_steuerzahler, query_urheber, query_nutzer, query_schueler, query_unternehmer, query_lehrer, query_sportler, query_politiker]
dictionary = Dictionary(documents)

# # build a dictionary and a TF-IDF model, and convert the sentences to the bag-of-words format
# documents = [query_basic, query_generic_masculine]
# dictionary = Dictionary(documents)

# query_basic = dictionary.doc2bow(query_basic)
# query_generic_masculine = dictionary.doc2bow(query_generic_masculine)

query_mann = dictionary.doc2bow(query_mann)
query_frau = dictionary.doc2bow(query_frau)

query_all = dictionary.doc2bow(query_all)
query_buerger = dictionary.doc2bow(query_buerger)
query_arbeitnehmer = dictionary.doc2bow(query_arbeitnehmer)
query_verbraucher = dictionary.doc2bow(query_verbraucher)
query_waehler = dictionary.doc2bow(query_waehler)
query_steuerzahler = dictionary.doc2bow(query_steuerzahler)
query_urheber = dictionary.doc2bow(query_urheber)
query_nutzer = dictionary.doc2bow(query_nutzer)
query_schueler = dictionary.doc2bow(query_schueler)
query_unternehmer= dictionary.doc2bow(query_unternehmer)
query_lehrer = dictionary.doc2bow(query_lehrer)
query_sportler = dictionary.doc2bow(query_sportler)
query_politiker = dictionary.doc2bow(query_politiker)

# import packages
from gensim.models import TfidfModel

documents = [query_mann, query_frau, query_all, query_buerger, query_arbeitnehmer, query_verbraucher, query_waehler, query_steuerzahler, query_urheber, query_nutzer, query_schueler, query_unternehmer, query_lehrer, query_sportler, query_politiker]
tfidf = TfidfModel(documents)

# documents = [query_basic, query_generic_masculine]
# tfidf = TfidfModel(documents)
query_mann = tfidf[query_mann]
query_frau = tfidf[query_frau]

query_all = tfidf[query_all]
query_buerger = tfidf[query_buerger]
query_arbeitnehmer = tfidf[query_arbeitnehmer]
query_verbraucher = tfidf[query_verbraucher]
query_waehler = tfidf[query_waehler]
query_steuerzahler = tfidf[query_steuerzahler]
query_urheber = tfidf[query_urheber]
query_nutzer = tfidf[query_nutzer]
query_schueler = tfidf[query_schueler]
query_unternehmer= tfidf[query_unternehmer]
query_lehrer = tfidf[query_lehrer]
query_sportler = tfidf[query_sportler]
query_politiker = tfidf[query_politiker]

# query_basic = tfidf[query_basic]
# query_generic_masculine = tfidf[query_generic_masculine]

# import packages
from gensim.similarities import SparseTermSimilarityMatrix, WordEmbeddingSimilarityIndex

# load model into a Gensim Word2Vec model class
# and build a term similarity mextrix using the embeddings
termsim_index = WordEmbeddingSimilarityIndex(model.wv)
termsim_matrix = SparseTermSimilarityMatrix(termsim_index, dictionary, tfidf)


# similarity = termsim_matrix.inner_product(query_basic, query_generic_masculine, normalized=(True, True))
# print('similarity = %.4f' % similarity ,'für "query_basic" und "query_generic_masculine"')

similarity_all_m = termsim_matrix.inner_product(query_mann, query_all, normalized=(True, True))
print('similarity = %.4f' % similarity_all_m ,'für "Mann" und "all"')
similarity_all_f = termsim_matrix.inner_product(query_frau, query_all, normalized=(True, True))
print('similarity = %.4f' % similarity_all_f ,'für "Frau" und "all"')


similarity_buerger_m = termsim_matrix.inner_product(query_mann, query_buerger, normalized=(True, True))
print('similarity = %.4f' % similarity_buerger_m ,'für "Mann" und "Bürger"')
similarity_buerger_f = termsim_matrix.inner_product(query_frau, query_buerger, normalized=(True, True))
print('similarity = %.4f' % similarity_buerger_f ,'für "Frau" und "Bürger"')

similarity_arbeitnehmer_m = termsim_matrix.inner_product(query_mann, query_arbeitnehmer, normalized=(True, True))
print('similarity = %.4f' % similarity_arbeitnehmer_m ,'für "Mann" und "Arbeitnehmer"')
similarity_arbeitnehmer_f = termsim_matrix.inner_product(query_frau, query_arbeitnehmer, normalized=(True, True))
print('similarity = %.4f' % similarity_arbeitnehmer_f ,'für "Frau" und "Arbeitnehmer"')

similarity_verbraucher_m = termsim_matrix.inner_product(query_mann, query_verbraucher, normalized=(True, True))
print('similarity = %.4f' % similarity_verbraucher_m ,'für "Mann" und "Verbraucher"')
similarity_verbraucher_f = termsim_matrix.inner_product(query_frau, query_verbraucher, normalized=(True, True))
print('similarity = %.4f' % similarity_verbraucher_f ,'für "Frau" und "Verbraucher"')

similarity_waehler_m = termsim_matrix.inner_product(query_mann, query_waehler, normalized=(True, True))
print('similarity = %.4f' % similarity_waehler_m ,'für "Mann" und "Wähler"')
similarity_waehler_f = termsim_matrix.inner_product(query_frau, query_waehler, normalized=(True, True))
print('similarity = %.4f' % similarity_waehler_f ,'für "Frau" und "Wähler"')

similarity_steuerzahler_m = termsim_matrix.inner_product(query_mann, query_steuerzahler, normalized=(True, True))
print('similarity = %.4f' % similarity_steuerzahler_m ,'für "Mann" und "Steuerzahler"')
similarity_steuerzahler_f = termsim_matrix.inner_product(query_frau, query_steuerzahler, normalized=(True, True))
print('similarity = %.4f' % similarity_steuerzahler_f ,'für "Frau" und "Steuerzahler"')

similarity_urheber_m = termsim_matrix.inner_product(query_mann, query_urheber, normalized=(True, True))
print('similarity = %.4f' % similarity_urheber_m ,'für "Mann" und "Urheber"')
similarity_urheber_f = termsim_matrix.inner_product(query_frau, query_urheber, normalized=(True, True))
print('similarity = %.4f' % similarity_urheber_f ,'für "Frau" und "Urheber"')

similarity_nutzer_m = termsim_matrix.inner_product(query_mann, query_nutzer, normalized=(True, True))
print('similarity = %.4f' % similarity_nutzer_m ,'für "Mann" und "Nutzer"')
similarity_nutzer_f = termsim_matrix.inner_product(query_frau, query_nutzer, normalized=(True, True))
print('similarity = %.4f' % similarity_nutzer_f ,'für "Frau" und "Nutzer"')

similarity_schueler_m = termsim_matrix.inner_product(query_mann, query_schueler, normalized=(True, True))
print('similarity = %.4f' % similarity_schueler_m ,'für "Mann" und "Schüler"')
similarity_schueler_f = termsim_matrix.inner_product(query_frau, query_schueler, normalized=(True, True))
print('similarity = %.4f' % similarity_schueler_f ,'für "Frau" und "Schüler"')

similarity_unternehmer_m = termsim_matrix.inner_product(query_mann, query_unternehmer, normalized=(True, True))
print('similarity = %.4f' % similarity_unternehmer_m ,'für "Mann" und "Unternehmer"')
similarity_unternehmer_f = termsim_matrix.inner_product(query_frau, query_unternehmer, normalized=(True, True))
print('similarity = %.4f' % similarity_unternehmer_f ,'für "Frau" und "Unternehmer"')

similarity_lehrer_m = termsim_matrix.inner_product(query_mann, query_lehrer, normalized=(True, True))
print('similarity = %.4f' % similarity_lehrer_m ,'für "Mann" und "Lehrer"')
similarity_lehrer_f = termsim_matrix.inner_product(query_frau, query_lehrer, normalized=(True, True))
print('similarity = %.4f' % similarity_lehrer_f ,'für "Frau" und "Lehrer"')

similarity_sportler_m = termsim_matrix.inner_product(query_mann, query_sportler, normalized=(True, True))
print('similarity = %.4f' % similarity_sportler_m ,'für "Mann" und "Sportler"')
similarity_sportler_f = termsim_matrix.inner_product(query_frau, query_sportler, normalized=(True, True))
print('similarity = %.4f' % similarity_sportler_f ,'für "Frau" und "Sportler"')

similarity_politiker_m = termsim_matrix.inner_product(query_mann, query_politiker, normalized=(True, True))
print('similarity = %.4f' % similarity_politiker_m ,'für "Mann" und "Politiker"')
similarity_politiker_f = termsim_matrix.inner_product(query_frau, query_politiker, normalized=(True, True))
print('similarity = %.4f' % similarity_politiker_f ,'für "Frau" und "Politiker"')
