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

# basic query with most frequent nouns
query_basic = 'Mann, Männer, Frau, Frauen, Kinder, Menschen, Mensch, Jugendliche, Teenager, Familie, Jung, Alt, Identität, Religion, Kultur, Herkunft, Gesellschaft, Deutschland, Ehefrau, Ehemann, Ehepaar Mensch Deutschland  Land  Mensch  Demokrat Europa Staat Afd Kind  Unternehmen  Bildung Chance  Jahr  Bürger  Familie  Zukunft  Eu  Wirtschaft  Sicherheit  Freiheit  Ziel  Schule  Euro  Entwicklung  Welt  Gesellschaft  Weg  Schutz  Möglichkeit  Leistung  Arbeit  Seite  Verantwortung  Politik  Leben  Recht  Zeit  Union  Bereich  Digitalisierung  Forschung  Demokratie  Arbeitsplatz  Beispiel  Wettbewerb  Rahmen  Wohlstand  Ausbau  Bund  Interesse  Förderung  Maßnahme  Prozent  Frau  Beitrag  Zusammenarbeit  Aufgabe  Ausbildung  Investition  Infrastruktur  Mittel  Wachstum  Teil  Steuer  Hochschule  Geld  Einführung  Integration  Versorgung  Ebene  Herausforderung  Entscheidung  Grundlage  Eltern  Raum  Regel  Marktwirtschaft  Landwirtschaft  Bürgerinnen  Datum  Partner  Kultur  Rahmenbedingung  Dienst  Energie  Region  Chen  Stärkung  Einsatz  Voraussetzung  Gesetz  Betrieb  Ge  Programm  Finanzierung  Kommune  Innovation  Vielfalt  Rente  Lösung  Hilfe  Cdu  Csu  Technologie  Unterstützung  Reform  Mittelstand  Prinzip  Erfolg  Beruf  Altersvorsorge  Schritt  Bürokratie  Zugang  Form  Idee  Generation  Bundestagswahl  Rechtsstaat  Partei  Regelung  Bundesregierung  Markt  Pflege  Mobilität  Grundgesetz  Ort  Schüler  Nutzung  Million  Arbeitsmarkt  Angebot  Anreiz  Einkommen  Alter  Arbeitnehmer  Grenze  Abschaffung  Kosten  Bundeswehr  Blick  Menschenrecht  Stadt  Zahl  Verwaltung  Wert  Frieden  Migration  Nation  Volk  Milliarde  Rolle  Parlament  Art  Standard  Einrichtung  Kraft  Nato  Kontorolle  Sprache  Bedeutung  Arbeitgeber  Produkt  Ezb  Fortschritt  Wettbewerbsfähigkeit  Verbraucher  Asyl  Selbstbestimmung  Industrie  Höhe  Anspruch  Internet  %  Studierend  Schuld  Verbesserung  Instrument  Sinn  Hand  Ausland  Grund  Wissenschaft  Mann  Beschäftigt  Behinderung  Polizei  Kooperation  Fall  System  Usa  Lernen  Stärke  Problem  Regierungsprogramm  Türkei  Vorbild Patient Finanz Kriminalität Währung'

# generic_masculine query with most frequent masculine generic nouns
query_generic_masculine = '  Kinder  Länder   Lehrer  Dauer  Schweizer  Steuerzahler  Ferner  Mitarbeiter  Zeitalter  Mitglieder  Männer  Träger  Opfer  Wälder  Asylbewerber  Krankenhäuser  Erbschaftsteuer  Gründer  Täter  Rentner  Miteinander  Digitalsteuer  Mutter  Väter  Völker  Bundesländer  Vermögensteuer  Unternehmer  Anbieter  Grunderwerbsteuer  Umsatzsteuer  Gewerbesteuer  Einkommensteuer  Wasser  Tarifpartner  Sparer  Pariser  Regierungspolitiker  Vorreiter  Minister  Stabilitätsanker  Verkehrsträger  Hinweisgeber  Vaterländer  Mieter  Impulsgeber  Wähler  Vermögenssteuer  Moderner  Gelder  Forscher  Sozialer  Straftäter  Neuer  Politiker  Master  Sozialgesetzbücher  Beitragszahler  Stromsteuer  Fächer  Krimineller  Rentenalter  Fairer  Digitalzeitalter  Transfer  Güter  Richter  Meister  Freier  Mütter  Magister  Internationaler  Urheber  Leistungsträger  Gefährder  Partnerländer  Bewerber  Ausländer  Einwanderer  Geschlechter  Entwicklungsländer  Bezugsdauer  Leider  September  Vorbilder Handwerker  Vater  Digitaler  Bundeskanzler  Nutzer  Künstlicher  Riester  Nummer  Vertreter  Wirtschaftsgüter  Genfer  Geldgeber  Ämter  Leiharbeitnehmer  Parlamentarier  Gläubiger  Grundpfeiler  Mittelmeer  Volksvertreter  Finger  Leistungsempfänger  Bündnispartner  Hersteller  Grundsteuer  Wissenschaftler  Hunger  Mandatsträger  Besserer  Zentraler  Europäer  Flexiblerer  Aussiedler  Aktivierender  Whistleblower  Fehler  Erzieher  Biersteuer  Flexibler  Newcomer  Wettbewerber  Erneuerbarer  Nebeneinander  Neugier  Klassenzimmer  Auftraggeber  Pfeiler  Herkunftsländer  Renteneintrittsalter  Betreiber  Anleger  CO-neutraler  Zweitwohnungssteuer  MINT-Fächer  Zuwanderer  Deutscher  Finanztransaktionssteuer  Jugendämter  Geber  Angehöriger  Energieträger  Königsteiner  Justizminister  Gegner  Effektiver  Sozialpartner  Oktober  Eigentümer  Berliner  Jäger  Sicher  Landesämter  Entscheidungsträger  Freiberufler  Strafmündigkeitsalter  November  EU-Ausländer  Mehrwertsteuer  Technischer  Eckpfeiler  Schaumweinsteuer  Fischereisteuer  Generationsübergreifender  Treiber  Kindesalter  Nachhaltiger  Bezieher  Verfassungsrechtler  Einwohner  Körperschaftsteuer  Einkommensteuerzahler  Speicher  Voller  Erfinder  Quereinsteiger  Mehrgenerationenhäuser  Wirksamer  Beschäftigtenvertreter  Vermieter  Rentenbezieher  Gewässer  Zeitarbeitnehmer  Per  Lindner  Finanzminister  Schiller  Regenwälder  Weimarer  Semester  Anwohner  Gesetzgeber  Wachstumstreiber  Handelspartner  Entwickler  Gesellschafter  Weder  Trinkwasser  Erzeuger  Kleinkinder  Stromzähler  Wider  Schlecker  Ungeborener  Ehepartner  Luftverkehrssteuer  Schuldner  Fördergelder  Existenzgründer  Steuerschlupflöcher  Tier  Marschflugkörper  Legalwaffenbesitzer  Wiener  Gemeinsamer  Stimmungsbilder  Schulabgänger  Clan-Mitglieder  Flüchtlingskinder  Aufenthaltsdauer  Marktteilnehmer  Sportler  Personenstandsregister  Standesämter  Abgeltungsteuer  Berufsschüler  Fürsprecher  Prozentualer  Automobilhersteller  Deutsch-französischer  Aachener  Spätaussiedler  Kandidatenländer  Urlaubssemester  EU-Bürger  Berufsfelder  Niedriglohnempfänger  Abgelehnter  Asylantragsteller  Schwellenländer  Verfahrensdauer  EU-Länder  Endlager  Tech-Gründer  Ausreisepflichtiger  Erbschaftssteuer  Dienstleister  Identitätstäuscher  Mitwirkungsverweigerer  Datenträger  Mitbürger  Papier  Alzheimer  Amtsträger  Quantencomputer  Provider  Parlamentarischer'

#similarity = 0.0816 für "query_basic" und "query_generic_masculine"


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
query_basic = preprocess(query_basic)
query_generic_masculine = preprocess(query_generic_masculine)


# import packages
from gensim.corpora import Dictionary

# build a dictionary and a TF-IDF model, and convert the sentences to the bag-of-words format
documents = [query_basic, query_generic_masculine]
dictionary = Dictionary(documents)

query_basic = dictionary.doc2bow(query_basic)
query_generic_masculine = dictionary.doc2bow(query_generic_masculine)

# import packages
from gensim.models import TfidfModel

documents = [query_basic, query_generic_masculine]
tfidf = TfidfModel(documents)

query_basic = tfidf[query_basic]
query_generic_masculine = tfidf[query_generic_masculine]

# import packages
from gensim.similarities import SparseTermSimilarityMatrix, WordEmbeddingSimilarityIndex

# load model into a Gensim Word2Vec model class
# and build a term similarity mextrix using the embeddings
termsim_index = WordEmbeddingSimilarityIndex(model.wv)
termsim_matrix = SparseTermSimilarityMatrix(termsim_index, dictionary, tfidf)


similarity = termsim_matrix.inner_product(query_basic, query_generic_masculine, normalized=(True, True))
print('similarity = %.4f' % similarity ,'für "query_basic" und "query_generic_masculine"')
