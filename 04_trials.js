// In this file you can specify the trial data for your experiment

// In this file you can specify the trial data for your experiment
// practice trails: 24 trails
//structure:
    //picture;
    //item;
    //condition: m (männliche Deklination), f (weibl.), n (gender neutral)
    //phase: 1/2;
    //expected: "female"/"male"/"neuter";
    //number_of_items: 1,5,15,30 ;
    //condition: "conjunction"/"disjunction.shape"/"disjuction.colour";
const textbox_input_trials = {
  textbox_input: [
    {
        item: 1,
        condition: "m",
        phase: 1,
        stereotype: "female",
        role_noun: "Babysitter",
        question: "Babysitter werden trotz fehlender Kitaplätze immer schlechter bezahlt. <br /> ______ möchte sich deshalb einen neuen Job suchen. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 1,
        condition: "f",
        phase: 1,
        stereotype: "female",
        role_noun: "Babysitter",
        question: "Babysitterinnen werden trotz fehlender Kitaplätze immer schlechter bezahlt. <br /> ______ möchte sich deshalb einen neuen Job suchen. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 1,
        condition: "n",
        phase: 1,
        stereotype: "female",
        role_noun: "Babysitter",
        question: "BabysitterInnen werden trotz fehlender Kitaplätze immer schlechter bezahlt. <br /> ______ möchte sich deshalb einen neuen Job suchen. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 2,
        condition: "m",
        phase: 1,
        stereotype: "female",
        role_noun: "Baletttänzer",
        question: "Die Balletttänzer der Kompanie haben ihre Generalprobe auf der großen Bühne. <br /> ______ verletzt sich dabei am Bein. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 2,
        condition: "f",
        phase: 1,
        stereotype: "female",
        role_noun: "Baletttänzer",
        question: "Die Balletttänzerinnen der Kompanie haben ihre Generalprobe auf der großen Bühne. <br /> ______ verletzt sich dabei am Bein. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 2,
        condition: "n",
        phase: 1,
        stereotype: "female",
        role_noun: "Baletttänzer",
        question: "Die BalletttänzerInnen der Kompanie haben ihre Generalprobe auf der großen Bühne. <br /> ______ verletzt sich dabei am Bein. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 3,
        condition:"m",
        phase: 1,
        stereotype: "female",
        role_noun: "Kassierer",
        question: "Der Arbeitsalltag von Kassierern ist sehr anstrengend. <br /> ______ muss jeden Morgen um fünf Uhr aufstehen. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 3,
        condition: "f",
        phase: 1,
        stereotype: "female",
        role_noun: "Kassierer",
        question: "Der Arbeitsalltag von Kassiererinnen ist sehr anstrengend. <br /> ______ muss jeden Morgen um fünf Uhr aufstehen. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 3,
        condition: "n",
        phase: 1,
        stereotype: "female",
        role_noun: "Kassierer",
        question: "Der Arbeitsalltag von KassiererInnen ist sehr anstrengend. <br /> ______ muss jeden Morgen um fünf Uhr aufstehen. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 4,
        condition: "m",
        phase: 1,
        stereotype: "female",
        role_noun: "Ernährungsberater",
        question: " Ernährungsberater empfehlen die Einnahme von Vitaminpräparaten. <br />_____ hält Vitamin D im Winter besonders wichtig. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 4,
        condition: "n",
        phase: 1,
        stereotype: "female",
        role_noun: "Ernährungsberater",
        question: " Ernährungsberaterinnen empfehlen die Einnahme von Vitaminpräparaten. <br />_____ hält Vitamin D im Winter besonders wichtig. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 4,
        condition: "n",
        phase: 1,
        stereotype: "female",
        role_noun: "Ernährungsberater",
        question: " ErnährungsberaterInnen empfehlen die Einnahme von Vitaminpräparaten. <br />_____ hält Vitamin D im Winter besonders wichtig. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 5,
        condition: "m",
        phase: 1,
        stereotype: "female",
        role_noun: "Floristen",
        question: "Wenn die Jahreszeiten wechseln, müssen Floristen die ganze Gärtnerei neu dekorieren. <br /> _____ liebt vor allem die Herbstdekoration. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 5,
        condition: "f",
        phase: 1,
        stereotype: "female",
        role_noun: "Floristen",
        question: "Wenn die Jahreszeiten wechseln, müssen Floristinnen die ganze Gärtnerei neu dekorieren. <br /> _____ liebt vor allem die Herbstdekoration. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 5,
        condition: "n",
        phase: 1,
        stereotype: "female",
        role_noun: "Floristen",
        question: "Wenn die Jahreszeiten wechseln, müssen FloristInnen die ganze Gärtnerei neu dekorieren. <br /> _____ liebt vor allem die Herbstdekoration. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 6,
        condition: "m",
        phase: 1,
        stereotype: "female",
        role_noun: "Flugbegleiter",
        question: "Im Gegensatz zu allen Fluggästen mögen Flugbegleiter keinen Tomatensaft.<br /> _____ bevorzugt Orangensaft während einer langen Flugreise. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 6,
        condition: "f",
        phase: 1,
        stereotype: "female",
        role_noun: "Flugbegleiter",
        question: "Im Gegensatz zu allen Fluggästen mögen Flugbegleiterinnen keinen Tomatensaft.<br /> _____ bevorzugt Orangensaft während einer langen Flugreise. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 6,
        condition: "n",
        phase: 1,
        stereotype: "female",
        role_noun: "Flugbegleiter",
        question: "Im Gegensatz zu allen Fluggästen mögen FlugbegleiterInnen keinen Tomatensaft.<br /> _____ bevorzugt Orangensaft während einer langen Flugreise. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 7,
        condition: "m",
        phase: 1,
        stereotype: "female",
        role_noun: "Friseure",
        question: "Bei den ganzen neuen Trends kommen Friseure kaum noch hinterher.<br /> _____ schneidet am liebsten klassische Frisuren. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 7,
        condition: "f",
        phase: 1,
        stereotype: "female",
        role_noun: "Friseure",
        question: "Bei den ganzen neuen Trends kommen Friseurinnen kaum noch hinterher.<br /> _____ schneidet am liebsten klassische Frisuren. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 7,
        condition: "n",
        phase: 1,
        stereotype: "female",
        role_noun: "Friseure",
        question: "Bei den ganzen neuen Trends kommen FriseurInnen kaum noch hinterher.<br /> _____ schneidet am liebsten klassische Frisuren. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 8,
        condition: "m",
        phase: 1,
        stereotype: "female",
        role_noun: "Haushälter",
        question: "Viele Haushälter kümmern sich neben dem Haushalt auch um das seelische Wohl ihrer Vorgesetzten.<br /> _____ hat immer ein offenes Ohr, wenn die Kinder Probleme in der Schule haben. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 8,
        condition: "f",
        phase: 1,
        stereotype: "female",
        role_noun: "Haushälter",
        question: "Viele Haushälterinnen kümmern sich neben dem Haushalt auch um das seelische Wohl ihrer Vorgesetzten.<br /> _____ hat immer ein offenes Ohr, wenn die Kinder Probleme in der Schule haben. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 8,
        condition: "n",
        phase: 1,
        stereotype: "female",
        role_noun: "Haushälter",
        question: "Viele HaushälterInnen kümmern sich neben dem Haushalt auch um das seelische Wohl ihrer Vorgesetzten.<br /> _____ hat immer ein offenes Ohr, wenn die Kinder Probleme in der Schule haben. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 9,
        condition: "m",
        phase: 1,
        stereotype: "female",
        role_noun: "Kindergärtner",
        question: "Nach dem Feierabend genießen die Kindergärtner die Ruhe von ihren kleinen Schützlingen.<br /> _____ geht nach der Arbeit eine Runde joggen, um den Kopf freizubekommen. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 9,
        condition: "f",
        phase: 1,
        stereotype: "female",
        role_noun: "Kindergärtner",
        question: "Nach dem Feierabend genießen die Kindergärtnerinnen die Ruhe von ihren kleinen Schützlingen.<br /> _____ geht nach der Arbeit eine Runde joggen, um den Kopf freizubekommen. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 9,
        condition: "n",
        phase: 1,
        stereotype: "female",
        role_noun: "Kindergärtner",
        question: "Nach dem Feierabend genießen die KindergärtnerInnen die Ruhe von ihren kleinen Schützlingen.<br /> _____ geht nach der Arbeit eine Runde joggen, um den Kopf freizubekommen. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 10,
        condition: "m",
        phase: 1,
        stereotype: "female",
        role_noun: "Grundschullehrer",
        question: "Um den Unterricht möglichst abwechslungsreich zu gestalten, nutzen Grundschullehrer gerne verschiedene Medien.<br /> _____ verwendet am liebsten das Whiteboard, um Inhalte zu visualisieren. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 10,
        condition: "f",
        phase: 1,
        stereotype: "female",
        role_noun: "Grundschullehrer",
        question: "Um den Unterricht möglichst abwechslungsreich zu gestalten, nutzen Grundschullehrerinnen gerne verschiedene Medien.<br /> _____ verwendet am liebsten das Whiteboard, um Inhalte zu visualisieren. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 10,
        condition: "n",
        phase: 1,
        stereotype: "female",
        role_noun: "Grundschullehrer",
        question: "Um den Unterricht möglichst abwechslungsreich zu gestalten, nutzen GrundschullehrerInnen gerne verschiedene Medien.<br /> _____ verwendet am liebsten das Whiteboard, um Inhalte zu visualisieren. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 11,
        condition: "m",
        phase: 1,
        stereotype: "female",
        role_noun: "Autoren von Liebesromanen",
        question: "Autoren von Liebesromanen wird oft ein Hang zur Dramatik nachgesagt.<br /> _____ lässt Geschichten deshalb stets mit einem Happy End enden. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 11,
        condition: "f",
        phase: 1,
        stereotype: "female",
        role_noun: "Autoren von Liebesromanen",
        question: "Autorinnen von Liebesromanen wird oft ein Hang zur Dramatik nachgesagt.<br /> _____ lässt Geschichten deshalb stets mit einem Happy End enden. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 11,
        condition: "n",
        phase: 1,
        stereotype: "female",
        role_noun: "Autoren von Liebesromanen",
        question: "AutorInnen von Liebesromanen wird oft ein Hang zur Dramatik nachgesagt.<br /> _____ lässt Geschichten deshalb stets mit einem Happy End enden. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 12,
        condition: "m",
        phase: 1,
        stereotype: "female",
        role_noun: "Schneider",
        question: "Die Fast-Fashion Industrie sorgt dafür, dass Schneider kaum noch Aufträge bekommen. <br /> _____ sucht daher nach einem Nebenjob, um die Miete bezahlen zu können. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 12,
        condition: "f",
        phase: 1,
        stereotype: "female",
        role_noun: "Schneider",
        question: "Die Fast-Fashion Industrie sorgt dafür, dass Schneiderinnen kaum noch Aufträge bekommen. <br /> _____ sucht daher nach einem Nebenjob, um die Miete bezahlen zu können. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 12,
        condition: "n",
        phase: 1,
        stereotype: "female",
        role_noun: "Schneider",
        question: "Die Fast-Fashion Industrie sorgt dafür, dass SchneiderInnen kaum noch Aufträge bekommen. <br /> _____ sucht daher nach einem Nebenjob, um die Miete bezahlen zu können. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 13,
        condition: "m",
        phase: 1,
        stereotype: "male",
        role_noun: "Astronaut",
        question: "Um sich auf die Zeit im All vorzubereiten, müssen Astronauten eine spezielle Schulung durchlaufen. <br /> _____ fällt es schwer, sich an die Trockennahrung zu gewöhnen. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 13,
        condition: "f",
        phase: 1,
        stereotype: "male",
        role_noun: "Astronaut",
        question: "Um sich auf die Zeit im All vorzubereiten, müssen Astronautinnen eine spezielle Schulung durchlaufen. <br /> _____ fällt es schwer, sich an die Trockennahrung zu gewöhnen. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 13,
        condition: "n",
        phase: 1,
        stereotype: "male",
        role_noun: "Astronaut",
        question: "Um sich auf die Zeit im All vorzubereiten, müssen AstronautInnen eine  spezielle Schulung durchlaufen. <br /> _____ fällt es schwer, sich an die Trockennahrung zu gewöhnen. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 14,
        condition: "m",
        phase: 1,
        stereotype: "male",
        role_noun: "Metzger",
        question: "Seit einiger Zeit nehmen Metzger auch vegetarische Produkte in ihr Sortiment auf. <br /> _____ bietet jetzt auch Gemüsefrikadellen an der Frischetheke an. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 14,
        condition: "f",
        phase: 1,
        stereotype: "male",
        role_noun: "Metzger",
        question: "Seit einiger Zeit nehmen Metzgerinnen auch vegetarische Produkte in ihr Sortiment auf. <br /> _____ bietet jetzt auch Gemüsefrikadellen an der Frischetheke an. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 14,
        condition: "n",
        phase: 1,
        stereotype: "male",
        role_noun: "Metzger",
        question: "Seit einiger Zeit nehmen MetzgerInnen auch vegetarische Produkte in ihr Sortiment auf. <br /> _____ bietet jetzt auch Gemüsefrikadellen an der Frischetheke an. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 15,
        condition: "m",
        phase: 1,
        stereotype: "male",
        role_noun: "Programmierer",
        question: "Ein leistungsstarker Computer ist ausschlaggebend für die Arbeit von Programmierern. <br /> _____ installiert regelmäßig die neuesten Softwareupdates, um nicht von der Konkurrenz abgehängt zu werden. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 15,
        condition: "f",
        phase: 1,
        stereotype: "male",
        role_noun: "Programmierer",
        question: "Ein leistungsstarker Computer ist ausschlaggebend für die Arbeit von Programmiererinnen. <br /> _____ installiert regelmäßig die neuesten Softwareupdates, um nicht von der Konkurrenz abgehängt zu werden. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 15,
        condition: "n",
        phase: 1,
        stereotype: "male",
        role_noun: "Programmierer",
        question: "Ein leistungsstarker Computer ist ausschlaggebend für die Arbeit von ProgrammiererInnen. <br /> _____ installiert regelmäßig die neuesten Softwareupdates, um nicht von der Konkurrenz abgehängt zu werden. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 16,
        condition: "m",
        phase: 1,
        stereotype: "male",
        role_noun: "Manager",
        question: "Organisation und Führungsstärke gehören zu den wichtigsten Merkmalen von Managern. <br /> _____ legt trotzdem viel Wert auf ein freundliches Arbeitsklima im Büro. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 16,
        condition: "f",
        phase: 1,
        stereotype: "male",
        role_noun: "Manager",
        question: "Organisation und Führungsstärke gehören zu den wichtigsten Merkmalen von Managerin. <br /> _____ legt trotzdem viel Wert auf ein freundliches Arbeitsklima im Büro. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 16,
        condition: "n",
        phase: 1,
        stereotype: "male",
        role_noun: "Manager",
        question: "Organisation und Führungsstärke gehören zu den wichtigsten Merkmalen von ManagerInnen. <br /> _____ legt trotzdem viel Wert auf ein freundliches Arbeitsklima im Büro. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 17,
        condition: "m",
        phase: 1,
        stereotype: "male",
        role_noun: "Bürgermeister",
        question: "Urbane Bürgermeister haben andere Prioritäten als jene auf dem Land. <br />	_____ legt das Hauptaugenmerk in der aktuellen Kampagne auf Innovation und Klimaschutz. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 17,
        condition: "f",
        phase: 1,
        stereotype: "male",
        role_noun: "Bürgermeister",
        question: "Urbane Bürgermeisterinnen haben andere Prioritäten als jene auf dem Land. <br />	_____ legt das Hauptaugenmerk in der aktuellen Kampagne auf Innovation und Klimaschutz. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 17,
        condition: "n",
        phase: 1,
        stereotype: "male",
        role_noun: "Bürgermeister",
        question: "Urbane BürgermeisterInnen haben andere Prioritäten als jene auf dem Land. <br />	_____ legt das Hauptaugenmerk in der aktuellen Kampagne auf Innovation und Klimaschutz. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 18,
        condition: "m",
        phase: 1,
        stereotype: "male",
        role_noun: "Mörder",
        question: "Die erfolgreiche Festnahme von Mördern nimmt aufgrund technologischen Fortschritts immer weiter zu. <br />	_____ konnte aufgrund von Videoüberwachung und der Ortung seines Smartphones schnell verhaftet werde, bevor es ein neues Opfer gab. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 18,
        condition: "f",
        phase: 1,
        stereotype: "male",
        role_noun: "Mörder",
        question: "Die erfolgreiche Festnahme von Mörderinnen nimmt aufgrund technologischen Fortschritts immer weiter zu. <br />	_____ konnte aufgrund von Videoüberwachung und der Ortung seines Smartphones schnell verhaftet werde, bevor es ein neues Opfer gab. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 18,
        condition: "n",
        phase: 1,
        stereotype: "male",
        role_noun: "Mörder",
        question: "Die erfolgreiche Festnahme von MörderInnen nimmt aufgrund technologischen Fortschritts immer weiter zu. <br />	_____ konnte aufgrund von Videoüberwachung und der Ortung seines Smartphones schnell verhaftet werde, bevor es ein neues Opfer gab. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 19,
        condition: "m",
        phase: 1,
        stereotype: "male",
        role_noun: "Pilot",
        question: "Weil Piloten beim Fliegen einer erhöhten Strahlung ausgesetzt sind, müssen sie früher in den Ruhestand. <br />		_____ geht Ende des Jahres bereits in Rente, während Gleichaltrige noch 8 Jahre in ihrem Job arbeiten müssen. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 19,
        condition: "f",
        phase: 1,
        stereotype: "male",
        role_noun: "Pilot",
        question: "Weil Pilotinnen beim Fliegen einer erhöhten Strahlung ausgesetzt sind, müssen sie früher in den Ruhestand. <br />		_____ geht Ende des Jahres bereits in Rente, während Gleichaltrige noch 8 Jahre in ihrem Job arbeiten müssen. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 19,
        condition: "n",
        phase: 1,
        stereotype: "male",
        role_noun: "Pilot",
        question: "Weil PilotInnen beim Fliegen einer erhöhten Strahlung ausgesetzt sind, müssen sie früher in den Ruhestand. <br />		_____ geht Ende des Jahres bereits in Rente, während Gleichaltrige noch 8 Jahre in ihrem Job arbeiten müssen. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 20,
        condition: "m",
        phase: 1,
        stereotype: "male",
        role_noun: "Präsident",
        question: "Auf dem Weltklima-Gipfel versammeln sich unter anderem Präsidenten verschiedener Länder, um über eine politische Zusammenarbeit zu diskutieren. <br />	_____ ist für die Einführung einer einheitlichen, verpflichtenden CO2-Besteuerung. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 20,
        condition: "f",
        phase: 1,
        stereotype: "male",
        role_noun: "Präsident",
        question: "Auf dem Weltklima-Gipfel versammeln sich unter anderem Präsidentinnen verschiedener Länder, um über eine politische Zusammenarbeit zu diskutieren. <br />	_____ ist für die Einführung einer einheitlichen, verpflichtenden CO2-Besteuerung. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 20,
        condition: "n",
        phase: 1,
        stereotype: "male",
        role_noun: "Präsident",
        question: "Auf dem Weltklima-Gipfel versammeln sich unter anderem PräsidentInnen verschiedener Länder, um über eine politische Zusammenarbeit zu diskutieren. <br />	_____ ist für die Einführung einer einheitlichen, verpflichtenden CO2-Besteuerung. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 21,
        condition: "m",
        phase: 1,
        stereotype: "male",
        role_noun: "Privatdetektiv",
        question: "Eine erfolgreiche TV-Serie berichtet über die spannende Arbeit von Privatdetektiven. <br />	_____ arbeitet schon seit langem in einer Detektei und ärgert sich über die unauthentische Darstellung des Berufes. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 21,
        condition: "f",
        phase: 1,
        stereotype: "male",
        role_noun: "Privatdetektiv",
        question: "Eine erfolgreiche TV-Serie berichtet über die spannende Arbeit von Privatdetektivinnen. <br />	_____ arbeitet schon seit langem in einer Detektei und ärgert sich über die unauthentische Darstellung des Berufes. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 21,
        condition: "n",
        phase: 1,
        stereotype: "male",
        role_noun: "Privatdetektiv",
        question: "Eine erfolgreiche TV-Serie berichtet über die spannende Arbeit von PrivatdetektivInnen. <br />	_____ arbeitet schon seit langem in einer Detektei und ärgert sich über die unauthentische Darstellung des Berufes. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 22,
        condition: "m",
        phase: 1,
        stereotype: "male",
        role_noun: "Soldat",
        question: "In Deutschland dürfen Soldaten kostenlos die öffentlichen Verkehrsmittel nutzen. <br />	_____ besucht deshalb jede Woche die Familie. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 22,
        condition: "f",
        phase: 1,
        stereotype: "male",
        role_noun: "Soldat",
        question: "In Deutschland dürfen Soldatinnen kostenlos die öffentlichen Verkehrsmittel nutzen. <br />	_____ besucht deshalb jede Woche die Familie. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 22,
        condition: "n",
        phase: 1,
        stereotype: "male",
        role_noun: "Soldat",
        question: "In Deutschland dürfen SoldatInnen kostenlos die öffentlichen Verkehrsmittel nutzen. <br />	_____ besucht deshalb jede Woche die Familie. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 23,
        condition: "m",
        phase: 1,
        stereotype: "male",
        role_noun: "Chirurgen",
        question: "Um während Operationen konzentriert zu bleiben, haben alle Chirurgen ihre ganz persönlichen Strategien. <br />	_____ hört gerne klassische Musik während eines Eingriffs. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 23,
        condition: "f",
        phase: 1,
        stereotype: "male",
        role_noun: "Chirurgen",
        question: "Um während Operationen konzentriert zu bleiben, haben alle Chirurginnen ihre ganz persönlichen Strategien. <br />	_____ hört gerne klassische Musik während eines Eingriffs. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 23,
        condition: "n",
        phase: 1,
        stereotype: "male",
        role_noun: "Chirurgen",
        question: "Um während Operationen konzentriert zu bleiben, haben alle ChirurgInnen ihre ganz persönlichen Strategien. <br />	_____ hört gerne klassische Musik während eines Eingriffs. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 24,
        condition: "m",
        phase: 1,
        stereotype: "male",
        role_noun: "Taxifahrer",
        question: "Während einer Nachtschicht wird der Dienst von Taxifahrern hauptsächlich von Betrunkenen in Anspruch genommen. <br />	_____ arbeitet deswegen lieber tagsüber. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 24,
        condition: "f",
        phase: 1,
        stereotype: "male",
        role_noun: "Taxifahrer",
        question: "Während einer Nachtschicht wird der Dienst von Taxifahrerinnen hauptsächlich von Betrunkenen in Anspruch genommen. <br />	_____ arbeitet deswegen lieber tagsüber. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 24,
        condition: "n",
        phase: 1,
        stereotype: "male",
        role_noun: "Taxifahrer",
        question: "Während einer Nachtschicht wird der Dienst von TaxifahrerInnen hauptsächlich von Betrunkenen in Anspruch genommen. <br />	_____ arbeitet deswegen lieber tagsüber. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
      item: 25,
      condition: "m",
      phase: 1,
      stereotype: "neutral",
      role_noun: "Künstler",
      question: "Bei einer Vernissage stellen Künstler ihre aktuellen Werke vor. <br /> ___ präsentiert stolz eine neue Technik, die Gips und Sand auf eine einzigartige Art und Weise  miteinander verbindet. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      min_chars: 2
    },
    {
      item: 25,
      condition: "f",
      phase: 1,
      stereotype: "neutral",
      role_noun: "Künstler",
      question: "Bei einer Vernissage stellen Künstlerinnen ihre aktuellen Werke vor. <br /> ___ präsentiert stolz eine neue Technik, die Gips und Sand auf eine einzigartige Art und Weise  miteinander verbindet. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      min_chars: 2
    },
    {
      item: 25,
      condition: "n",
      phase: 1,
      stereotype: "neutral",
      role_noun: "Künstler",
      question: "Bei einer Vernissage stellen KünstlerInnen ihre aktuellen Werke vor. <br /> ___ präsentiert stolz eine neue Technik, die Gips und Sand auf eine einzigartige Art und Weise  miteinander verbindet. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      min_chars: 2
    },
    {
      item: 26,
      condition: "m",
      phase: 1,
      stereotype: "neutral",
      role_noun: "Sportler",
      question: "Bei Olympia werden die besten Sportler mit einer Medaille gekürt. <br /> ___ erhält Gold in der Disziplin Schwimmen. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      min_chars: 2
    },
    {
      item: 26,
      condition: "f",
      phase: 1,
      stereotype: "neutral",
      role_noun: "Sportler",
      question: "Bei Olympia werden die besten Sportlerinnen mit einer Medaille gekürt. <br /> ___ erhält Gold in der Disziplin Schwimmen. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      min_chars: 2
    },
    {
      item: 26,
      condition: "n",
      phase: 1,
      stereotype: "neutral",
      role_noun: "Sportler",
      question: "Bei Olympia werden die besten SportlerInnen mit einer Medaille gekürt. <br /> ___ erhält Gold in der Disziplin Schwimmen. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      min_chars: 2
    },
    {
      item: 27,
      condition: "m",
      phase: 1,
      stereotype: "neutral",
      role_noun: "Hundehalter",
      question: "Während der Corona-Pandemie hatten Hundehalter mehr Zeit für ihre Vierbeiner. <br /> ___ ging jeden Nachmittag ausgiebig mit dem Hund spazieren. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      min_chars: 2
    },
    {
      item: 27,
      condition: "f",
      phase: 1,
      stereotype: "neutral",
      role_noun: "Hundehalter",
      question: "Während der Corona-Pandemie hatten Hundehalterinnen mehr Zeit für ihre Vierbeiner. <br /> ___ ging jeden Nachmittag ausgiebig mit dem Hund spazieren. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      min_chars: 2
    },
    {
      item: 27,
      condition: "n",
      phase: 1,
      stereotype: "neutral",
      role_noun: "Hundehalter",
      question: "Während der Corona-Pandemie hatten HundehalterInnen mehr Zeit für ihre Vierbeiner. <br /> ___ ging jeden Nachmittag ausgiebig mit dem Hund spazieren. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      min_chars: 2
    },
    {
      item: 28,
      condition: "m",
      phase: 1,
      stereotype: "neutral",
      role_noun: "Immobilienmakler",
      question: "Um die besten Angebote nicht zu verpassen, müssen Immobilienmakler täglich das Internet durchforsten. <br /> ___ hat allein heute 3 Stunden recherchiert. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      min_chars: 2
    },
    {
      item: 28,
      condition: "f",
      phase: 1,
      stereotype: "neutral",
      role_noun: "Immobilienmakler",
      question: "Um die besten Angebote nicht zu verpassen, müssen Immobilienmaklerinnen täglich das Internet durchforsten. <br /> ___ hat allein heute 3 Stunden recherchiert. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      min_chars: 2
    },
    {
      item: 28,
      condition: "n",
      phase: 1,
      stereotype: "neutral",
      role_noun: "Immobilienmakler",
      question: "Um die besten Angebote nicht zu verpassen, müssen ImmobilienmaklerInnen täglich das Internet durchforsten. <br /> ___ hat allein heute 3 Stunden recherchiert. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      min_chars: 2
    },
    {
      item: 29,
      condition: "m",
      phase: 1,
      stereotype: "neutral",
      role_noun: "Journalist",
      question: "Ein Journalismus Studium zu beginnen, ist in Deutschland sehr schwierig, weshalb viele angehende Journalisten einen alternativen Bildungsweg einschlagen. <br /> ___ möchte sich trotzdem an der Universität in Berlin bewerben. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      min_chars: 2
    },
    {
      item: 29,
      condition: "f",
      phase: 1,
      stereotype: "neutral",
      role_noun: "Journalist",
      question: "Ein Journalismus Studium zu beginnen, ist in Deutschland sehr schwierig, weshalb viele angehende Journalistinnen einen alternativen Bildungsweg einschlagen. <br /> ___ möchte sich trotzdem an der Universität in Berlin bewerben. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      min_chars: 2
    },
    {
      item: 29,
      condition: "n",
      phase: 1,
      stereotype: "neutral",
      role_noun: "Journalist",
      question: "Ein Journalismus Studium zu beginnen, ist in Deutschland sehr schwierig, weshalb viele angehende JournalistInnen einen alternativen Bildungsweg einschlagen. <br /> ___ möchte sich trotzdem an der Universität in Berlin bewerben. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      min_chars: 2
    },
    {
      item: 30,
      condition: "m",
      phase: 1,
      stereotype: "neutral",
      role_noun: "Mieter",
      question: "Wegen des Mietendeckels konnten viele Mieter während der Pandemie zu günstigen Mieten in den Wohnungen bleiben. <br /> ___ wurde jedoch kürzlich wegen Eigenbedarfs der Mietvertrag gekündigt. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      min_chars: 2
    },
    {
      item: 30,
      condition: "f",
      phase: 1,
      stereotype: "neutral",
      role_noun: "Mieter",
      question: "Wegen des Mietendeckels konnten viele Mieterinnen während der Pandemie zu günstigen Mieten in den Wohnungen bleiben. <br /> ___ wurde jedoch kürzlich wegen Eigenbedarfs der Mietvertrag gekündigt. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      min_chars: 2
    },
    {
      item: 30,
      condition: "n",
      phase: 1,
      stereotype: "neutral",
      role_noun: "Mieter",
      question: "Wegen des Mietendeckels konnten viele MieterInnen während der Pandemie zu günstigen Mieten in den Wohnungen bleiben. <br /> ___ wurde jedoch kürzlich wegen Eigenbedarfs der Mietvertrag gekündigt. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      min_chars: 2
    },

    {
      item: 31,
      condition: "m",
      phase: 1,
      stereotype: "neutral",
      role_noun: "Patient",
      question: "In den Wintermonaten steigt die Anzahl der Patienten in den Arztpraxen stark an. <br /> ___ wartet schon seit Tagen auf einen Termin. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      min_chars: 2
    },
    {
      item: 31,
      condition: "f",
      phase: 1,
      stereotype: "neutral",
      role_noun: "Patient",
      question: "In den Wintermonaten steigt die Anzahl der Patientinnen in den Arztpraxen stark an. <br /> ___ wartet schon seit Tagen auf einen Termin. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      min_chars: 2
    },
    {
      item: 31,
      condition: "n",
      phase: 1,
      stereotype: "neutral",
      role_noun: "Patient",
      question: "In den Wintermonaten steigt die Anzahl der PatientInnen in den Arztpraxen stark an. <br /> ___ wartet schon seit Tagen auf einen Termin. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      min_chars: 2
    },
    {
      item: 32,
      condition: "m",
      phase: 1,
      stereotype: "neutral",
      role_noun: "Fotograf",
      question: "Fotografen werden häufig für große Hochzeiten engagiert. <br /> ___ fotografiert dabei am liebsten spontane Momente, die nicht gestellt sind. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      min_chars: 2
    },
    {
      item: 32,
      condition: "f",
      phase: 1,
      stereotype: "neutral",
      role_noun: "Fotograf",
      question: "Fotografinnen werden häufig für große Hochzeiten engagiert. <br /> ___ fotografiert dabei am liebsten spontane Momente, die nicht gestellt sind. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      min_chars: 2
    },
    {
      item: 32,
      condition: "n",
      phase: 1,
      stereotype: "neutral",
      role_noun: "Fotograf",
      question: "FotografInnen werden häufig für große Hochzeiten engagiert. <br /> ___ fotografiert dabei am liebsten spontane Momente, die nicht gestellt sind. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      min_chars: 2
    },
    {
      item: 33,
      condition: "m",
      phase: 1,
      stereotype: "neutral",
      role_noun: "Mediziner",
      question: "Als Mediziner trägt man eine große Verantwortung. <br /> ___ kontrolliert jedes Rezept, das ausgestellt wird mehrfach, um Fehler zu vermeiden. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      min_chars: 2
    },
    {
      item: 33,
      condition: "f",
      phase: 1,
      stereotype: "neutral",
      role_noun: "Mediziner",
      question: "Als Medizinerinnen trägt man eine große Verantwortung. <br /> ___ kontrolliert jedes Rezept, das ausgestellt wird mehrfach, um Fehler zu vermeiden. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      min_chars: 2
    },
    {
      item: 33,
      condition: "n",
      phase: 1,
      stereotype: "neutral",
      role_noun: "Mediziner",
      question: "Als MedizinerInnen trägt man eine große Verantwortung. <br /> ___ kontrolliert jedes Rezept, das ausgestellt wird mehrfach, um Fehler zu vermeiden. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      min_chars: 2
    },
    {
      item: 34,
      condition: "m",
      phase: 1,
      stereotype: "neutral",
      role_noun: "Aktivist",
      question: "Die Relevanz von politischen Aktivisten nimmt immer mehr zu. <br /> ___ geht jede Woche auf die Straße, um für den Klimaschutz zu demonstrieren. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      min_chars: 2
    },
    {
      item: 34,
      condition: "f",
      phase: 1,
      stereotype: "neutral",
      role_noun: "Aktivist",
      question: "Die Relevanz von politischen Aktivistinnen nimmt immer mehr zu. <br /> ___ geht jede Woche auf die Straße, um für den Klimaschutz zu demonstrieren. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      min_chars: 2
    },
    {
      item: 34,
      condition: "n",
      phase: 1,
      stereotype: "neutral",
      role_noun: "Aktivist",
      question: "Die Relevanz von politischen AktivistInnen nimmt immer mehr zu. <br /> ___ geht jede Woche auf die Straße, um für den Klimaschutz zu demonstrieren. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      min_chars: 2
    },
    {
      item: 35,
      condition: "m",
      phase: 1,
      stereotype: "neutral",
      role_noun: "Psychiater",
      question: "Eine eigene Praxis ist der Traum vieler Psychiater. <br /> ___ erhofft sich davon besonders flexible Arbeitszeiten. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      min_chars: 2
    },
    {
      item: 35,
      condition: "f",
      phase: 1,
      stereotype: "neutral",
      role_noun: "Psychiater",
      question: "Eine eigene Praxis ist der Traum vieler Psychiaterinnen. <br /> ___ erhofft sich davon besonders flexible Arbeitszeiten. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      min_chars: 2
    },
    {
      item: 35,
      condition: "n",
      phase: 1,
      stereotype: "neutral",
      role_noun: "Psychiater",
      question: "Eine eigene Praxis ist der Traum vieler PsychiaterInnen. <br /> ___ erhofft sich davon besonders flexible Arbeitszeiten. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      min_chars: 2
    },
    {
      item: 36,
      condition: "m",
      phase: 1,
      stereotype: "neutral",
      role_noun: "Student",
      question: "Während der Pandemie vermissten die Studenten vor allem die Mensa. <br /> ___ geht jeden Tag essen, seit sie wieder geöffnet ist. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      min_chars: 2
    },
    {
      item: 36,
      condition: "f",
      phase: 1,
      stereotype: "neutral",
      role_noun: "Student",
      question: "Während der Pandemie vermissten die Studentinnen vor allem die Mensa. <br /> ___ geht jeden Tag essen, seit sie wieder geöffnet ist. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      min_chars: 2
    },
    {
      item: 36,
      condition: "n",
      phase: 1,
      stereotype: "neutral",
      role_noun: "Student",
      question: "Während der Pandemie vermissten die StudentInnen vor allem die Mensa. <br /> ___ geht jeden Tag essen, seit sie wieder geöffnet ist. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      min_chars: 2
    },
]};


const forced_choice_3A_trials = {
  forced_choice_customized:[
    {

        question: "Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {

        question: "Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    
]};
