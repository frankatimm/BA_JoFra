r"""
Computing the Soft Cosine Measure
===================

Demonstrates using Gensim's implemenation of the SCM.
Compares basic query with gender-neutral query.
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
        for line in open("C:/Users/Franka/Soft_Cosine_Measure/Gender_neutral_language/corpus_gender_neutral.txt",encoding="utf8"):
            # assume there's one document per line, tokens separated by whitespace
            yield utils.simple_preprocess(line)

import gensim.models

# train a model on our corpus
sentences = MyCorpus()
model = gensim.models.Word2Vec(sentences=sentences)


# retrieve the vocabulary of our model
for index, word in enumerate(model.wv.index_to_key):
    if index == 10:
        break
    print(f"word #{index}/{len(model.wv.index_to_key)} is {word}")

# Initialize queries

# basic query with most frequent nouns
query_basic = 'Mann, Männer, Frau, Frauen, Kinder, Menschen, Mensch, Jugendliche, Teenager, Familie, Jung, Alt, Identität, Religion, Kultur, Herkunft, Gesellschaft, Deutschland, Ehefrau, Ehemann, Ehepaar Mensch Grüne Bündnis Land Zukunft Deutschland Bundestagswahlprogramm Europa Arbeit Kind Zeit Jahr Unternehmen Gesellschaft Recht Euro Ziel Frau Politik Leben Eu Wirtschaft Kapitel Energie Bildung Beschäftigt Wandel Kommune Welt Schutz Demokratie Bürger Staat Bund Familie Entwicklung Teilhabe Zugang Prozent Schule  Linke Weg Ge Umwelt Ort Einkommen Stadt Förderung Möglichkeit Chance Sicherheit Krise Energiewende Bereich Verantwortung Beispiel Angebot Arbeitsplatz Ausbau Lohn Pflege Mittel Infrastruktur Investition Region Kosten Ausbildung Geld JugendlicheBeitrag Forschung Aufgabe Teil Freiheit Gerechtigkeit Vielfalt Klimaschutz Grundlage Finanzierung Raum Produkt Rente Hand Leistung Ebene Betrieb Bürgerinnen Armut Bank Mobilität Blick  Mut Einsatz Hochschule Rahmen Kultur Maßnahme Behinderung  Versorgung Tier Anspruch Bundesregierung Million  Standard Schritt Markt Union Unterstützung Alter Landwirtschaft Reform Programm Eltern Wohlstand Digitalisierung Regel  Netz Gesundheit Interesse Natur Gewalt  Frage Hilfe Parlament Menschenrecht Chen Erfolg Struktur Form Transparenz Verbraucher Beteiligung Verkehr Beruf Folge Wissenschaft Bedingung Industrie Entscheidung Sicherung  Projekt Weiterbildung Job Voraussetzung Mann Arbeitsbedingung Stärkung Dienstleistung Umbau  Wohnung Milliarde Haushalt Einführung  Gesetz Einrichtung Internet Qualität Datum Konzern Kopf Nutzung Frieden Innovation Sinn Personal Verfügung Risiko Kontorolle Strom Seite Herausforderung Anreiz Platz Lösung Ressource Steuer Zusammenarbeit Grenze Regelung Auto Wettbewerb Gewerkschaft System Rolle Beschäftigung Regierung Lebensmittel Miete Spd Arbeitsmarkt Ende Problem Initiative Engagement Handeln Kitas Finanzmarkt'

# gender-neutral query with gender-neutral nouns
query_gender_neutral = 'BürgerInnen  VerbraucherInnen  UrheberInnen  ArbeitnehmerInnen  SteuerzahlerInnen  ArbeitgeberInnen  NutzerInnen  ErzieherInnen  rInnen  KünstlerInnen  MitarbeiterInnen  SchülerInnen  PatientInnen  BäuerInnen  braucherInnen  GläubigerInnen  Innen  UnternehmerInnen  ManagerInnen  LehrerInnen  cherInnen  KundInnen  ExpertInnen  LeiharbeiterInnen  terInnen  SparerInnen  MieterInnen  EU-BürgerInnen  UnionsbürgerInnen  MigrantInnen  FreiberuflerInnen  NeurentnerInnen  HändlerInnen  ProduzentInnen  ExistenzgründerInnen  zahlerInnen  AkteurInnen  ErzeugerInnen  KapitalgeberInnen  RegierungschefInnen  erzahlerInnen  merInnen  VertreterInnen  NormalverdienerInnen  datInnen  TierschützerInnen  JournalistInnen  DemonstrantInnen  AktionärInnen  SchuldnerInnen  tümerInnen  FinanzvermittlerInnen  EndverbraucherInnen  NeugründerInnen  KindergärtnerInnen  SexarbeiterInnen  DrogenkonsumentInnen  RentnerInnen  MinijobberInnen  ArbeitsvermittlerInnen  BeraterInnen  VerwerterInnen  BildungsverliererInnen  AnwohnerInnen  Nicht-EU-BürgerInnen  BildungsaufsteigerInnen  PolizistInnen  RichterInnen  WissenschaftlerInnen  schaftlerInnen  KinderärztInnen  HausärztInnen  LeistungserbringerInnen  PatientInnenvertreterInnen  BeitragszahlerInnen  SpitzenkandidatInnen  KonsumentInnen  KäuferInnen  dInnen  SozialarbeiterInnen  AsylbewerberInnen  JunglandwirtInnen  QuereinsteigerInnen  LebenspartnerInnen  VerkehrsteilnehmerInnen  InhaberInnen  StromkundInnen  LandwirtInnen  berInnen  PolitikerInnen  IT-SicherheitsexpertInnen  EmpfängerInnen  RedakteurInnen  AnwältInnen  SüdeuropäerInnen  rungschefInnen  VorkämpferInnen  SozialdemokratInnen  MandatsträgerInnen  KandidatInnen  gerInnen  TäterInnen  ZeugInnen  AkademikerInnen  StaatsanwältInnen  GründerInnen  StrafverteidigerInnen  gInnen  GärtnerInnen  ÖkozüchterInnen  gärtnerInnen  rantInnen  VerarbeiterInnen  SyrerInnen  FischerInnen  digerInnen  CSU-PolitikerInnen  WiedereinsteigerInnen  EigentümerInnen  BezieherInnen  JustizbeamtInnen  PrivatkundInnen  rerInnen  BetreiberInnen  legerInnen  AnbieterInnen  GeringverdienerInnen  KollegInnen  BühnendarstellerInnen  AutorInnen  ZeitzeugInnen  PädagogInnen  SportathletInnen  WählerInnen  LobbyistInnen  EntscheidungsträgerInnen  RätInnen  ProtagonistInnen  AussteigerInnen  GrenzpendlerInnen  teurInnen  EuropäerInnen  AnschlussinhaberInnen  ZuwanderInnen  EU-BinnenmigrantInnen  EinwanderInnen  PartnerInnen  SozialpartnerInnen  TeilnehmerInnen  tInnen  KleinbäuerInnen  KindersoldatInnen  SoldatInnen  PilotInnen  VorreiterInnen  VerfechterInnen  TechnokratInnen  PopulistInnen'

#similarity = 0.0249 für "query_basic" und query_gender_neutral"



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

# preprocessing queries
query_basic = preprocess(query_basic)
query_gender_neutral = preprocess(query_gender_neutral)


# import packages
from gensim.corpora import Dictionary

# build a dictionary and a TF-IDF model, and convert the sentences to the bag-of-words format
documents = [query_basic, query_gender_neutral]
dictionary = Dictionary(documents)

query_basic = dictionary.doc2bow(query_basic)
query_gender_neutral = dictionary.doc2bow(query_gender_neutral)

# import packages
from gensim.models import TfidfModel

# build TF-IDF model
documents = [query_basic, query_gender_neutral]
tfidf = TfidfModel(documents)

query_basic = tfidf[query_basic]
query_gender_neutral = tfidf[query_gender_neutral]

# import packages
from gensim.similarities import SparseTermSimilarityMatrix, WordEmbeddingSimilarityIndex

# load model into a Gensim Word2Vec model class
# and build a term similarity mextrix using the embeddings
termsim_index = WordEmbeddingSimilarityIndex(model.wv)
termsim_matrix = SparseTermSimilarityMatrix(termsim_index, dictionary, tfidf)

# compute SCM using the ``inner_product`` method.
similarity = termsim_matrix.inner_product(query_basic, query_gender_neutral, normalized=(True, True))
print('similarity = %.4f' % similarity ,'für "query_basic" und query_gender_neutral"')
