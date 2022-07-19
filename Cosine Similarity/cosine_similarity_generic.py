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


for index, word in enumerate(model.wv.index_to_key):
    if index == 10:
        break
    print(f"word #{index}/{len(model.wv.index_to_key)} is {word}")


pairs = [
    ('männer', 'lehrer'),
    ('frauen', 'lehrer'),
    ('männer', 'bürger'),
    ('frauen', 'bürger'),
    ('männer', 'experten'),
    ('frauen', 'experten'),
    ('männer', 'forscher'),
    ('frauen', 'forscher'),
    ('männer', 'wähler'),
    ('frauen', 'wähler'),
    ('männer', 'urheber'),
    ('frauen', 'urheber'),
    ('männer', 'nutzer'),
    ('frauen', 'nutzer'),
    ('männer', 'schüler'),
    ('frauen', 'schüler'),
    ('männer', 'sportler'),
    ('frauen', 'sportler'),
    ('männer', 'politiker'),
    ('frauen', 'politiker'),

]
for w1, w2 in pairs:
    print('%r\t%r\t%.5f' % (w1, w2, model.wv.similarity(w1, w2)))
