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
        question:
        _.sample(["Babysitter werden trotz fehlender Kitaplätze immer schlechter bezahlt. <br /> ______ möchte sich deshalb einen neuen Job suchen.<br /> Bitte schreibe einen passenden Namen in das Feld.",
        "Babysitterinnen werden trotz fehlender Kitaplätze immer schlechter bezahlt. <br /> ______ möchte sich deshalb einen neuen Job suchen.<br /> Bitte schreibe einen passenden Namen in das Feld.",
        "BabysitterInnen werden trotz fehlender Kitaplätze immer schlechter bezahlt. <br /> ______ möchte sich deshalb einen neuen Job suchen.<br /> Bitte schreibe einen passenden Namen in das Feld."]),
        min_chars: 2
    },
    {
        item: 2,
        condition: "m",
        phase: 1,
        stereotype: "female",
        role_noun: "Baletttänzer",
        question:
        _.sample(["Die Balletttänzer der Kompanie haben ihre Generalprobe auf der großen Bühne. <br /> ______ verletzt sich dabei am Bein. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        "Die Balletttänzerinnen der Kompanie haben ihre Generalprobe auf der großen Bühne. <br /> ______ verletzt sich dabei am Bein. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        "Die BalletttänzerInnen der Kompanie haben ihre Generalprobe auf der großen Bühne. <br /> ______ verletzt sich dabei am Bein. <br /> Bitte schreibe einen passenden Namen in das Feld."]),
        min_chars: 2
    },
    {
        item: 3,
        condition:"m",
        phase: 1,
        stereotype: "female",
        role_noun: "Kassierer",
        question:
        _.sample(["Der Arbeitsalltag von Kassierern ist sehr anstrengend. <br /> ______ muss jeden Morgen um fünf Uhr aufstehen. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        "Der Arbeitsalltag von Kassiererinnen ist sehr anstrengend. <br /> ______ muss jeden Morgen um fünf Uhr aufstehen. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        "Der Arbeitsalltag von KassiererInnen ist sehr anstrengend. <br /> ______ muss jeden Morgen um fünf Uhr aufstehen. <br /> Bitte schreibe einen passenden Namen in das Feld."]),

        min_chars: 2
    },
    {
        item: 4,
        condition: "m",
        phase: 1,
        stereotype: "female",
        role_noun: "Ernährungsberater",
        question:
        _.sample(["Ernährungsberater empfehlen die Einnahme von Vitaminpräparaten. <br />_____ hält Vitamin D im Winter besonders wichtig. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        "Ernährungsberaterinnen empfehlen die Einnahme von Vitaminpräparaten. <br />_____ hält Vitamin D im Winter besonders wichtig. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        "ErnährungsberaterInnen empfehlen die Einnahme von Vitaminpräparaten. <br />_____ hält Vitamin D im Winter besonders wichtig. <br /> Bitte schreibe einen passenden Namen in das Feld."]),
        min_chars: 2
    },
    {
        item: 5,
        condition: "m",
        phase: 1,
        stereotype: "female",
        role_noun: "Floristen",
        question:
        _.sample(["Wenn die Jahreszeiten wechseln, müssen Floristen die ganze Gärtnerei neu dekorieren. <br /> _____ liebt vor allem die Herbstdekoration. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        "Wenn die Jahreszeiten wechseln, müssen Floristinnen die ganze Gärtnerei neu dekorieren. <br /> _____ liebt vor allem die Herbstdekoration. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        "Wenn die Jahreszeiten wechseln, müssen FloristInnen die ganze Gärtnerei neu dekorieren. <br /> _____ liebt vor allem die Herbstdekoration. <br /> Bitte schreibe einen passenden Namen in das Feld."]),
        min_chars: 2
    },
    {
        item: 6,
        condition: "m",
        phase: 1,
        stereotype: "female",
        role_noun: "Flugbegleiter",
        question:
        _.sample(["Im Gegensatz zu allen Fluggästen mögen Flugbegleiter keinen Tomatensaft.<br /> _____ bevorzugt Orangensaft während einer langen Flugreise. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        "Im Gegensatz zu allen Fluggästen mögen Flugbegleiterinnen keinen Tomatensaft.<br /> _____ bevorzugt Orangensaft während einer langen Flugreise. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        "Im Gegensatz zu allen Fluggästen mögen FlugbegleiterInnen keinen Tomatensaft.<br /> _____ bevorzugt Orangensaft während einer langen Flugreise. <br /> Bitte schreibe einen passenden Namen in das Feld."]),
        min_chars: 2
    },
    {
        item: 7,
        condition: "m",
        phase: 1,
        stereotype: "female",
        role_noun: "Friseure",
        question:
        _.sample(["Bei den ganzen neuen Trends kommen Friseure kaum noch hinterher.<br /> _____ schneidet am liebsten klassische Frisuren. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        "Bei den ganzen neuen Trends kommen Friseurinnen kaum noch hinterher.<br /> _____ schneidet am liebsten klassische Frisuren. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        "Bei den ganzen neuen Trends kommen FriseurInnen kaum noch hinterher.<br /> _____ schneidet am liebsten klassische Frisuren. <br /> Bitte schreibe einen passenden Namen in das Feld."]),
        min_chars: 2
    },
    {
        item: 8,
        condition: "m",
        phase: 1,
        stereotype: "female",
        role_noun: "Haushälter",
        question:
        _.sample(["Viele Haushälter kümmern sich neben dem Haushalt auch um das seelische Wohl ihrer Vorgesetzten.<br /> _____ hat immer ein offenes Ohr, wenn die Kinder Probleme in der Schule haben. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        "Viele Haushälterinnen kümmern sich neben dem Haushalt auch um das seelische Wohl ihrer Vorgesetzten.<br /> _____ hat immer ein offenes Ohr, wenn die Kinder Probleme in der Schule haben. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        "Viele HaushälterInnen kümmern sich neben dem Haushalt auch um das seelische Wohl ihrer Vorgesetzten.<br /> _____ hat immer ein offenes Ohr, wenn die Kinder Probleme in der Schule haben. <br /> Bitte schreibe einen passenden Namen in das Feld."]),

        min_chars: 2
    },
    {
        item: 9,
        condition: "m",
        phase: 1,
        stereotype: "female",
        role_noun: "Kindergärtner",
        question:
        _.sample(["Nach dem Feierabend genießen die Kindergärtner die Ruhe von ihren kleinen Schützlingen.<br /> _____ geht nach der Arbeit eine Runde joggen, um den Kopf freizubekommen. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        "Nach dem Feierabend genießen die Kindergärtnerinnen die Ruhe von ihren kleinen Schützlingen.<br /> _____ geht nach der Arbeit eine Runde joggen, um den Kopf freizubekommen. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        "Nach dem Feierabend genießen die KindergärtnerInnen die Ruhe von ihren kleinen Schützlingen.<br /> _____ geht nach der Arbeit eine Runde joggen, um den Kopf freizubekommen. <br /> Bitte schreibe einen passenden Namen in das Feld."]),
        min_chars: 2
    },
    {
        item: 10,
        condition: "m",
        phase: 1,
        stereotype: "female",
        role_noun: "Grundschullehrer",
        question:
        _.sample(["Um den Unterricht möglichst abwechslungsreich zu gestalten, nutzen Grundschullehrer gerne verschiedene Medien.<br /> _____ verwendet am liebsten das Whiteboard, um Inhalte zu visualisieren. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        "Um den Unterricht möglichst abwechslungsreich zu gestalten, nutzen Grundschullehrerinnen gerne verschiedene Medien.<br /> _____ verwendet am liebsten das Whiteboard, um Inhalte zu visualisieren. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        "Um den Unterricht möglichst abwechslungsreich zu gestalten, nutzen GrundschullehrerInnen gerne verschiedene Medien.<br /> _____ verwendet am liebsten das Whiteboard, um Inhalte zu visualisieren. <br /> Bitte schreibe einen passenden Namen in das Feld."]),
        min_chars: 2
    },
    {
        item: 11,
        condition: "m",
        phase: 1,
        stereotype: "female",
        role_noun: "Autoren von Liebesromanen",
        question:
        _.sample(["Autoren von Liebesromanen wird oft ein Hang zur Dramatik nachgesagt.<br /> _____ lässt Geschichten deshalb stets mit einem Happy End enden. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        "Autorinnen von Liebesromanen wird oft ein Hang zur Dramatik nachgesagt.<br /> _____ lässt Geschichten deshalb stets mit einem Happy End enden. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        "AutorInnen von Liebesromanen wird oft ein Hang zur Dramatik nachgesagt.<br /> _____ lässt Geschichten deshalb stets mit einem Happy End enden. <br /> Bitte schreibe einen passenden Namen in das Feld."]),
        min_chars: 2
    },
    {
        item: 12,
        condition: "m",
        phase: 1,
        stereotype: "female",
        role_noun: "Schneider",
        question:
        _.sample(["Die Fast-Fashion Industrie sorgt dafür, dass Schneider kaum noch Aufträge bekommen. <br /> _____ sucht daher nach einem Nebenjob, um die Miete bezahlen zu können. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        "Die Fast-Fashion Industrie sorgt dafür, dass Schneiderinnen kaum noch Aufträge bekommen. <br /> _____ sucht daher nach einem Nebenjob, um die Miete bezahlen zu können. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        "Die Fast-Fashion Industrie sorgt dafür, dass SchneiderInnen kaum noch Aufträge bekommen. <br /> _____ sucht daher nach einem Nebenjob, um die Miete bezahlen zu können. <br /> Bitte schreibe einen passenden Namen in das Feld."]),
        min_chars: 2
    },
    {
        item: 13,
        condition: "m",
        phase: 1,
        stereotype: "male",
        role_noun: "Astronaut",
        question:
        _.sample(["Um sich auf die Zeit im All vorzubereiten, müssen Astronauten eine spezielle Schulung durchlaufen. <br /> _____ fällt es schwer, sich an die Trockennahrung zu gewöhnen. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        "Um sich auf die Zeit im All vorzubereiten, müssen Astronautinnen eine spezielle Schulung durchlaufen. <br /> _____ fällt es schwer, sich an die Trockennahrung zu gewöhnen. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        "Um sich auf die Zeit im All vorzubereiten, müssen AstronautInnen eine spezielle Schulung durchlaufen. <br /> _____ fällt es schwer, sich an die Trockennahrung zu gewöhnen. <br /> Bitte schreibe einen passenden Namen in das Feld."]),
        min_chars: 2
    },
    {
        item: 14,
        condition: "m",
        phase: 1,
        stereotype: "male",
        role_noun: "Metzger",
        question:
        _.sample(["Seit einiger Zeit nehmen Metzger auch vegetarische Produkte in ihr Sortiment auf. <br /> _____ bietet jetzt auch Gemüsefrikadellen an der Frischetheke an. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        "Seit einiger Zeit nehmen Metzgerinnen auch vegetarische Produkte in ihr Sortiment auf. <br /> _____ bietet jetzt auch Gemüsefrikadellen an der Frischetheke an. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        "Seit einiger Zeit nehmen MetzgerInnen auch vegetarische Produkte in ihr Sortiment auf. <br /> _____ bietet jetzt auch Gemüsefrikadellen an der Frischetheke an. <br /> Bitte schreibe einen passenden Namen in das Feld."]),
        min_chars: 2
    },
    {
        item: 15,
        condition: "m",
        phase: 1,
        stereotype: "male",
        role_noun: "Programmierer",
        question:
        _.sample(["Ein leistungsstarker Computer ist ausschlaggebend für die Arbeit von Programmierern. <br /> _____ installiert regelmäßig die neuesten Softwareupdates, um nicht von der Konkurrenz abgehängt zu werden. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        "Ein leistungsstarker Computer ist ausschlaggebend für die Arbeit von Programmiererinnen. <br /> _____ installiert regelmäßig die neuesten Softwareupdates, um nicht von der Konkurrenz abgehängt zu werden. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        "Ein leistungsstarker Computer ist ausschlaggebend für die Arbeit von ProgrammiererInnen. <br /> _____ installiert regelmäßig die neuesten Softwareupdates, um nicht von der Konkurrenz abgehängt zu werden. <br /> Bitte schreibe einen passenden Namen in das Feld."]),
        min_chars: 2
    },
    {
        item: 16,
        condition: "m",
        phase: 1,
        stereotype: "male",
        role_noun: "Manager",
        question:
        _.sample(["Organisation und Führungsstärke gehören zu den wichtigsten Merkmalen von Managern. <br /> _____ legt trotzdem viel Wert auf ein freundliches Arbeitsklima im Büro. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        "Organisation und Führungsstärke gehören zu den wichtigsten Merkmalen von Managerinnen. <br /> _____ legt trotzdem viel Wert auf ein freundliches Arbeitsklima im Büro. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        "Organisation und Führungsstärke gehören zu den wichtigsten Merkmalen von ManagerInnen. <br /> _____ legt trotzdem viel Wert auf ein freundliches Arbeitsklima im Büro. <br /> Bitte schreibe einen passenden Namen in das Feld."]),
        min_chars: 2
    },
    {
        item: 17,
        condition: "m",
        phase: 1,
        stereotype: "male",
        role_noun: "Bürgermeister",
        question:
        _.sample(["Urbane Bürgermeister haben andere Prioritäten als jene auf dem Land. <br />	_____ legt das Hauptaugenmerk in der aktuellen Kampagne auf Innovation und Klimaschutz. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        "Urbane Bürgermeisterinnen haben andere Prioritäten als jene auf dem Land. <br />	_____ legt das Hauptaugenmerk in der aktuellen Kampagne auf Innovation und Klimaschutz. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        "Urbane BürgermeisterInnen haben andere Prioritäten als jene auf dem Land. <br />	_____ legt das Hauptaugenmerk in der aktuellen Kampagne auf Innovation und Klimaschutz. <br /> Bitte schreibe einen passenden Namen in das Feld."]),
        min_chars: 2
    },
    {
        item: 18,
        condition: "m",
        phase: 1,
        stereotype: "male",
        role_noun: "Mörder",
        question:
        _.sample(["Die erfolgreiche Festnahme von Mördern nimmt aufgrund technologischen Fortschritts immer weiter zu. <br />	_____ konnte aufgrund von Videoüberwachung und der Ortung seines Smartphones schnell verhaftet werde, bevor es ein neues Opfer gab. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        "Die erfolgreiche Festnahme von Mörderinnen nimmt aufgrund technologischen Fortschritts immer weiter zu. <br />	_____ konnte aufgrund von Videoüberwachung und der Ortung seines Smartphones schnell verhaftet werde, bevor es ein neues Opfer gab. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        "Die erfolgreiche Festnahme von MörderInnen nimmt aufgrund technologischen Fortschritts immer weiter zu. <br />	_____ konnte aufgrund von Videoüberwachung und der Ortung seines Smartphones schnell verhaftet werde, bevor es ein neues Opfer gab. <br /> Bitte schreibe einen passenden Namen in das Feld."]),
        min_chars: 2
    },
    {
        item: 19,
        condition: "m",
        phase: 1,
        stereotype: "male",
        role_noun: "Pilot",
        question:
        _.sample(["Weil Piloten beim Fliegen einer erhöhten Strahlung ausgesetzt sind, müssen sie früher in den Ruhestand. <br />		_____ geht Ende des Jahres bereits in Rente, während Gleichaltrige noch 8 Jahre in ihrem Job arbeiten müssen. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        "Weil Pilotinnen beim Fliegen einer erhöhten Strahlung ausgesetzt sind, müssen sie früher in den Ruhestand. <br />		_____ geht Ende des Jahres bereits in Rente, während Gleichaltrige noch 8 Jahre in ihrem Job arbeiten müssen. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        "Weil PilotInnen beim Fliegen einer erhöhten Strahlung ausgesetzt sind, müssen sie früher in den Ruhestand. <br />		_____ geht Ende des Jahres bereits in Rente, während Gleichaltrige noch 8 Jahre in ihrem Job arbeiten müssen. <br /> Bitte schreibe einen passenden Namen in das Feld."]),
        min_chars: 2
    },
    {
        item: 20,
        condition: "m",
        phase: 1,
        stereotype: "male",
        role_noun: "Präsident",
        question:
        _.sample(["Auf dem Weltklima-Gipfel versammeln sich unter anderem Präsidenten verschiedener Länder, um über eine politische Zusammenarbeit zu diskutieren. <br />	_____ ist für die Einführung einer einheitlichen, verpflichtenden CO2-Besteuerung. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        "Auf dem Weltklima-Gipfel versammeln sich unter anderem Präsidentinnen verschiedener Länder, um über eine politische Zusammenarbeit zu diskutieren. <br />	_____ ist für die Einführung einer einheitlichen, verpflichtenden CO2-Besteuerung. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        "Auf dem Weltklima-Gipfel versammeln sich unter anderem PräsidentInnen verschiedener Länder, um über eine politische Zusammenarbeit zu diskutieren. <br />	_____ ist für die Einführung einer einheitlichen, verpflichtenden CO2-Besteuerung. <br /> Bitte schreibe einen passenden Namen in das Feld."]),
        min_chars: 2
    },
    {
        item: 21,
        condition: "m",
        phase: 1,
        stereotype: "male",
        role_noun: "Privatdetektiv",
        question:
        _.sample(["Eine erfolgreiche TV-Serie berichtet über die spannende Arbeit von Privatdetektiven. <br />	_____ arbeitet schon seit langem in einer Detektei und ärgert sich über die unauthentische Darstellung des Berufes. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        "Eine erfolgreiche TV-Serie berichtet über die spannende Arbeit von Privatdetektivinnen. <br />	_____ arbeitet schon seit langem in einer Detektei und ärgert sich über die unauthentische Darstellung des Berufes. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        "Eine erfolgreiche TV-Serie berichtet über die spannende Arbeit von PrivatdetektivInnen. <br />	_____ arbeitet schon seit langem in einer Detektei und ärgert sich über die unauthentische Darstellung des Berufes. <br /> Bitte schreibe einen passenden Namen in das Feld."]),
        min_chars: 2
    },
    {
        item: 22,
        condition: "m",
        phase: 1,
        stereotype: "male",
        role_noun: "Soldat",
        question:
        _.sample(["In Deutschland dürfen Soldaten kostenlos die öffentlichen Verkehrsmittel nutzen. <br />	_____ besucht deshalb jede Woche die Familie. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        "In Deutschland dürfen Soldatinnen kostenlos die öffentlichen Verkehrsmittel nutzen. <br />	_____ besucht deshalb jede Woche die Familie. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        "In Deutschland dürfen SoldatInnen kostenlos die öffentlichen Verkehrsmittel nutzen. <br />	_____ besucht deshalb jede Woche die Familie. <br /> Bitte schreibe einen passenden Namen in das Feld."]),
        min_chars: 2
    },
    {
        item: 23,
        condition: "m",
        phase: 1,
        stereotype: "male",
        role_noun: "Chirurgen",
        question:
        _.sample(["Um während Operationen konzentriert zu bleiben, haben alle Chirurgen ihre ganz persönlichen Strategien. <br />	_____ hört gerne klassische Musik während eines Eingriffs. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        "Um während Operationen konzentriert zu bleiben, haben alle Chirurginnen ihre ganz persönlichen Strategien. <br />	_____ hört gerne klassische Musik während eines Eingriffs. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        "Um während Operationen konzentriert zu bleiben, haben alle ChirurgInnen ihre ganz persönlichen Strategien. <br />	_____ hört gerne klassische Musik während eines Eingriffs. <br /> Bitte schreibe einen passenden Namen in das Feld."]),
        min_chars: 2
    },
    {
        item: 24,
        condition: "m",
        phase: 1,
        stereotype: "male",
        role_noun: "Taxifahrer",
        question:
        _.sample(["Während einer Nachtschicht wird der Dienst von Taxifahrern hauptsächlich von Betrunkenen in Anspruch genommen. <br />	_____ arbeitet deswegen lieber tagsüber. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        "Während einer Nachtschicht wird der Dienst von Taxifahrerinnen hauptsächlich von Betrunkenen in Anspruch genommen. <br />	_____ arbeitet deswegen lieber tagsüber. <br /> Bitte schreibe einen passenden Namen in das Feld.",
        "Während einer Nachtschicht wird der Dienst von TaxifahrerInnen hauptsächlich von Betrunkenen in Anspruch genommen. <br />	_____ arbeitet deswegen lieber tagsüber. <br /> Bitte schreibe einen passenden Namen in das Feld."]),
        min_chars: 2
    },
    {
      item: 25,
      condition: "m",
      phase: 1,
      stereotype: "neutral",
      role_noun: "Künstler",
      question:
      _.sample(["Bei einer Vernissage stellen Künstler ihre aktuellen Werke vor. <br /> ___ präsentiert stolz eine neue Technik, die Gips und Sand auf eine einzigartige Art und Weise  miteinander verbindet. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      "Bei einer Vernissage stellen Künstlerinnen ihre aktuellen Werke vor. <br /> ___ präsentiert stolz eine neue Technik, die Gips und Sand auf eine einzigartige Art und Weise  miteinander verbindet. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      "Bei einer Vernissage stellen KünstlerInnen ihre aktuellen Werke vor. <br /> ___ präsentiert stolz eine neue Technik, die Gips und Sand auf eine einzigartige Art und Weise  miteinander verbindet. <br /> Bitte schreibe einen passenden Namen in das Feld."]),
      min_chars: 2
    },
    {
      item: 26,
      condition: "m",
      phase: 1,
      stereotype: "neutral",
      role_noun: "Sportler",
      question:
      _.sample(["Bei Olympia werden die besten Sportler mit einer Medaille gekürt. <br /> ___ erhält Gold in der Disziplin Schwimmen. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      "Bei Olympia werden die besten Sportlerinnen mit einer Medaille gekürt. <br /> ___ erhält Gold in der Disziplin Schwimmen. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      "Bei Olympia werden die besten SportlerInnen mit einer Medaille gekürt. <br /> ___ erhält Gold in der Disziplin Schwimmen. <br /> Bitte schreibe einen passenden Namen in das Feld."]),
      min_chars: 2
    },
    {
      item: 27,
      condition: "m",
      phase: 1,
      stereotype: "neutral",
      role_noun: "Hundehalter",
      question:
      _.sample(["Während der Corona-Pandemie hatten Hundehalter mehr Zeit für ihre Vierbeiner. <br /> ___ ging jeden Nachmittag ausgiebig mit dem Hund spazieren. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      "Während der Corona-Pandemie hatten Hundehalterinnen mehr Zeit für ihre Vierbeiner. <br /> ___ ging jeden Nachmittag ausgiebig mit dem Hund spazieren. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      "Während der Corona-Pandemie hatten HundehalterInnen mehr Zeit für ihre Vierbeiner. <br /> ___ ging jeden Nachmittag ausgiebig mit dem Hund spazieren. <br /> Bitte schreibe einen passenden Namen in das Feld."]),
      min_chars: 2
    },
    {
      item: 28,
      condition: "m",
      phase: 1,
      stereotype: "neutral",
      role_noun: "Immobilienmakler",
      question:
      _.sample(["Um die besten Angebote nicht zu verpassen, müssen Immobilienmakler täglich das Internet durchforsten. <br /> ___ hat allein heute 3 Stunden recherchiert. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      "Um die besten Angebote nicht zu verpassen, müssen Immobilienmaklerinnen täglich das Internet durchforsten. <br /> ___ hat allein heute 3 Stunden recherchiert. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      "Um die besten Angebote nicht zu verpassen, müssen ImmobilienmaklerInnen täglich das Internet durchforsten. <br /> ___ hat allein heute 3 Stunden recherchiert. <br /> Bitte schreibe einen passenden Namen in das Feld."]),
      min_chars: 2
    },
    {
      item: 29,
      condition: "m",
      phase: 1,
      stereotype: "neutral",
      role_noun: "Journalist",
      question:
      _.sample(["Ein Journalismus Studium zu beginnen, ist in Deutschland sehr schwierig, weshalb viele angehende Journalisten einen alternativen Bildungsweg einschlagen. <br /> ___ möchte sich trotzdem an der Universität in Berlin bewerben. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      "Ein Journalismus Studium zu beginnen, ist in Deutschland sehr schwierig, weshalb viele angehende Journalistinnen einen alternativen Bildungsweg einschlagen. <br /> ___ möchte sich trotzdem an der Universität in Berlin bewerben. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      "Ein Journalismus Studium zu beginnen, ist in Deutschland sehr schwierig, weshalb viele angehende JournalistInnen einen alternativen Bildungsweg einschlagen. <br /> ___ möchte sich trotzdem an der Universität in Berlin bewerben. <br /> Bitte schreibe einen passenden Namen in das Feld."]),
      min_chars: 2
    },
    {
      item: 30,
      condition: "m",
      phase: 1,
      stereotype: "neutral",
      role_noun: "Mieter",
      question:
      _.sample(["Wegen des Mietendeckels konnten viele Mieter während der Pandemie zu günstigen Mieten in den Wohnungen bleiben. <br /> ___ wurde jedoch kürzlich wegen Eigenbedarfs der Mietvertrag gekündigt. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      "Wegen des Mietendeckels konnten viele Mieterinnen während der Pandemie zu günstigen Mieten in den Wohnungen bleiben. <br /> ___ wurde jedoch kürzlich wegen Eigenbedarfs der Mietvertrag gekündigt. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      "Wegen des Mietendeckels konnten viele MieterInnen während der Pandemie zu günstigen Mieten in den Wohnungen bleiben. <br /> ___ wurde jedoch kürzlich wegen Eigenbedarfs der Mietvertrag gekündigt. <br /> Bitte schreibe einen passenden Namen in das Feld."]),
      min_chars: 2
    },
    {
      item: 31,
      condition: "m",
      phase: 1,
      stereotype: "neutral",
      role_noun: "Patient",
      question:
      _.sample(["In den Wintermonaten steigt die Anzahl der Patienten in den Arztpraxen stark an. <br /> ___ wartet schon seit Tagen auf einen Termin. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      "In den Wintermonaten steigt die Anzahl der Patientinnen in den Arztpraxen stark an. <br /> ___ wartet schon seit Tagen auf einen Termin. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      "In den Wintermonaten steigt die Anzahl der PatientInnen in den Arztpraxen stark an. <br /> ___ wartet schon seit Tagen auf einen Termin. <br /> Bitte schreibe einen passenden Namen in das Feld."]),
      min_chars: 2
    },
    {
      item: 32,
      condition: "m",
      phase: 1,
      stereotype: "neutral",
      role_noun: "Fotograf",
      question:
      _.sample(["Fotografen werden häufig für große Hochzeiten engagiert. <br /> ___ fotografiert dabei am liebsten spontane Momente, die nicht gestellt sind. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      "Fotografinnen werden häufig für große Hochzeiten engagiert. <br /> ___ fotografiert dabei am liebsten spontane Momente, die nicht gestellt sind. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      "FotografInnen werden häufig für große Hochzeiten engagiert. <br /> ___ fotografiert dabei am liebsten spontane Momente, die nicht gestellt sind. <br /> Bitte schreibe einen passenden Namen in das Feld."]),
      min_chars: 2
    },
    {
      item: 33,
      condition: "m",
      phase: 1,
      stereotype: "neutral",
      role_noun: "Mediziner",
      question:
      _.sample(["Als Mediziner trägt man eine große Verantwortung. <br /> ___ kontrolliert jedes Rezept, das ausgestellt wird mehrfach, um Fehler zu vermeiden. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      "Als Medizinerinnen trägt man eine große Verantwortung. <br /> ___ kontrolliert jedes Rezept, das ausgestellt wird mehrfach, um Fehler zu vermeiden. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      "Als MedizinerInnen trägt man eine große Verantwortung. <br /> ___ kontrolliert jedes Rezept, das ausgestellt wird mehrfach, um Fehler zu vermeiden. <br /> Bitte schreibe einen passenden Namen in das Feld."]),
      min_chars: 2
    },
    {
      item: 34,
      condition: "m",
      phase: 1,
      stereotype: "neutral",
      role_noun: "Aktivist",
      question:
      _.sample(["Die Relevanz von politischen Aktivisten nimmt immer mehr zu. <br /> ___ geht jede Woche auf die Straße, um für den Klimaschutz zu demonstrieren. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      "Die Relevanz von politischen Aktivistinnen nimmt immer mehr zu. <br /> ___ geht jede Woche auf die Straße, um für den Klimaschutz zu demonstrieren. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      "Die Relevanz von politischen AktivistInnen nimmt immer mehr zu. <br /> ___ geht jede Woche auf die Straße, um für den Klimaschutz zu demonstrieren. <br /> Bitte schreibe einen passenden Namen in das Feld."]),
      min_chars: 2
    },
    {
      item: 35,
      condition: "m",
      phase: 1,
      stereotype: "neutral",
      role_noun: "Psychiater",
      question:
      _.sample(["Eine eigene Praxis ist der Traum vieler Psychiater. <br /> ___ erhofft sich davon besonders flexible Arbeitszeiten. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      "Eine eigene Praxis ist der Traum vieler Psychiaterinnen. <br /> ___ erhofft sich davon besonders flexible Arbeitszeiten. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      "Eine eigene Praxis ist der Traum vieler PsychiaterInnen. <br /> ___ erhofft sich davon besonders flexible Arbeitszeiten. <br /> Bitte schreibe einen passenden Namen in das Feld."]),
      min_chars: 2
    },
    {
      item: 36,
      condition: "m",
      phase: 1,
      stereotype: "neutral",
      role_noun: "Student",
      question:
      _.sample(["Während der Pandemie vermissten die Studenten vor allem die Mensa. <br /> ___ geht jeden Tag essen, seit sie wieder geöffnet ist. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      "Während der Pandemie vermissten die Studentinnen vor allem die Mensa. <br /> ___ geht jeden Tag essen, seit sie wieder geöffnet ist. <br /> Bitte schreibe einen passenden Namen in das Feld.",
      "Während der Pandemie vermissten die StudentInnen vor allem die Mensa. <br /> ___ geht jeden Tag essen, seit sie wieder geöffnet ist. <br /> Bitte schreibe einen passenden Namen in das Feld."]),
      min_chars: 2
    },
]};



const forced_choice_3A_trials = {
  forced_choice:[
    {
      item: 1,
      phase: 3,
      stereotype:"female",
      role_noun: "BabysitterInnen",
      question: "<strong> BabysiterInnen </strong> <br /> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
      option1: "Männlich",
      option2: "Neutral",
      option3: "Weiblich"
    },
    {
        item: 2,
        phase: 3,
        stereotype:"female",
        role_noun: "BalletttänzerInnen",
        question: "<strong>BalletttänzerInnen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 3,
        phase: 3,
        stereotype:"female",
        role_noun: "KassiererInnen",
        question: "<strong>KassiererInnen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 4,
        phase: 3,
        stereotype:"female",
        role_noun: "ErnährungsberaterInnen",
        question: "<strong>ErnährungsberaterInnen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 5,
        phase: 3,
        stereotype:"female",
        role_noun: "FloristInnen",
        question: "<strong>FloristInnen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 6,
        phase: 3,
        stereotype:"female",
        role_noun: "FlugbegleiterInnen",
        question: "<strong>FlugbegleiterInnen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 7,
        phase: 3,
        stereotype:"female",
        role_noun: "FriseurInnen",
        question: "<strong>FriseurInnen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 8,
        phase: 3,
        stereotype:"female",
        role_noun: "HaushälterInnen",
        question: "<strong>HaushälterInnen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 9,
        phase: 3,
        stereotype:"female",
        role_noun: "KindergärtnerInnen",
        question: "<strong>KindergärtnerInnen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 10,
        phase: 3,
        stereotype:"female",
        role_noun: "GrundschullehrerInnen",
        question: "<strong>GrundschullehrerInnen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 11,
        phase: 3,
        stereotype:"female",
        role_noun: "AutorInnen von Liebesromanen",
        question: "<strong>AutorInnen von Liebesromanen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 12,
        phase: 3,
        stereotype:"female",
        role_noun: "SchneiderInnen",
        question: "<strong>SchneiderInnen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 13,
        phase: 3,
        stereotype:"male",
        role_noun: "AstronautInnen",
        question: "<strong>AstronautInnen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 14,
        phase: 3,
        stereotype:"male",
        role_noun: "MetzgerInnen",
        question: "<strong>MetzgerInnen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 15,
        phase: 3,
        stereotype:"male",
        role_noun: "ProgrammiererInnen",
        question: "<strong>ProgrammiererInnen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 16,
        phase: 3,
        stereotype:"male",
        role_noun: "ManagerInnen",
        question: "<strong>ManagerInnen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 17,
        phase: 3,
        stereotype:"male",
        role_noun: "BürgermeisterInnen",
        question: "<strong>BürgermeisterInnen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 18,
        phase: 3,
        stereotype:"male",
        role_noun: "MörderInnen",
        question: "<strong>MörderInnen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 19,
        phase: 3,
        stereotype:"male",
        role_noun: "PilotInnen",
        question: "<strong>PilotInnen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 20,
        phase: 3,
        stereotype:"male",
        role_noun: "PräsidentInnen",
        question: "<strong>PräsidentInnen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 21,
        phase: 3,
        stereotype:"male",
        role_noun: "PrivatdetektivInnen",
        question: "<strong>PrivatdetektivInnen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 22,
        phase: 3,
        stereotype:"male",
        role_noun: "SoldatInnen",
        question: "<strong>SoldatInnen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 23,
        phase: 3,
        stereotype:"male",
        role_noun: "ChirgurInnen",
        question: "<strong>ChirgurInnen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 24,
        phase: 3,
        stereotype:"male",
        role_noun: "TaxifahrerInnen",
        question: "<strong>TaxifahrerInnen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 25,
        phase: 3,
        stereotype:"neutral",
        role_noun: "KünstlerInnen",
        question: "<strong>KünstlerInnen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 26,
        phase: 3,
        stereotype:"neutral",
        role_noun: "SportlerInnen",
        question: "<strong>SportlerInnen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 27,
        phase: 3,
        stereotype:"neutral",
        role_noun: "HundehalterInnen",
        question: "<strong>HundehalterInnen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 28,
        phase: 3,
        stereotype:"neutral",
        role_noun: "ImmobilienmaklerInnen",
        question: "<strong>ImmobilienmaklerInnen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 29,
        phase: 3,
        stereotype:"neutral",
        role_noun: "JournalistInnen",
        question: "<strong>JournalistInnen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 30,
        phase: 3,
        stereotype:"neutral",
        role_noun: "MieterInnen",
        question: "<strong>MieterInnen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 31,
        phase: 3,
        stereotype:"neutral",
        role_noun: "PatientInnen",
        question: "<strong>PatientInnen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 32,
        phase: 3,
        stereotype:"neutral",
        role_noun: "FotografInnen",
        question: "<strong>FotografInnen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 33,
        phase: 3,
        stereotype:"neutral",
        role_noun: "MedizinerInnen",
        question: "<strong>MedizinierInnen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 34,
        phase: 3,
        stereotype:"neutral",
        role_noun: "politische AktivistInnen",
        question: "<strong>politische AktivistInnen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 35,
        phase: 3,
        stereotype:"neutral",
        role_noun: "PsychiaterInnen",
        question: "<strong>PsychiaterInnen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 36,
        phase: 3,
        stereotype:"neutral",
        role_noun: "StudentInnen",
        question: "<strong>StudentInnen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
]};

const forced_choice_2A_trial_new = _.shuffle(create_forced_choice_2A_trials(textbox_input_trials));
