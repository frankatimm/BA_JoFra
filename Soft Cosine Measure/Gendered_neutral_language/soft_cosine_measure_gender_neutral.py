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
query_mann = 'Mann'
query_frau = 'Frau'

query_all = 'BürgerInnen, ArbeiterInnen, VerbraucherInnen, WählerInnen, SteuerzahlerInnen, UrheberInnen, NutzerInnen, SchülerInnen, UnternehmerInnen, LehrerInnen, SportlerInnen, PolitikerInnen'
query_buerger = 'BürgerInnen'
query_arbeitnehmer = 'ArbeitnehmerInnen'
query_verbraucher = 'VerbraucherInnen'
query_waehler = 'WählerInnen'
query_steuerzahler = 'SteuerzahlerInnen'
query_urheber = 'UrheberInnen'
query_nutzer = 'NutzerInnen'
query_schueler = 'SchülerInnen'
query_unternehmer = 'UnternehmerInnen'
query_lehrer = 'LehrerInnen'
query_sportler = 'SportlerInnen'
query_politiker = 'PolitikerInnen'

#######################################################################
# # basic query with most frequent nouns
# query_basic = 'Mann, Männer, Frau, Frauen, Kinder, Menschen, Mensch, Jugendliche, Teenager, Familie, Jung, Alt, Identität, Religion, Kultur, Herkunft, Gesellschaft, Deutschland, Ehefrau, Ehemann, Ehepaar Mensch Grüne Bündnis Land Zukunft Deutschland Bundestagswahlprogramm Europa Arbeit Kind Zeit Jahr Unternehmen Gesellschaft Recht Euro Ziel Frau Politik Leben Eu Wirtschaft Kapitel Energie Bildung Beschäftigt Wandel Kommune Welt Schutz Demokratie Bürger Staat Bund Familie Entwicklung Teilhabe Zugang Prozent Schule  Linke Weg Ge Umwelt Ort Einkommen Stadt Förderung Möglichkeit Chance Sicherheit Krise Energiewende Bereich Verantwortung Beispiel Angebot Arbeitsplatz Ausbau Lohn Pflege Mittel Infrastruktur Investition Region Kosten Ausbildung Geld JugendlicheBeitrag Forschung Aufgabe Teil Freiheit Gerechtigkeit Vielfalt Klimaschutz Grundlage Finanzierung Raum Produkt Rente Hand Leistung Ebene Betrieb Bürgerinnen Armut Bank Mobilität Blick  Mut Einsatz Hochschule Rahmen Kultur Maßnahme Behinderung  Versorgung Tier Anspruch Bundesregierung Million  Standard Schritt Markt Union Unterstützung Alter Landwirtschaft Reform Programm Eltern Wohlstand Digitalisierung Regel  Netz Gesundheit Interesse Natur Gewalt  Frage Hilfe Parlament Menschenrecht Chen Erfolg Struktur Form Transparenz Verbraucher Beteiligung Verkehr Beruf Folge Wissenschaft Bedingung Industrie Entscheidung Sicherung  Projekt Weiterbildung Job Voraussetzung Mann Arbeitsbedingung Stärkung Dienstleistung Umbau  Wohnung Milliarde Haushalt Einführung  Gesetz Einrichtung Internet Qualität Datum Konzern Kopf Nutzung Frieden Innovation Sinn Personal Verfügung Risiko Kontorolle Strom Seite Herausforderung Anreiz Platz Lösung Ressource Steuer Zusammenarbeit Grenze Regelung Auto Wettbewerb Gewerkschaft System Rolle Beschäftigung Regierung Lebensmittel Miete Spd Arbeitsmarkt Ende Problem Initiative Engagement Handeln Kitas Finanzmarkt'
#
# # gender-neutral query with gender-neutral nouns
# query_gender_neutral = 'BürgerInnen  VerbraucherInnen  UrheberInnen  ArbeitnehmerInnen  SteuerzahlerInnen  ArbeitgeberInnen  NutzerInnen  ErzieherInnen  rInnen  KünstlerInnen  MitarbeiterInnen  SchülerInnen  PatientInnen  BäuerInnen  braucherInnen  GläubigerInnen  Innen  UnternehmerInnen  ManagerInnen  LehrerInnen  cherInnen  KundInnen  ExpertInnen  LeiharbeiterInnen  terInnen  SparerInnen  MieterInnen  EU-BürgerInnen  UnionsbürgerInnen  MigrantInnen  FreiberuflerInnen  NeurentnerInnen  HändlerInnen  ProduzentInnen  ExistenzgründerInnen  zahlerInnen  AkteurInnen  ErzeugerInnen  KapitalgeberInnen  RegierungschefInnen  erzahlerInnen  merInnen  VertreterInnen  NormalverdienerInnen  datInnen  TierschützerInnen  JournalistInnen  DemonstrantInnen  AktionärInnen  SchuldnerInnen  tümerInnen  FinanzvermittlerInnen  EndverbraucherInnen  NeugründerInnen  KindergärtnerInnen  SexarbeiterInnen  DrogenkonsumentInnen  RentnerInnen  MinijobberInnen  ArbeitsvermittlerInnen  BeraterInnen  VerwerterInnen  BildungsverliererInnen  AnwohnerInnen  Nicht-EU-BürgerInnen  BildungsaufsteigerInnen  PolizistInnen  RichterInnen  WissenschaftlerInnen  schaftlerInnen  KinderärztInnen  HausärztInnen  LeistungserbringerInnen  PatientInnenvertreterInnen  BeitragszahlerInnen  SpitzenkandidatInnen  KonsumentInnen  KäuferInnen  dInnen  SozialarbeiterInnen  AsylbewerberInnen  JunglandwirtInnen  QuereinsteigerInnen  LebenspartnerInnen  VerkehrsteilnehmerInnen  InhaberInnen  StromkundInnen  LandwirtInnen  berInnen  PolitikerInnen  IT-SicherheitsexpertInnen  EmpfängerInnen  RedakteurInnen  AnwältInnen  SüdeuropäerInnen  rungschefInnen  VorkämpferInnen  SozialdemokratInnen  MandatsträgerInnen  KandidatInnen  gerInnen  TäterInnen  ZeugInnen  AkademikerInnen  StaatsanwältInnen  GründerInnen  StrafverteidigerInnen  gInnen  GärtnerInnen  ÖkozüchterInnen  gärtnerInnen  rantInnen  VerarbeiterInnen  SyrerInnen  FischerInnen  digerInnen  CSU-PolitikerInnen  WiedereinsteigerInnen  EigentümerInnen  BezieherInnen  JustizbeamtInnen  PrivatkundInnen  rerInnen  BetreiberInnen  legerInnen  AnbieterInnen  GeringverdienerInnen  KollegInnen  BühnendarstellerInnen  AutorInnen  ZeitzeugInnen  PädagogInnen  SportathletInnen  WählerInnen  LobbyistInnen  EntscheidungsträgerInnen  RätInnen  ProtagonistInnen  AussteigerInnen  GrenzpendlerInnen  teurInnen  EuropäerInnen  AnschlussinhaberInnen  ZuwanderInnen  EU-BinnenmigrantInnen  EinwanderInnen  PartnerInnen  SozialpartnerInnen  TeilnehmerInnen  tInnen  KleinbäuerInnen  KindersoldatInnen  SoldatInnen  PilotInnen  VorreiterInnen  VerfechterInnen  TechnokratInnen  PopulistInnen'

#similarity = 0.0249 für "query_basic" und query_gender_neutral"
############################################################################


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
# query_basic = preprocess(query_basic)
# query_gender_neutral = preprocess(query_gender_neutral)

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
# documents = [query_basic, query_gender_neutral]
# dictionary = Dictionary(documents)

# query_basic = dictionary.doc2bow(query_basic)
# query_gender_neutral = dictionary.doc2bow(query_gender_neutral)

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


# # import packages
# from gensim.models import TfidfModel
#
# # build TF-IDF model
# documents = [query_basic, query_gender_neutral]
# tfidf = TfidfModel(documents)



# import packages
from gensim.models import TfidfModel

documents = [query_mann, query_frau, query_all, query_buerger, query_arbeitnehmer, query_verbraucher, query_waehler, query_steuerzahler, query_urheber, query_nutzer, query_schueler, query_unternehmer, query_lehrer, query_sportler, query_politiker]
tfidf = TfidfModel(documents)


# query_basic = tfidf[query_basic]
# query_gender_neutral = tfidf[query_gender_neutral]

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

# import packages
from gensim.similarities import SparseTermSimilarityMatrix, WordEmbeddingSimilarityIndex

# load model into a Gensim Word2Vec model class
# and build a term similarity mextrix using the embeddings
termsim_index = WordEmbeddingSimilarityIndex(model.wv)
termsim_matrix = SparseTermSimilarityMatrix(termsim_index, dictionary, tfidf)

# compute SCM using the ``inner_product`` method.
# similarity = termsim_matrix.inner_product(query_basic, query_gender_neutral, normalized=(True, True))
# print('similarity = %.4f' % similarity ,'für "query_basic" und query_gender_neutral"')

similarity_all_m = termsim_matrix.inner_product(query_mann, query_all, normalized=(True, True))
print('similarity = %.4f' % similarity_all_m ,'für "Mann" und "all"')
similarity_all_f = termsim_matrix.inner_product(query_frau, query_all, normalized=(True, True))
print('similarity = %.4f' % similarity_all_f ,'für "Frau" und "all"')


similarity_buerger_m = termsim_matrix.inner_product(query_mann, query_buerger, normalized=(True, True))
print('similarity = %.4f' % similarity_buerger_m ,'für "Mann" und "BürgerInnen"')
similarity_buerger_f = termsim_matrix.inner_product(query_frau, query_buerger, normalized=(True, True))
print('similarity = %.4f' % similarity_buerger_f ,'für "Frau" und "BürgerInnen"')

similarity_arbeitnehmer_m = termsim_matrix.inner_product(query_mann, query_arbeitnehmer, normalized=(True, True))
print('similarity = %.4f' % similarity_arbeitnehmer_m ,'für "Mann" und "ArbeitnehmerInnen"')
similarity_arbeitnehmer_f = termsim_matrix.inner_product(query_frau, query_arbeitnehmer, normalized=(True, True))
print('similarity = %.4f' % similarity_arbeitnehmer_f ,'für "Frau" und "ArbeitnehmerInnen"')

similarity_verbraucher_m = termsim_matrix.inner_product(query_mann, query_verbraucher, normalized=(True, True))
print('similarity = %.4f' % similarity_verbraucher_m ,'für "Mann" und "VerbraucherInnen"')
similarity_verbraucher_f = termsim_matrix.inner_product(query_frau, query_verbraucher, normalized=(True, True))
print('similarity = %.4f' % similarity_verbraucher_f ,'für "Frau" und "VerbraucherInnen"')

similarity_waehler_m = termsim_matrix.inner_product(query_mann, query_waehler, normalized=(True, True))
print('similarity = %.4f' % similarity_waehler_m ,'für "Mann" und "WählerInnen"')
similarity_waehler_f = termsim_matrix.inner_product(query_frau, query_waehler, normalized=(True, True))
print('similarity = %.4f' % similarity_waehler_f ,'für "Frau" und "WählerInnen"')

similarity_steuerzahler_m = termsim_matrix.inner_product(query_mann, query_steuerzahler, normalized=(True, True))
print('similarity = %.4f' % similarity_steuerzahler_m ,'für "Mann" und "SteuerzahlerInnen"')
similarity_steuerzahler_f = termsim_matrix.inner_product(query_frau, query_steuerzahler, normalized=(True, True))
print('similarity = %.4f' % similarity_steuerzahler_f ,'für "Frau" und "SteuerzahlerInnen"')

similarity_urheber_m = termsim_matrix.inner_product(query_mann, query_urheber, normalized=(True, True))
print('similarity = %.4f' % similarity_urheber_m ,'für "Mann" und "UrheberInnen"')
similarity_urheber_f = termsim_matrix.inner_product(query_frau, query_urheber, normalized=(True, True))
print('similarity = %.4f' % similarity_urheber_f ,'für "Frau" und "UrheberInnen"')

similarity_nutzer_m = termsim_matrix.inner_product(query_mann, query_nutzer, normalized=(True, True))
print('similarity = %.4f' % similarity_nutzer_m ,'für "Mann" und "NutzerInnen"')
similarity_nutzer_f = termsim_matrix.inner_product(query_frau, query_nutzer, normalized=(True, True))
print('similarity = %.4f' % similarity_nutzer_f ,'für "Frau" und "NutzerInnen"')

similarity_schueler_m = termsim_matrix.inner_product(query_mann, query_schueler, normalized=(True, True))
print('similarity = %.4f' % similarity_schueler_m ,'für "Mann" und "SchülerInnen"')
similarity_schueler_f = termsim_matrix.inner_product(query_frau, query_schueler, normalized=(True, True))
print('similarity = %.4f' % similarity_schueler_f ,'für "Frau" und "SchülerInnen"')

similarity_unternehmer_m = termsim_matrix.inner_product(query_mann, query_unternehmer, normalized=(True, True))
print('similarity = %.4f' % similarity_unternehmer_m ,'für "Mann" und "UnternehmerInnen"')
similarity_unternehmer_f = termsim_matrix.inner_product(query_frau, query_unternehmer, normalized=(True, True))
print('similarity = %.4f' % similarity_unternehmer_f ,'für "Frau" und "UnternehmerInnen"')

similarity_lehrer_m = termsim_matrix.inner_product(query_mann, query_lehrer, normalized=(True, True))
print('similarity = %.4f' % similarity_lehrer_m ,'für "Mann" und "LehrerInnen"')
similarity_lehrer_f = termsim_matrix.inner_product(query_frau, query_lehrer, normalized=(True, True))
print('similarity = %.4f' % similarity_lehrer_f ,'für "Frau" und "LehrerInnen"')

similarity_sportler_m = termsim_matrix.inner_product(query_mann, query_sportler, normalized=(True, True))
print('similarity = %.4f' % similarity_sportler_m ,'für "Mann" und "SportlerInnen"')
similarity_sportler_f = termsim_matrix.inner_product(query_frau, query_sportler, normalized=(True, True))
print('similarity = %.4f' % similarity_sportler_f ,'für "Frau" und "SportlerInnen"')

similarity_politiker_m = termsim_matrix.inner_product(query_mann, query_politiker, normalized=(True, True))
print('similarity = %.4f' % similarity_politiker_m ,'für "Mann" und "PolitikerInnen"')
similarity_politiker_f = termsim_matrix.inner_product(query_frau, query_politiker, normalized=(True, True))
print('similarity = %.4f' % similarity_politiker_f ,'für "Frau" und "PolitikerInnen"')
