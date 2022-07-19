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
        for line in open('C:/Users/Franka/Soft_Cosine_Measure/Gender_neutral_language/corpus_gender_neutral.txt',encoding="utf8"):
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
    ('männer', 'lehrerinnen'),
    ('frauen', 'lehrerinnen'),
    ('männer', 'bürgerinnen'),
    ('frauen', 'bürgerinnen'),
    ('männer', 'expertinnen'),
    ('frauen', 'expertinnen'),
    ('männer', 'forscherinnen'),
    ('frauen', 'forscherinnen'),
    ('männer', 'wählerinnen'),
    ('frauen', 'wählerinnen'),
    ('männer', 'urheberinnen'),
    ('frauen', 'urheberinnen'),
    ('männer', 'nutzerinnen'),
    ('frauen', 'nutzerinnen'),
    ('männer', 'schülerinnen'),
    ('frauen', 'schülerinnen'),
    ('männer', 'sportlerinnen'),
    ('frauen', 'sportlerinnen'),
    ('männer', 'politikerinnen'),
    ('frauen', 'politikerinnen'),
]
for w1, w2 in pairs:
    print('%r\t%r\t%.5f' % (w1, w2, model.wv.similarity(w1, w2)))

#create variable and print vector von politik

vec_politik = model.wv['politik']
print('Vector Politik: ', vec_politik)

#print most similar for politik
print('Politik and most similar', model.wv.most_similar(positive=['politik'], topn=10))
