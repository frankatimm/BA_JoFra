from gensim.models import KeyedVectors
from gensim import models
from sklearn.metrics.pairwise import cosine_similarity


# load pretrained model
word2vec_path = 'C:/Users/Franka/Soft_Cosine_Measure/german.model'
wv = models.KeyedVectors.load_word2vec_format(word2vec_path, binary=True)

#retrieve vocabulary
for index, word in enumerate(wv.index_to_key):
    if index == 10:
        break
    print(f"word #{index}/{len(wv.index_to_key)} is {word}")



pairs = [
    ('Mann', 'Lehrer'),
    ('Frau', 'Lehrer'),
    ('Mann', 'Sportler'),
    ('Frau', 'Sportler'),
    ('Mann', 'Buergermeister'),
    ('Frau', 'Buergermeister'),
    ('Mann', 'Trainer'),
    ('Frau', 'Trainer'),
    ('Mann', 'Spieler'),
    ('Frau', 'Spieler'),
    ('Mann', 'Schueler'),
    ('Frau', 'Schueler'),
    ('Mann', 'Mitarbeiter'),
    ('Frau', 'Mitarbeiter'),
    ('Mann', 'Besucher'),
    ('Frau', 'Besucher'),
    ('Mann', 'Buerger'),
    ('Frau', 'Buerger'),
    ('Mann', 'Teilnehmer'),
    ('Frau', 'Teilnehmer'),
    ('Mann', 'Mitglied'),
    ('Frau', 'Mitglied'),
    ('Mann', 'Gast'),
    ('Frau', 'Gast'),
    ('Mann', 'Person'),
    ('Frau', 'Person'),
    ('Mann', 'Pflegekraft'),
    ('Frau', 'Pflegekraft'),
]
for w1, w2 in pairs:
    print('%r\t%r\t%.4f' % (w1, w2, wv.similarity(w1, w2)))
