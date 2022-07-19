from gensim.models import KeyedVectors
from gensim import models
from sklearn.metrics.pairwise import cosine_similarity
# import packages
from gensim.test.utils import datapath
from gensim import utils
import gensim.models
import gensim

class MyCorpus:
    """An iterator that yields sentences (lists of str)."""

    def __iter__(self):
        for line in open('C:/Users/Franka/Soft_Cosine_Measure/Generic_masculine/corpus/corpus_generic_masculine.txt',encoding="utf8"):
            # assume there's one document per line, tokens separated by whitespace
            yield utils.simple_preprocess(line)

# import packages
import gensim.models

# train model on generic_masculine corpus
sentences = MyCorpus()
model = gensim.models.Word2Vec(sentences=sentences, min_count = 1)

# vec_mann = model.wv('männer')
# vec_frau = model.wv('frauen')
# print(vec_mann)
# print(vec_frau)


# word2vec_path = 'C:/Users/Franka/Soft_Cosine_Measure/word2vec.model'
# wv = models.KeyedVectors.load_word2vec_format(word2vec_path, binary=True)

for index, word in enumerate(model.wv.index_to_key):
    if index == 1000:
        break
    print(f"word #{index}/{len(model.wv.index_to_key)} is {word}")


pairs = [
    ('männer', 'lehrer'),   # a minivan is a kind of car
    ('frauen', 'lehrer'),
    ('männer', 'bürger'),   # a minivan is a kind of car
    ('frauen', 'bürger'),
    ('männer', 'arbeitnehmer'),   # a minivan is a kind of car
    ('frauen', 'arbeitnehmer'),
    ('männer', 'verbraucher'),   # a minivan is a kind of car
    ('frauen', 'verbraucher'),
    ('männer', 'wähler'),   # a minivan is a kind of car
    ('frauen', 'wähler'),
    ('männer', 'steuerzahler'),   # a minivan is a kind of car
    ('frauen', 'steuerzahler'),
    ('männer', 'urheber'),   # a minivan is a kind of car
    ('frauen', 'urheber'),
    ('männer', 'nutzer'),   # a minivan is a kind of car
    ('frauen', 'nutzer'),
    ('männer', 'schüler'),   # a minivan is a kind of car
    ('frauen', 'schüler'),
    ('männer', 'unternehmer'),   # a minivan is a kind of car
    ('frauen', 'unternehmer'),
    ('männer', 'sportler'),   # a minivan is a kind of car
    ('frauen', 'sportler'),
    ('männer', 'politiker'),   # a minivan is a kind of car
    ('frauen', 'politiker'),
      # still a wheeled vehicle
]
for w1, w2 in pairs:
    print('%r\t%r\t%.5f' % (w1, w2, model.wv.similarity(w1, w2)))

# vec_frau = model.wv['frauen']
# vec_mann = model.wv['männer']
# vec_lehrer = model.wv['lehrer']
# vec_buerger = model.wv['bürger']
# vec_arbeitnehmer = model.wv['arbeitnehmer']
# vec_verbraucher = model.wv['verbraucher']
# vec_waehler = model.wv['wähler']
# vec_steuerzahler = model.wv['steuerzahler']
# vec_urheber = model.wv['urheber']
# vec_nutzer = model.wv['nutzer']
# vec_schueler = model.wv['schüler']
# vec_unternehmer = model.wv['unternehmer']
# vec_sportler = model.wv['sportler']
# vec_politiker = model.wv['politiker']
#
#
#
# print(cosine_similarity([vec_frau],[vec_lehrer]))
# print(cosine_similarity([vec_mann],[vec_lehrer]))


# print(cosine_similarity([vec_frau],[vec_teilnehmer]))
# print(cosine_similarity([vec_mann],[vec_teilnehmer]))
#
# print(cosine_similarity([vec_frau],[vec_mitglied]))
# print(cosine_similarity([vec_mann],[vec_mitglied]))
