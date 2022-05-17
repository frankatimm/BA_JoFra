// In this file you can specify the trial data for your experiment


//Phase 1 --- FILLER SENTENCES
//filler sentences with textbox input
//item: assigns number to each role noun
        //range from 1 to 36
//phase: declares the phase of the complete experiment
        //phase1
//stereotype: declares stereoptype of corresponding role noun
        // stereotype is either "male","female" or "neutral"
//role_noun: declares role noun in question
      //role nouns are represented in the gender neutral form
//question: random selection of three options to guarantee that each role noun appears only once per participant
      //either the male generic, the female generic or the gender neutral sentence
//min_chars: participant has to enter at least 2 letters in order to be allowed to proceed with the experiment

const textbox_input_trials = {
  textbox_input_Babysitter: [
    {
      item: 1,
      phase: 1,
      stereotype: "female",
      condition: "male",
      role_noun: "Babysitter*innen",
      question:"Babysitter werden trotz fehlender Kitaplätze immer schlechter bezahlt. <br /> ____________ möchte sich deshalb einen neuen Job suchen.<br /> <br /> Bitte schreibe einen passenden Namen in das Feld.",
      min_chars: 2
    },
    {
      item: 1,
      phase: 1,
      stereotype: "female",
      condition: "female",
      role_noun: "Babysitter*innen",
      question:"Babysitterinnen werden trotz fehlender Kitaplätze immer schlechter bezahlt. <br /> ____________ möchte sich deshalb einen neuen Job suchen.<br /> <br /> Bitte schreibe einen passenden Namen in das Feld.",
      min_chars: 2
    },
    {
      item: 1,
      phase: 1,
      stereotype: "female",
      condition: "gender-neutral",
      role_noun: "Babysitter*innen",
      question:"Babysitter*innen werden trotz fehlender Kitaplätze immer schlechter bezahlt. <br /> ____________ möchte sich deshalb einen neuen Job suchen.<br /> <br /> Bitte schreibe einen passenden Namen in das Feld.",
      min_chars: 2
    },
  ],

  textbox_input_Baletttänzer: [
    {
      item: 2,
      phase: 1,
      stereotype: "female",
      condition: "male",
      role_noun: "Baletttänzer*innen",
      question:"Die Balletttänzer der Kompanie haben ihre Generalprobe auf der großen Bühne. <br /> ____________ verletzt sich dabei am Bein. <br /> <br />Bitte schreibe einen passenden Namen in das Feld.",
      min_chars: 2
    },
    {
      item: 2,
      phase: 1,
      stereotype: "female",
      condition: "female",
      role_noun: "Baletttänzer*innen",
      question:"Die Balletttänzerinnen der Kompanie haben ihre Generalprobe auf der großen Bühne. <br /> ____________ verletzt sich dabei am Bein. <br /> <br />Bitte schreibe einen passenden Namen in das Feld.",
      min_chars: 2
    },
    {
      item: 2,
      phase: 1,
      stereotype: "female",
      condition: "gender-neutral",
      role_noun: "Baletttänzer*innen",
      question:"Die Balletttänzer*innen der Kompanie haben ihre Generalprobe auf der großen Bühne. <br /> ____________ verletzt sich dabei am Bein. <br /> <br />Bitte schreibe einen passenden Namen in das Feld.",
      min_chars: 2
    },
  ],

  textbox_input_Kassierer: [
        {
            item: 3,
            phase: 1,
            stereotype: "female",
            condition: "male",
            role_noun: "Kassierer*innen",
            question:"Der Arbeitsalltag von Kassierern ist sehr anstrengend. <br /> __________ muss jeden Morgen um fünf Uhr aufstehen. <br /> <br />Bitte schreibe einen passenden Namen in das Feld.",
            min_chars: 2
        },
        {
            item: 3,
            phase: 1,
            stereotype: "female",
            condition: "female",
            role_noun: "Kassierer*innen",
            question:"Der Arbeitsalltag von Kassiererinnen ist sehr anstrengend. <br /> ____________ muss jeden Morgen um fünf Uhr aufstehen. <br /> <br />Bitte schreibe einen passenden Namen in das Feld.",
            min_chars: 2
        },
        {
            item: 3,
            phase: 1,
            stereotype: "female",
            condition: "gender-neutral",
            role_noun: "Kassierer*innen",
            question:"Der Arbeitsalltag von Kassierer*innen ist sehr anstrengend. <br /> __________ muss jeden Morgen um fünf Uhr aufstehen. <br /> <br />Bitte schreibe einen passenden Namen in das Feld.",
            min_chars: 2
        },
  ],
  textbox_input_Ernährungsberater: [
    {
            item: 4,
            phase: 1,
            stereotype: "female",
            condition: "male",
            role_noun: "Ernährungsberater*innen",
            question:"Ernährungsberater empfehlen die Einnahme von Vitaminpräparaten. <br />__________ hält Vitamin D im Winter für besonders wichtig. <br /> <br /> Bitte schreibe einen passenden Namen in das Feld.",
            min_chars: 2
      },
      {
              item: 4,
              phase: 1,
              stereotype: "female",
              condition: "female",
              role_noun: "Ernährungsberater*innen",
              question:"Ernährungsberaterinnen empfehlen die Einnahme von Vitaminpräparaten. <br />__________ hält Vitamin D im Winter für besonders wichtig. <br /> <br /> Bitte schreibe einen passenden Namen in das Feld.",
              min_chars: 2
        },
        {
                item: 4,
                phase: 1,
                stereotype: "female",
                condition: "gender-neutral",
                role_noun: "Ernährungsberater*innen",
                question:"Ernährungsberater*innen empfehlen die Einnahme von Vitaminpräparaten. <br />___________ hält Vitamin D im Winter für besonders wichtig. <br /> <br /> Bitte schreibe einen passenden Namen in das Feld.",
                min_chars: 2
          },
    ],

    textbox_input_Floristen: [
      {
              item: 5,
              phase: 1,
              stereotype: "female",
              condition: "male",
              role_noun: "Florist*innen",
              question:"Wenn die Jahreszeiten wechseln, müssen Floristen die ganze Gärtnerei neu dekorieren. <br /> __________ liebt vor allem die Herbstdekoration. <br /> <br /> Bitte schreibe einen passenden Namen in das Feld.",
              min_chars: 2
      },
      {
              item: 5,
              phase: 1,
              stereotype: "female",
              condition: "female",
              role_noun: "Florist*innen",
              question:"Wenn die Jahreszeiten wechseln, müssen Floristinnen die ganze Gärtnerei neu dekorieren. <br /> __________ liebt vor allem die Herbstdekoration. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
              min_chars: 2
      },
      {
              item: 5,
              phase: 1,
              stereotype: "female",
              condition: "gender-neutral",
              role_noun: "Florist*innen",
              question:"Wenn die Jahreszeiten wechseln, müssen Florist*innen die ganze Gärtnerei neu dekorieren. <br /> ___________ liebt vor allem die Herbstdekoration. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
              min_chars: 2
      },
    ],

  textbox_input_Flugbegleiter: [
    {
            item: 6,
            phase: 1,
            stereotype: "female",
            condition: "male",
            role_noun: "Flugbegleiter*innen",
            question:"Im Gegensatz zu allen Fluggästen mögen Flugbegleiter keinen Tomatensaft.<br /> __________ bevorzugt Orangensaft während einer langen Flugreise. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
            min_chars: 2
      },
      {
              item: 6,
              phase: 1,
              stereotype: "female",
              condition: "female",
              role_noun: "Flugbegleiter*innen",
              question:"Im Gegensatz zu allen Fluggästen mögen Flugbegleiterinnen keinen Tomatensaft.<br /> ___________ bevorzugt Orangensaft während einer langen Flugreise. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
              min_chars: 2
        },
        {
                item: 6,
                phase: 1,
                stereotype: "female",
                condition: "gender-neutral",
                role_noun: "Flugbegleiter*innen",
                question:"Im Gegensatz zu allen Fluggästen mögen Flugbegleiter*innen keinen Tomatensaft.<br /> ___________ bevorzugt Orangensaft während einer langen Flugreise. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
                min_chars: 2
          },
  ],

  textbox_input_Friseure: [
    {
            item: 7,
            phase: 1,
            stereotype: "female",
            condition: "male",
            role_noun: "Friseur*innen",
            question:"Bei den ganzen neuen Trends kommen Friseure kaum noch hinterher.<br /> __________ schneidet am liebsten klassische Frisuren. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
            min_chars: 2
      },
      {
              item: 7,
              phase: 1,
              stereotype: "female",
              condition: "female",
              role_noun: "Friseur*innen",
              question:"Bei den ganzen neuen Trends kommen Friseurinnen kaum noch hinterher.<br /> __________ schneidet am liebsten klassische Frisuren. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
              min_chars: 2
        },
        {
                item: 7,
                phase: 1,
                stereotype: "female",
                condition: "gender-neutral",
                role_noun: "Friseur*innen",
                question:"Bei den ganzen neuen Trends kommen Friseur*innen kaum noch hinterher.<br /> ___________ schneidet am liebsten klassische Frisuren. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
                min_chars: 2
          },
  ],

  textbox_input_Haushälter: [
    {
            item: 8,
            phase: 1,
            stereotype: "female",
            condition: "male",
            role_noun: "Haushälter*innen",
            question:"Viele Haushälter kümmern sich neben dem Haushalt auch um das seelische Wohl ihrer Vorgesetzten.<br /> ___________ hat immer ein offenes Ohr, wenn die Kinder Probleme in der Schule haben. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
            min_chars: 2
      },
      {
              item: 8,
              phase: 1,
              stereotype: "female",
              condition: "female",
              role_noun: "Haushälter*innen",
              question:"Viele Haushälterinnen kümmern sich neben dem Haushalt auch um das seelische Wohl ihrer Vorgesetzten.<br /> ___________ hat immer ein offenes Ohr, wenn die Kinder Probleme in der Schule haben. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
              min_chars: 2
        },
        {
                item: 8,
                phase: 1,
                stereotype: "female",
                condition: "gender-neutral",
                role_noun: "Haushälter*innen",
                question:"Viele Haushälter*innen kümmern sich neben dem Haushalt auch um das seelische Wohl ihrer Vorgesetzten.<br /> ___________ hat immer ein offenes Ohr, wenn die Kinder Probleme in der Schule haben. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
                min_chars: 2
          },
  ],

  textbox_input_Kindergärtner: [
        {
            item: 9,
            phase: 1,
            stereotype: "female",
            condition: "male",
            role_noun: "Kindergärtner*innen",
            question:"Nach dem Feierabend genießen die Kindergärtner die Ruhe von ihren kleinen Schützlingen.<br /> ___________ geht nach der Arbeit eine Runde joggen, um den Kopf freizubekommen. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
            min_chars: 2
        },
        {
            item: 9,
            phase: 1,
            stereotype: "female",
            condition: "female",
            role_noun: "Kindergärtner*innen",
            question:"Nach dem Feierabend genießen die Kindergärtnerinnen die Ruhe von ihren kleinen Schützlingen.<br /> ___________ geht nach der Arbeit eine Runde joggen, um den Kopf freizubekommen. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
            min_chars: 2
        },
        {
            item: 9,
            phase: 1,
            stereotype: "female",
            condition: "gender-neutral",
            role_noun: "Kindergärtner*innen",
            question:"Nach dem Feierabend genießen die Kindergärtner*innen die Ruhe von ihren kleinen Schützlingen.<br /> ___________ geht nach der Arbeit eine Runde joggen, um den Kopf freizubekommen. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
            min_chars: 2
        },
  ],

  textbox_input_Grundschullehrer: [
        {
            item: 10,
            phase: 1,
            stereotype: "female",
            condition: "male",
            role_noun: "Grundschullehrer*innen",
            question:"Um den Unterricht möglichst abwechslungsreich zu gestalten, nutzen Grundschullehrer gerne verschiedene Medien.<br /> __________ verwendet am liebsten das Whiteboard, um Inhalte zu visualisieren. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
            min_chars: 2
        },
        {
            item: 10,
            phase: 1,
            stereotype: "female",
            condition: "female",
            role_noun: "Grundschullehrer*innen",
            question:"Um den Unterricht möglichst abwechslungsreich zu gestalten, nutzen Grundschullehrerinnen gerne verschiedene Medien.<br /> __________ verwendet am liebsten das Whiteboard, um Inhalte zu visualisieren. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
            min_chars: 2
        },
        {
            item: 10,
            phase: 1,
            stereotype: "female",
            condition: "gender-neutral",
            role_noun: "Grundschullehrer*innen",
            question:"Um den Unterricht möglichst abwechslungsreich zu gestalten, nutzen Grundschullehrer*innen gerne verschiedene Medien.<br /> ___________ verwendet am liebsten das Whiteboard, um Inhalte zu visualisieren. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
            min_chars: 2
        },
  ],

  textbox_input_Autoren: [
        {
            item: 11,
            phase: 1,
            stereotype: "female",
            condition: "male",
            role_noun: "Autor*innen von Liebesromanen",
            question:"Autoren von Liebesromanen wird oft ein Hang zur Dramatik nachgesagt.<br /> ___________ lässt Geschichten deshalb stets mit einem Happy End enden. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
            min_chars: 2
        },
        {
            item: 11,
            phase: 1,
            stereotype: "female",
            condition: "female",
            role_noun: "Autor*innen von Liebesromanen",
            question:"Autorinnen von Liebesromanen wird oft ein Hang zur Dramatik nachgesagt.<br /> ___________ lässt Geschichten deshalb stets mit einem Happy End enden. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
            min_chars: 2
        },
        {
            item: 11,
            phase: 1,
            stereotype: "female",
            condition: "gender-neutral",
            role_noun: "Autor*innen von Liebesromanen",
            question:"Autor*innen von Liebesromanen wird oft ein Hang zur Dramatik nachgesagt.<br /> ___________ lässt Geschichten deshalb stets mit einem Happy End enden. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
            min_chars: 2
        },
  ],

  textbox_input_Schneider: [
        {
            item: 12,
            phase: 1,
            stereotype: "female",
            condition: "male",
            role_noun: "Schneider*innen",
            question:"Die Fast-Fashion Industrie sorgt dafür, dass Schneider kaum noch Aufträge bekommen. <br /> __________ sucht daher nach einem Nebenjob, um die Miete bezahlen zu können. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
            min_chars: 2
        },
        {
            item: 12,
            phase: 1,
            stereotype: "female",
            condition: "female",
            role_noun: "Schneider*innen",
            question:"Die Fast-Fashion Industrie sorgt dafür, dass Schneiderinnen kaum noch Aufträge bekommen. <br /> __________ sucht daher nach einem Nebenjob, um die Miete bezahlen zu können. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
            min_chars: 2
        },
        {
            item: 12,
            phase: 1,
            stereotype: "female",
            condition: "gender-neutral",
            role_noun: "Schneider*innen",
            question:"Die Fast-Fashion Industrie sorgt dafür, dass Schneider*innen kaum noch Aufträge bekommen. <br /> __________ sucht daher nach einem Nebenjob, um die Miete bezahlen zu können. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
            min_chars: 2
        },
  ],

textbox_input_Astronauten: [
      {
          item: 13,
          phase: 1,
          stereotype: "male",
          condition: "male",
          role_noun: "Astronaut*innen",
          question:"Um sich auf die Zeit im All vorzubereiten, müssen Astronauten eine spezielle Schulung durchlaufen. <br /> __________ fällt es schwer, sich an die Trockennahrung zu gewöhnen. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
          min_chars: 2
      },
      {
          item: 13,
          phase: 1,
          stereotype: "male",
          condition: "female",
          role_noun: "Astronaut*innen",
          question:"Um sich auf die Zeit im All vorzubereiten, müssen Astronautinnen eine spezielle Schulung durchlaufen. <br /> __________ fällt es schwer, sich an die Trockennahrung zu gewöhnen. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
          min_chars: 2
      },
      {
          item: 13,
          phase: 1,
          stereotype: "male",
          condition: "gender-neutral",
          role_noun: "Astronaut*innen",
          question:"Um sich auf die Zeit im All vorzubereiten, müssen Astronaut*innen eine spezielle Schulung durchlaufen. <br /> __________ fällt es schwer, sich an die Trockennahrung zu gewöhnen. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
          min_chars: 2
      },
],

textbox_input_Metzger: [
      {
          item: 14,
          phase: 1,
          stereotype: "male",
          condition: "male",
          role_noun: "Metzger*innen",
          question:"Seit einiger Zeit nehmen Metzger auch vegetarische Produkte in ihr Sortiment auf. <br /> __________ bietet jetzt auch Gemüsefrikadellen an der Frischetheke an. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
          min_chars: 2
      },
      {
          item: 14,
          phase: 1,
          stereotype: "male",
          condition: "female",
          role_noun: "Metzger*innen",
          question:"Seit einiger Zeit nehmen Metzgerinnen auch vegetarische Produkte in ihr Sortiment auf. <br /> __________ bietet jetzt auch Gemüsefrikadellen an der Frischetheke an. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
          min_chars: 2
      },
      {
          item: 14,
          phase: 1,
          stereotype: "male",
          condition: "gender-neutral",
          role_noun: "Metzger*innen",
          question:"Seit einiger Zeit nehmen Metzger*innen auch vegetarische Produkte in ihr Sortiment auf. <br /> __________ bietet jetzt auch Gemüsefrikadellen an der Frischetheke an. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
          min_chars: 2
      },
],

textbox_input_Programmierer: [
      {
          item: 15,
          phase: 1,
          stereotype: "male",
          condition: "male",
          role_noun: "Programmierer*innen",
          question:"Ein leistungsstarker Computer ist ausschlaggebend für die Arbeit von Programmierern. <br /> __________ installiert regelmäßig die neuesten Softwareupdates, um nicht von der Konkurrenz abgehängt zu werden. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
          min_chars: 2
      },
      {
          item: 15,
          phase: 1,
          stereotype: "male",
          condition: "female",
          role_noun: "Programmierer*innen",
          question:"Ein leistungsstarker Computer ist ausschlaggebend für die Arbeit von Programmiererinnen. <br /> __________ installiert regelmäßig die neuesten Softwareupdates, um nicht von der Konkurrenz abgehängt zu werden. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
          min_chars: 2
      },
      {
          item: 15,
          phase: 1,
          stereotype: "male",
          condition: "gender-neutral",
          role_noun: "Programmierer*innen",
          question:"Ein leistungsstarker Computer ist ausschlaggebend für die Arbeit von Programmierer*innen. <br /> __________ installiert regelmäßig die neuesten Softwareupdates, um nicht von der Konkurrenz abgehängt zu werden. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
          min_chars: 2
      },
],

textbox_input_Manager: [
      {
          item: 16,
          phase: 1,
          stereotype: "male",
          condition: "male",
          role_noun: "Manager*innen",
          question:"Organisation und Führungsstärke gehören zu den wichtigsten Merkmalen von Managern. <br /> __________ legt trotzdem viel Wert auf ein freundliches Arbeitsklima im Büro. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
          min_chars: 2
      },
      {
          item: 16,
          phase: 1,
          stereotype: "male",
          condition: "female",
          role_noun: "Manager*innen",
          question:"Organisation und Führungsstärke gehören zu den wichtigsten Merkmalen von Managerinnen. <br /> __________ legt trotzdem viel Wert auf ein freundliches Arbeitsklima im Büro. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
          min_chars: 2
      },
      {
          item: 16,
          phase: 1,
          stereotype: "male",
          condition: "gender-neutral",
          role_noun: "Manager*innen",
          question:"Organisation und Führungsstärke gehören zu den wichtigsten Merkmalen von Manager*innen. <br /> __________ legt trotzdem viel Wert auf ein freundliches Arbeitsklima im Büro. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
          min_chars: 2
      },
],

textbox_input_Bürgermeister: [
      {
          item: 17,
          phase: 1,
          stereotype: "male",
          condition: "male",
          role_noun: "Bürgermeister*innen",
          question:"Urbane Bürgermeister haben andere Prioritäten als jene auf dem Land. <br />	__________ legt das Hauptaugenmerk in der aktuellen Kampagne auf Innovation und Klimaschutz. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
          min_chars: 2
      },
      {
          item: 17,
          phase: 1,
          stereotype: "male",
          condition: "female",
          role_noun: "Bürgermeister*innen",
          question:"Urbane Bürgermeisterinnen haben andere Prioritäten als jene auf dem Land. <br />	__________ legt das Hauptaugenmerk in der aktuellen Kampagne auf Innovation und Klimaschutz. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
          min_chars: 2
      },
      {
          item: 17,
          phase: 1,
          stereotype: "male",
          condition: "gender-neutral",
          role_noun: "Bürgermeister*innen",
          question:"Urbane Bürgermeister*innen haben andere Prioritäten als jene auf dem Land. <br />	__________ legt das Hauptaugenmerk in der aktuellen Kampagne auf Innovation und Klimaschutz. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
          min_chars: 2
      },
],

textbox_input_Mörder: [
      {
          item: 18,
          phase: 1,
          stereotype: "male",
          condition: "male",
          role_noun: "Mörder*innen",
          question:"Die erfolgreiche Festnahme von Mördern nimmt aufgrund technologischen Fortschritts immer weiter zu. <br />	__________ konnte aufgrund von Videoüberwachung und der Ortung des Smartphones schnell verhaftet werden, bevor es ein neues Opfer gab. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
          min_chars: 2
      },
      {
          item: 18,
          phase: 1,
          stereotype: "male",
          condition: "female",
          role_noun: "Mörder*innen",
          question:"Die erfolgreiche Festnahme von Mörderinnen nimmt aufgrund technologischen Fortschritts immer weiter zu. <br />	__________ konnte aufgrund von Videoüberwachung und der Ortung des Smartphones schnell verhaftet werden, bevor es ein neues Opfer gab. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
          min_chars: 2
      },
      {
          item: 18,
          phase: 1,
          stereotype: "male",
          condition: "gender-neutral",
          role_noun: "Mörder*innen",
          question:"Die erfolgreiche Festnahme von Mörder*innen nimmt aufgrund technologischen Fortschritts immer weiter zu. <br />	__________ konnte aufgrund von Videoüberwachung und der Ortung des Smartphones schnell verhaftet werden, bevor es ein neues Opfer gab. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
          min_chars: 2
      },
],

textbox_input_Piloten: [
    {
        item: 19,
        phase: 1,
        stereotype: "male",
        condition: "male",
        role_noun: "Pilot*innen",
        question: "Weil Piloten beim Fliegen einer erhöhten Strahlung ausgesetzt sind, müssen sie früher in den Ruhestand. <br />		____ geht Ende des Jahres bereits in Rente, während Gleichaltrige noch 8 Jahre in ihrem Job arbeiten müssen. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 19,
        phase: 1,
        stereotype: "male",
        condition: "female",
        role_noun: "Pilot*innen",
        question: "Weil Pilotinnen beim Fliegen einer erhöhten Strahlung ausgesetzt sind, müssen sie früher in den Ruhestand. <br />		____ geht Ende des Jahres bereits in Rente, während Gleichaltrige noch 8 Jahre in ihrem Job arbeiten müssen. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 19,
        phase: 1,
        stereotype: "male",
        condition: "gender-neutral",
        role_noun: "Pilot*innen",
        question: "Weil Pilot*innen beim Fliegen einer erhöhten Strahlung ausgesetzt sind, müssen sie früher in den Ruhestand. <br />		____ geht Ende des Jahres bereits in Rente, während Gleichaltrige noch 8 Jahre in ihrem Job arbeiten müssen. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
  ],

  textbox_input_Präsidenten: [
    {
        item: 20,
        phase: 1,
        stereotype: "male",
        condition: "male",
        role_noun: "Präsident*innen",
        question: "Auf dem Weltklima-Gipfel versammeln sich unter anderem Präsidenten verschiedener Länder, um über eine politische Zusammenarbeit zu diskutieren. <br />	____ ist für die Einführung einer einheitlichen, verpflichtenden CO2-Besteuerung. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 20,
        phase: 1,
        stereotype: "male",
        condition: "female",
        role_noun: "Präsident*innen",
        question: "Auf dem Weltklima-Gipfel versammeln sich unter anderem Präsidentinnen verschiedener Länder, um über eine politische Zusammenarbeit zu diskutieren. <br />	____ ist für die Einführung einer einheitlichen, verpflichtenden CO2-Besteuerung. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 20,
        phase: 1,
        stereotype: "male",
        condition: "gender-neutral",
        role_noun: "Präsident*innen",
        question: "Auf dem Weltklima-Gipfel versammeln sich unter anderem Präsident*innen verschiedener Länder, um über eine politische Zusammenarbeit zu diskutieren. <br />	____ ist für die Einführung einer einheitlichen, verpflichtenden CO2-Besteuerung. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
  ],

  textbox_input_Privatdetektive: [
    {
        item: 21,
        phase: 1,
        stereotype: "male",
        condition: "male",
        role_noun: "Privatdetektiv*innen",
        question: "Eine erfolgreiche TV-Serie berichtet über die spannende Arbeit von Privatdetektiven. <br />	____ arbeitet schon seit langem in einer Detektei und ärgert sich über die unauthentische Darstellung des Berufes. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 21,
        phase: 1,
        stereotype: "male",
        condition: "female",
        role_noun: "Privatdetektiv*innen",
        question: "Eine erfolgreiche TV-Serie berichtet über die spannende Arbeit von Privatdetektivinnen. <br />	____ arbeitet schon seit langem in einer Detektei und ärgert sich über die unauthentische Darstellung des Berufes. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 21,
        phase: 1,
        stereotype: "male",
        condition: "gender-neutral",
        role_noun: "Privatdetektiv*innen",
        question: "Eine erfolgreiche TV-Serie berichtet über die spannende Arbeit von Privatdetektiv*innen. <br />	____ arbeitet schon seit langem in einer Detektei und ärgert sich über die unauthentische Darstellung des Berufes. <br /><br /> Bitte schreibe einen passenden Namen in das Feld."
        min_chars: 2
    },
  ],

  textbox_input_Soldaten: [
    {
        item: 22,
        phase: 1,
        stereotype: "male",
        condition: "male",
        role_noun: "Soldat*innen",
        question: "In Deutschland dürfen Soldaten kostenlos die öffentlichen Verkehrsmittel nutzen. <br />	____ besucht deshalb jede Woche die Familie. <br /> <br />Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 22,
        phase: 1,
        stereotype: "male",
        condition: "female",
        role_noun: "Soldat*innen",
        question: "In Deutschland dürfen Soldatinnen kostenlos die öffentlichen Verkehrsmittel nutzen. <br />	____ besucht deshalb jede Woche die Familie. <br /> <br />Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 22,
        phase: 1,
        stereotype: "male",
        condition: "gender-neutral",
        role_noun: "Soldat*innen",
        question: "In Deutschland dürfen Soldat*innen kostenlos die öffentlichen Verkehrsmittel nutzen. <br />	____ besucht deshalb jede Woche die Familie. <br /> <br />Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
  ],

  textbox_input_Chirurgen: [
    {
        item: 23,
        phase: 1,
        stereotype: "male",
        condition: "male",
        role_noun: "Chirurg*innen",
        question: "Um während Operationen konzentriert zu bleiben, haben alle Chirurgen ihre ganz persönlichen Strategien. <br />	____ hört gerne klassische Musik während eines Eingriffs. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 23,
        phase: 1,
        stereotype: "male",
        condition: "female",
        role_noun: "Chirurg*innen",
        question: "Um während Operationen konzentriert zu bleiben, haben alle Chirurginnen ihre ganz persönlichen Strategien. <br />	____ hört gerne klassische Musik während eines Eingriffs. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 23,
        phase: 1,
        stereotype: "male",
        condition: "gender-neutral",
        role_noun: "Chirurg*innen",
        question: "Um während Operationen konzentriert zu bleiben, haben alle Chirurg*innen ihre ganz persönlichen Strategien. <br />	____ hört gerne klassische Musik während eines Eingriffs. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
  ],

  textbox_input_Taxifahrer: [
    {
        item: 24,
        phase: 1,
        stereotype: "male",
        condition: "male",
        role_noun: "Taxifahrer*innen",
        question: "Während einer Nachtschicht wird der Dienst von Taxifahrern hauptsächlich von Betrunkenen in Anspruch genommen. <br />	____ arbeitet deswegen lieber tagsüber. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 24,
        phase: 1,
        stereotype: "male",
        condition: "female",
        role_noun: "Taxifahrer*innen",
        question: "Während einer Nachtschicht wird der Dienst von Taxifahrerinnen hauptsächlich von Betrunkenen in Anspruch genommen. <br />	____ arbeitet deswegen lieber tagsüber. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 24,
        phase: 1,
        stereotype: "male",
        condition: "gender-neutral",
        role_noun: "Taxifahrer*innen",
        question: "Während einer Nachtschicht wird der Dienst von Taxifahrer*innen hauptsächlich von Betrunkenen in Anspruch genommen. <br />	____ arbeitet deswegen lieber tagsüber. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
  ],

  textbox_input_Künstler: [
    {
        item: 25,
        phase: 1,
        stereotype: "neutral",
        condition: "male",
        role_noun: "Künstler*innen",
        question: "Bei einer Vernissage stellen Künstler ihre aktuellen Werke vor. <br /> ____ präsentiert stolz eine neue Technik, die Gips und Sand auf eine einzigartige Art und Weise  miteinander verbindet. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 25,
        phase: 1,
        stereotype: "neutral",
        condition: "female",
        role_noun: "Künstler*innen",
        question: "Bei einer Vernissage stellen Künstlerinnen ihre aktuellen Werke vor. <br /> ____ präsentiert stolz eine neue Technik, die Gips und Sand auf eine einzigartige Art und Weise  miteinander verbindet. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 25,
        phase: 1,
        stereotype: "neutral",
        condition: "gender-neutral",
        role_noun: "Künstler*innen",
        question: "Bei einer Vernissage stellen Künstler*innen ihre aktuellen Werke vor. <br /> ____ präsentiert stolz eine neue Technik, die Gips und Sand auf eine einzigartige Art und Weise  miteinander verbindet. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
  ],

  textbox_input_Sportler: [
    {
        item: 26,
        phase: 1,
        stereotype: "neutral",
        condition: "male",
        role_noun: "Sportler*innen",
        question: "Bei Olympia werden die besten Sportler mit einer Medaille gekürt. <br /> ____ erhält Gold in der Disziplin Schwimmen. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 26,
        phase: 1,
        stereotype: "neutral",
        condition: "female",
        role_noun: "Sportler*innen",
        question: "Bei Olympia werden die besten Sportlerinnen mit einer Medaille gekürt. <br /> ____ erhält Gold in der Disziplin Schwimmen. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 26,
        phase: 1,
        stereotype: "neutral",
        condition: "gender-neutral",
        role_noun: "Sportler*innen",
        question: "Bei Olympia werden die besten Sportler*innen mit einer Medaille gekürt. <br /> ____ erhält Gold in der Disziplin Schwimmen. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
  ],

  textbox_input_Hundehalter: [
    {
        item: 27,
        phase: 1,
        stereotype: "neutral",
        condition: "male",
        role_noun: "Hundehalter*innen",
        question: "Während der Corona-Pandemie hatten Hundehalter mehr Zeit für ihre Vierbeiner. <br /> ____ ging jeden Nachmittag ausgiebig mit dem Hund spazieren. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 27,
        phase: 1,
        stereotype: "neutral",
        condition: "female",
        role_noun: "Hundehalter*innen",
        question: "Während der Corona-Pandemie hatten Hundehalterinnen mehr Zeit für ihre Vierbeiner. <br /> ____ ging jeden Nachmittag ausgiebig mit dem Hund spazieren. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 27,
        phase: 1,
        stereotype: "neutral",
        condition: "gender-neutral",
        role_noun: "Hundehalter*innen",
        question: "Während der Corona-Pandemie hatten Hundehalter*innen mehr Zeit für ihre Vierbeiner. <br /> ____ ging jeden Nachmittag ausgiebig mit dem Hund spazieren. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
  ],

  textbox_input_Immobilienmakler: [
    {
        item: 28,
        phase: 1,
        stereotype: "neutral",
        condition: "male",
        role_noun: "Immobilienmakler*innen",
        question: "Um die besten Angebote nicht zu verpassen, müssen Immobilienmakler täglich das Internet durchforsten. <br /> ____ hat allein heute 3 Stunden recherchiert. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 28,
        phase: 1,
        stereotype: "neutral",
        condition: "female",
        role_noun: "Immobilienmakler*innen",
        question: "Um die besten Angebote nicht zu verpassen, müssen Immobilienmaklerinnen täglich das Internet durchforsten. <br /> ____ hat allein heute 3 Stunden recherchiert. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 28,
        phase: 1,
        stereotype: "neutral",
        condition: "gender-neutral",
        role_noun: "Immobilienmakler*innen",
        question: "Um die besten Angebote nicht zu verpassen, müssen Immobilienmakler*innen täglich das Internet durchforsten. <br /> ____ hat allein heute 3 Stunden recherchiert. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
  ],

  textbox_input_Journalisten: [
    {
        item: 29,
        phase: 1,
        stereotype: "neutral",
        condition: "male",
        role_noun: "Journalist*innen",
        question: "Ein Journalismus Studium zu beginnen, ist in Deutschland sehr schwierig, weshalb viele angehende Journalisten einen alternativen Bildungsweg einschlagen. <br /> ____ möchte sich trotzdem an der Universität in Berlin bewerben. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 29,
        phase: 1,
        stereotype: "neutral",
        condition: "female",
        role_noun: "Journalist*innen",
        question: "Ein Journalismus Studium zu beginnen, ist in Deutschland sehr schwierig, weshalb viele angehende Journalistinnen einen alternativen Bildungsweg einschlagen. <br /> ____ möchte sich trotzdem an der Universität in Berlin bewerben. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 29,
        phase: 1,
        stereotype: "neutral",
        condition: "gender-neutral",
        role_noun: "Journalist*innen",
        question: "Ein Journalismus Studium zu beginnen, ist in Deutschland sehr schwierig, weshalb viele angehende Journalist*innen einen alternativen Bildungsweg einschlagen. <br /> ____ möchte sich trotzdem an der Universität in Berlin bewerben. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
  ],

  textbox_input_Mieter: [
    {
        item: 30,
        phase: 1,
        stereotype: "neutral",
        condition: "male",
        role_noun: "Mieter*innen",
        question: "Wegen des Mietendeckels konnten viele Mieter während der Pandemie zu günstigen Mieten in ihren Wohnungen bleiben. <br /> ____ wurde jedoch kürzlich wegen Eigenbedarfs der Mietvertrag gekündigt. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 30,
        phase: 1,
        stereotype: "neutral",
        condition: "female",
        role_noun: "Mieter*innen",
        question: "Wegen des Mietendeckels konnten viele Mieterinnen während der Pandemie zu günstigen Mieten in ihren Wohnungen bleiben. <br /> ____ wurde jedoch kürzlich wegen Eigenbedarfs der Mietvertrag gekündigt. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 30,
        phase: 1,
        stereotype: "neutral",
        condition: "gender-neutral",
        role_noun: "Mieter*innen",
        question: "Wegen des Mietendeckels konnten viele Mieter*innen während der Pandemie zu günstigen Mieten in ihren Wohnungen bleiben. <br /> ____ wurde jedoch kürzlich wegen Eigenbedarfs der Mietvertrag gekündigt. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
  ],

  textbox_input_Patienten: [
    {
        item: 31,
        phase: 1,
        stereotype: "neutral",
        condition: "male",
        role_noun: "Patient*innen",
        question: "In den Wintermonaten steigt die Anzahl der Patienten in den Arztpraxen stark an. <br /> ____ wartet schon seit Tagen auf einen Termin. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 31,
        phase: 1,
        stereotype: "neutral",
        condition: "female",
        role_noun: "Patient*innen",
        question: "In den Wintermonaten steigt die Anzahl der Patientinnen in den Arztpraxen stark an. <br /> ____ wartet schon seit Tagen auf einen Termin. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 31,
        phase: 1,
        stereotype: "neutral",
        condition: "gender-neutral",
        role_noun: "Patient*innen",
        question: "In den Wintermonaten steigt die Anzahl der Patient*innen in den Arztpraxen stark an. <br /> ____ wartet schon seit Tagen auf einen Termin. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
  ],

  textbox_input_Fotografen: [
    {
        item: 32,
        phase: 1,
        stereotype: "neutral",
        condition: "male",
        role_noun: "Fotograf*innen",
        question: "Fotografen werden häufig für große Hochzeiten engagiert. <br /> ____ fotografiert dabei am liebsten spontane Momente, die nicht gestellt sind. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 32,
        phase: 1,
        stereotype: "neutral",
        condition: "female",
        role_noun: "Fotograf*innen",
        question: "Fotografen werden häufig für große Hochzeiten engagiert. <br /> ____ fotografiert dabei am liebsten spontane Momente, die nicht gestellt sind. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 32,
        phase: 1,
        stereotype: "neutral",
        condition: "gender-neutral",
        role_noun: "Fotograf*innen",
        question: "Fotografen werden häufig für große Hochzeiten engagiert. <br /> ____ fotografiert dabei am liebsten spontane Momente, die nicht gestellt sind. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
  ],

  textbox_input_Mediziner: [
    {
        item: 33,
        phase: 1,
        stereotype: "neutral",
        condition: "male",
        role_noun: "Mediziner*innen",
        question: "Mediziner tragen eine große Verantwortung. <br /> ____ kontrolliert jedes Rezept, das ausgestellt wird mehrfach, um Fehler zu vermeiden. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 33,
        phase: 1,
        stereotype: "neutral",
        condition: "female",
        role_noun: "Mediziner*innen",
        question: "Medizinerinnen tragen eine große Verantwortung. <br /> ____ kontrolliert jedes Rezept, das ausgestellt wird mehrfach, um Fehler zu vermeiden. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 33,
        phase: 1,
        stereotype: "neutral",
        condition: "gender-neutral",
        role_noun: "Mediziner*innen",
        question: "Mediziner*innen tragen eine große Verantwortung. <br /> ____ kontrolliert jedes Rezept, das ausgestellt wird mehrfach, um Fehler zu vermeiden. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
  ],

  textbox_input_Aktivisten: [
    {
        item: 34,
        phase: 1,
        stereotype: "neutral",
        condition: "male",
        role_noun: "Aktivist*innen",
        question: "Die Relevanz von politischen Aktivisten nimmt immer mehr zu. <br /> ____ geht jede Woche auf die Straße, um für den Klimaschutz zu demonstrieren. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 34,
        phase: 1,
        stereotype: "neutral",
        condition: "female",
        role_noun: "Aktivist*innen",
        question: "Die Relevanz von politischen Aktivistinnen nimmt immer mehr zu. <br /> ____ geht jede Woche auf die Straße, um für den Klimaschutz zu demonstrieren. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 34,
        phase: 1,
        stereotype: "neutral",
        condition: "gender-neutral",
        role_noun: "Aktivist*innen",
        question: "Die Relevanz von politischen Aktivist*innen nimmt immer mehr zu. <br /> ____ geht jede Woche auf die Straße, um für den Klimaschutz zu demonstrieren. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
  ],

  textbox_input_Psychiater: [
    {
        item: 35,
        phase: 1,
        stereotype: "neutral",
        condition: "male",
        role_noun: "Psychiater*innen",
        question: "Eine eigene Praxis ist der Traum vieler Psychiater. <br /> ____ erhofft sich davon besonders flexible Arbeitszeiten. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 35,
        phase: 1,
        stereotype: "neutral",
        condition: "female",
        role_noun: "Psychiater*innen",
        question: "Eine eigene Praxis ist der Traum vieler Psychiaterinnen. <br /> ____ erhofft sich davon besonders flexible Arbeitszeiten. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 35,
        phase: 1,
        stereotype: "neutral",
        condition: "gender-neutral",
        role_noun: "Psychiater*innen",
        question: "Eine eigene Praxis ist der Traum vieler Psychiater*innen. <br /> ____ erhofft sich davon besonders flexible Arbeitszeiten. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
  ],

  textbox_input_Studenten: [
    {
        item: 36,
        phase: 1,
        stereotype: "neutral",
        condition: "male",
        role_noun: "Student*innen",
        question: "Während der Pandemie vermissten die Studenten vor allem die Mensa. <br /> ____ geht jeden Tag essen, seit sie wieder geöffnet ist. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 36,
        phase: 1,
        stereotype: "neutral",
        condition: "female",
        role_noun: "Student*innen",
        question: "Während der Pandemie vermissten die Studentinnen vor allem die Mensa. <br /> ____ geht jeden Tag essen, seit sie wieder geöffnet ist. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
    {
        item: 36,
        phase: 1,
        stereotype: "neutral",
        condition: "gender-neutral",
        role_noun: "Student*innen",
        question: "Während der Pandemie vermissten die Student*innen vor allem die Mensa. <br /> ____ geht jeden Tag essen, seit sie wieder geöffnet ist. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
        min_chars: 2
    },
  ],



// Phase 2 ---- NAME CHECK
// list that allows iteration through all 36 previous trials from phase 1
iteration: [
  ([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35]),
]};


// Phase 3 --- STEREOTYPE CHECK
// stereotype check with forced choice including three possible answers
// item: assigns number to each role noun
        // range from 1 to 36
// phase: declares the phase of the complete experiment
        // phase3
// stereotype: declares stereoptype of corresponding role noun
        // stereotype is either "male","female" or "neutral"
// role_noun: declares role noun in question
      // role nouns are represented in the masuline generic for the sake of simplicity
// question: declares the question for the participant
      // "Which gender would you most likely associate this role noun/word with?"
// three different options to choose from
      // option1: "Männlich",
      // option2: "Neutral",
      // option3: "Weiblich"

const forced_choice_3A_trials = {
  forced_choice:[
    {
      item: 1,
      phase: 3,
      stereotype:"female",
      role_noun: "Babysitter*innen",
      question: "<strong> Babysiter*innen </strong> <br /> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
      option1: "Männlich",
      option2: "Neutral",
      option3: "Weiblich"
    },
    {
        item: 2,
        phase: 3,
        stereotype:"female",
        role_noun: "Balletttänzer*innen",
        question: "<strong>Balletttänzer*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 3,
        phase: 3,
        stereotype:"female",
        role_noun: "Kassierer*innen",
        question: "<strong>Kassierer*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 4,
        phase: 3,
        stereotype:"female",
        role_noun: "Ernährungsberater*innen",
        question: "<strong>Ernährungsberater*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 5,
        phase: 3,
        stereotype:"female",
        role_noun: "Florist*innen",
        question: "<strong>Florist*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 6,
        phase: 3,
        stereotype:"female",
        role_noun: "Flugbegleiter*innen",
        question: "<strong>Flugbegleiter*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 7,
        phase: 3,
        stereotype:"female",
        role_noun: "Friseur*innen",
        question: "<strong>Friseur*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 8,
        phase: 3,
        stereotype:"female",
        role_noun: "Haushälter*innen",
        question: "<strong>Haushälter*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 9,
        phase: 3,
        stereotype:"female",
        role_noun: "Kindergärtner*innen",
        question: "<strong>Kindergärtner*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 10,
        phase: 3,
        stereotype:"female",
        role_noun: "Grundschullehrer*innen",
        question: "<strong>Grundschullehrer*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 11,
        phase: 3,
        stereotype:"female",
        role_noun: "Autor*innen von Liebesromanen",
        question: "<strong>Autor*innen von Liebesromanen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 12,
        phase: 3,
        stereotype:"female",
        role_noun: "Schneider*innen",
        question: "<strong>Schneider*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 13,
        phase: 3,
        stereotype:"male",
        role_noun: "Astronaut*innen",
        question: "<strong>Astronaut*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 14,
        phase: 3,
        stereotype:"male",
        role_noun: "Metzger*innen",
        question: "<strong>Metzger*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 15,
        phase: 3,
        stereotype:"male",
        role_noun: "Programmierer*innen",
        question: "<strong>Programmierer*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 16,
        phase: 3,
        stereotype:"male",
        role_noun: "Manager*innen",
        question: "<strong>Manager*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 17,
        phase: 3,
        stereotype:"male",
        role_noun: "Bürgermeister*innen",
        question: "<strong>Bürgermeister*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 18,
        phase: 3,
        stereotype:"male",
        role_noun: "Mörder*innen",
        question: "<strong>Mörder*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 19,
        phase: 3,
        stereotype:"male",
        role_noun: "Pilot*innen",
        question: "<strong>Pilot*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 20,
        phase: 3,
        stereotype:"male",
        role_noun: "Präsident*innen",
        question: "<strong>Präsident*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 21,
        phase: 3,
        stereotype:"male",
        role_noun: "Privatdetektiv*innen",
        question: "<strong>Privatdetektiv*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 22,
        phase: 3,
        stereotype:"male",
        role_noun: "Soldat*innen",
        question: "<strong>Soldat*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 23,
        phase: 3,
        stereotype:"male",
        role_noun: "Chirgur*innen",
        question: "<strong>Chirgur*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 24,
        phase: 3,
        stereotype:"male",
        role_noun: "Taxifahrer*innen",
        question: "<strong>Taxifahrer*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 25,
        phase: 3,
        stereotype:"neutral",
        role_noun: "Künstler*innen",
        question: "<strong>Künstler*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 26,
        phase: 3,
        stereotype:"neutral",
        role_noun: "Sportler*innen",
        question: "<strong>Sportler*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 27,
        phase: 3,
        stereotype:"neutral",
        role_noun: "Hundehalter*innen",
        question: "<strong>Hundehalter*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 28,
        phase: 3,
        stereotype:"neutral",
        role_noun: "Immobilienmakler*innen",
        question: "<strong>Immobilienmakler*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 29,
        phase: 3,
        stereotype:"neutral",
        role_noun: "Journalist*innen",
        question: "<strong>Journalist*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 30,
        phase: 3,
        stereotype:"neutral",
        role_noun: "Mieter*innen",
        question: "<strong>Mieter*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 31,
        phase: 3,
        stereotype:"neutral",
        role_noun: "Patient*innen",
        question: "<strong>Patient*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 32,
        phase: 3,
        stereotype:"neutral",
        role_noun: "Fotograf*innen",
        question: "<strong>Fotograf*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 33,
        phase: 3,
        stereotype:"neutral",
        role_noun: "Mediziner*innen",
        question: "<strong>Mediziner*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 34,
        phase: 3,
        stereotype:"neutral",
        role_noun: "politische Aktivist*innen",
        question: "<strong>politische Aktivist*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 35,
        phase: 3,
        stereotype:"neutral",
        role_noun: "Psychiater*innen",
        question: "<strong>Psychiater*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 36,
        phase: 3,
        stereotype:"neutral",
        role_noun: "Student*innen",
        question: "<strong>Student*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
]};







// const textbox_input_trials = {
//   textbox_input: [
//     {
//         item: 1,
//         phase: 1,
//         stereotype: "female",
//         role_noun: "Babysitter*innen",
//         question:
//         _.sample(["Babysitter werden trotz fehlender Kitaplätze immer schlechter bezahlt. <br /> ____________ möchte sich deshalb einen neuen Job suchen.<br /> <br /> Bitte schreibe einen passenden Namen in das Feld.",
//         "Babysitterinnen werden trotz fehlender Kitaplätze immer schlechter bezahlt. <br /> ____________ möchte sich deshalb einen neuen Job suchen.<br /> <br /> Bitte schreibe einen passenden Namen in das Feld.",
//         "Babysitter*innen werden trotz fehlender Kitaplätze immer schlechter bezahlt. <br /> ____________ möchte sich deshalb einen neuen Job suchen.<br /> <br /> Bitte schreibe einen passenden Namen in das Feld."]),
//         min_chars: 2
//     },
//     {
//         item: 2,
//         phase: 1,
//         stereotype: "female",
//         role_noun: "Baletttänzer*innen",
//         question:
//         _.sample(["Die Balletttänzer der Kompanie haben ihre Generalprobe auf der großen Bühne. <br /> ____________ verletzt sich dabei am Bein. <br /> <br />Bitte schreibe einen passenden Namen in das Feld.",
//         "Die Balletttänzerinnen der Kompanie haben ihre Generalprobe auf der großen Bühne. <br /> ____________ verletzt sich dabei am Bein. <br /> <br />Bitte schreibe einen passenden Namen in das Feld.",
//         "Die Balletttänzer*innen der Kompanie haben ihre Generalprobe auf der großen Bühne. <br /> ____________ verletzt sich dabei am Bein. <br /> <br />Bitte schreibe einen passenden Namen in das Feld."]),
//         min_chars: 2
//     },
//     {
//         item: 3,
//         phase: 1,
//         stereotype: "female",
//         role_noun: "Kassierer*innen",
//         question:
//         _.sample(["Der Arbeitsalltag von Kassierern ist sehr anstrengend. <br /> __________ muss jeden Morgen um fünf Uhr aufstehen. <br /> <br />Bitte schreibe einen passenden Namen in das Feld.",
//         "Der Arbeitsalltag von Kassiererinnen ist sehr anstrengend. <br /> ____________ muss jeden Morgen um fünf Uhr aufstehen. <br /> <br />Bitte schreibe einen passenden Namen in das Feld.",
//         "Der Arbeitsalltag von Kassierer*innen ist sehr anstrengend. <br /> __________ muss jeden Morgen um fünf Uhr aufstehen. <br /> <br />Bitte schreibe einen passenden Namen in das Feld."]),
//
//         min_chars: 2
//     },
//     {
//         item: 4,
//         phase: 1,
//         stereotype: "female",
//         role_noun: "Ernährungsberater*innen",
//         question:
//         _.sample(["Ernährungsberater empfehlen die Einnahme von Vitaminpräparaten. <br />__________ hält Vitamin D im Winter für besonders wichtig. <br /> <br /> Bitte schreibe einen passenden Namen in das Feld.",
//         "Ernährungsberaterinnen empfehlen die Einnahme von Vitaminpräparaten. <br />__________ hält Vitamin D im Winter für besonders wichtig. <br /> <br /> Bitte schreibe einen passenden Namen in das Feld.",
//         "Ernährungsberater*innen empfehlen die Einnahme von Vitaminpräparaten. <br />___________ hält Vitamin D im Winter für besonders wichtig. <br /> <br /> Bitte schreibe einen passenden Namen in das Feld."]),
//         min_chars: 2
//     },
//     {
//         item: 5,
//         phase: 1,
//         stereotype: "female",
//         role_noun: "Florist*innen",
//         question:
//         _.sample(["Wenn die Jahreszeiten wechseln, müssen Floristen die ganze Gärtnerei neu dekorieren. <br /> __________ liebt vor allem die Herbstdekoration. <br /> <br /> Bitte schreibe einen passenden Namen in das Feld.",
//         "Wenn die Jahreszeiten wechseln, müssen Floristinnen die ganze Gärtnerei neu dekorieren. <br /> __________ liebt vor allem die Herbstdekoration. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//         "Wenn die Jahreszeiten wechseln, müssen Florist*innen die ganze Gärtnerei neu dekorieren. <br /> ___________ liebt vor allem die Herbstdekoration. <br /><br /> Bitte schreibe einen passenden Namen in das Feld."]),
//         min_chars: 2
//     },
//     {
//         item: 6,
//         phase: 1,
//         stereotype: "female",
//         role_noun: "Flugbegleiter*innen",
//         question:
//         _.sample(["Im Gegensatz zu allen Fluggästen mögen Flugbegleiter keinen Tomatensaft.<br /> __________ bevorzugt Orangensaft während einer langen Flugreise. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//         "Im Gegensatz zu allen Fluggästen mögen Flugbegleiterinnen keinen Tomatensaft.<br /> ___________ bevorzugt Orangensaft während einer langen Flugreise. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//         "Im Gegensatz zu allen Fluggästen mögen Flugbegleiter*innen keinen Tomatensaft.<br /> ___________ bevorzugt Orangensaft während einer langen Flugreise. <br /><br /> Bitte schreibe einen passenden Namen in das Feld."]),
//         min_chars: 2
//     },
//     {
//         item: 7,
//         phase: 1,
//         stereotype: "female",
//         role_noun: "Friseur*innen",
//         question:
//         _.sample(["Bei den ganzen neuen Trends kommen Friseure kaum noch hinterher.<br /> __________ schneidet am liebsten klassische Frisuren. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//         "Bei den ganzen neuen Trends kommen Friseurinnen kaum noch hinterher.<br /> __________ schneidet am liebsten klassische Frisuren. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//         "Bei den ganzen neuen Trends kommen Friseur*innen kaum noch hinterher.<br /> ___________ schneidet am liebsten klassische Frisuren. <br /><br /> Bitte schreibe einen passenden Namen in das Feld."]),
//         min_chars: 2
//     },
//     {
//         item: 8,
//         phase: 1,
//         stereotype: "female",
//         role_noun: "Haushälter*innen",
//         question:
//         _.sample(["Viele Haushälter kümmern sich neben dem Haushalt auch um das seelische Wohl ihrer Vorgesetzten.<br /> ___________ hat immer ein offenes Ohr, wenn die Kinder Probleme in der Schule haben. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//         "Viele Haushälterinnen kümmern sich neben dem Haushalt auch um das seelische Wohl ihrer Vorgesetzten.<br /> ___________ hat immer ein offenes Ohr, wenn die Kinder Probleme in der Schule haben. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//         "Viele Haushälter*innen kümmern sich neben dem Haushalt auch um das seelische Wohl ihrer Vorgesetzten.<br /> ___________ hat immer ein offenes Ohr, wenn die Kinder Probleme in der Schule haben. <br /><br /> Bitte schreibe einen passenden Namen in das Feld."]),
//         min_chars: 2
//     },
//     {
//         item: 9,
//         phase: 1,
//         stereotype: "female",
//         role_noun: "Kindergärtner*innen",
//         question:
//         _.sample(["Nach dem Feierabend genießen die Kindergärtner die Ruhe von ihren kleinen Schützlingen.<br /> ___________ geht nach der Arbeit eine Runde joggen, um den Kopf freizubekommen. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//         "Nach dem Feierabend genießen die Kindergärtnerinnen die Ruhe von ihren kleinen Schützlingen.<br /> ___________ geht nach der Arbeit eine Runde joggen, um den Kopf freizubekommen. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//         "Nach dem Feierabend genießen die Kindergärtner*innen die Ruhe von ihren kleinen Schützlingen.<br /> ___________ geht nach der Arbeit eine Runde joggen, um den Kopf freizubekommen. <br /><br /> Bitte schreibe einen passenden Namen in das Feld."]),
//         min_chars: 2
//     },
//     {
//         item: 10,
//         phase: 1,
//         stereotype: "female",
//         role_noun: "Grundschullehrer*innen",
//         question:
//         _.sample(["Um den Unterricht möglichst abwechslungsreich zu gestalten, nutzen Grundschullehrer gerne verschiedene Medien.<br /> __________ verwendet am liebsten das Whiteboard, um Inhalte zu visualisieren. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//         "Um den Unterricht möglichst abwechslungsreich zu gestalten, nutzen Grundschullehrerinnen gerne verschiedene Medien.<br /> __________ verwendet am liebsten das Whiteboard, um Inhalte zu visualisieren. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//         "Um den Unterricht möglichst abwechslungsreich zu gestalten, nutzen Grundschullehrer*innen gerne verschiedene Medien.<br /> ___________ verwendet am liebsten das Whiteboard, um Inhalte zu visualisieren. <br /><br /> Bitte schreibe einen passenden Namen in das Feld."]),
//         min_chars: 2
//     },
//     {
//         item: 11,
//         phase: 1,
//         stereotype: "female",
//         role_noun: "Autor*innen von Liebesromanen",
//         question:
//         _.sample(["Autoren von Liebesromanen wird oft ein Hang zur Dramatik nachgesagt.<br /> ___________ lässt Geschichten deshalb stets mit einem Happy End enden. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//         "Autorinnen von Liebesromanen wird oft ein Hang zur Dramatik nachgesagt.<br /> ___________ lässt Geschichten deshalb stets mit einem Happy End enden. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//         "Autor*innen von Liebesromanen wird oft ein Hang zur Dramatik nachgesagt.<br /> ___________ lässt Geschichten deshalb stets mit einem Happy End enden. <br /><br /> Bitte schreibe einen passenden Namen in das Feld."]),
//         min_chars: 2
//     },
//     {
//         item: 12,
//         phase: 1,
//         stereotype: "female",
//         role_noun: "Schneider*innen",
//         question:
//         _.sample(["Die Fast-Fashion Industrie sorgt dafür, dass Schneider kaum noch Aufträge bekommen. <br /> __________ sucht daher nach einem Nebenjob, um die Miete bezahlen zu können. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//         "Die Fast-Fashion Industrie sorgt dafür, dass Schneiderinnen kaum noch Aufträge bekommen. <br /> __________ sucht daher nach einem Nebenjob, um die Miete bezahlen zu können. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//         "Die Fast-Fashion Industrie sorgt dafür, dass Schneider*innen kaum noch Aufträge bekommen. <br /> __________ sucht daher nach einem Nebenjob, um die Miete bezahlen zu können. <br /><br /> Bitte schreibe einen passenden Namen in das Feld."]),
//         min_chars: 2
//     },
//     {
//         item: 13,
//         phase: 1,
//         stereotype: "male",
//         role_noun: "Astronaut*innen",
//         question:
//         _.sample(["Um sich auf die Zeit im All vorzubereiten, müssen Astronauten eine spezielle Schulung durchlaufen. <br /> __________ fällt es schwer, sich an die Trockennahrung zu gewöhnen. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//         "Um sich auf die Zeit im All vorzubereiten, müssen Astronautinnen eine spezielle Schulung durchlaufen. <br /> __________ fällt es schwer, sich an die Trockennahrung zu gewöhnen. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//         "Um sich auf die Zeit im All vorzubereiten, müssen Astronaut*innen eine spezielle Schulung durchlaufen. <br /> __________ fällt es schwer, sich an die Trockennahrung zu gewöhnen. <br /><br /> Bitte schreibe einen passenden Namen in das Feld."]),
//         min_chars: 2
//     },
//     {
//         item: 14,
//         phase: 1,
//         stereotype: "male",
//         role_noun: "Metzger*innen",
//         question:
//         _.sample(["Seit einiger Zeit nehmen Metzger auch vegetarische Produkte in ihr Sortiment auf. <br /> __________ bietet jetzt auch Gemüsefrikadellen an der Frischetheke an. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//         "Seit einiger Zeit nehmen Metzgerinnen auch vegetarische Produkte in ihr Sortiment auf. <br /> __________ bietet jetzt auch Gemüsefrikadellen an der Frischetheke an. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//         "Seit einiger Zeit nehmen Metzger*innen auch vegetarische Produkte in ihr Sortiment auf. <br /> __________ bietet jetzt auch Gemüsefrikadellen an der Frischetheke an. <br /><br /> Bitte schreibe einen passenden Namen in das Feld."]),
//         min_chars: 2
//     },
//     {
//         item: 15,
//         phase: 1,
//         stereotype: "male",
//         role_noun: "Programmierer*innen",
//         question:
//         _.sample(["Ein leistungsstarker Computer ist ausschlaggebend für die Arbeit von Programmierern. <br /> __________ installiert regelmäßig die neuesten Softwareupdates, um nicht von der Konkurrenz abgehängt zu werden. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//         "Ein leistungsstarker Computer ist ausschlaggebend für die Arbeit von Programmiererinnen. <br /> __________ installiert regelmäßig die neuesten Softwareupdates, um nicht von der Konkurrenz abgehängt zu werden. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//         "Ein leistungsstarker Computer ist ausschlaggebend für die Arbeit von Programmierer*innen. <br /> __________ installiert regelmäßig die neuesten Softwareupdates, um nicht von der Konkurrenz abgehängt zu werden. <br /><br /> Bitte schreibe einen passenden Namen in das Feld."]),
//         min_chars: 2
//     },
//     {
//         item: 16,
//         phase: 1,
//         stereotype: "male",
//         role_noun: "Manager*innen",
//         question:
//         _.sample(["Organisation und Führungsstärke gehören zu den wichtigsten Merkmalen von Managern. <br /> __________ legt trotzdem viel Wert auf ein freundliches Arbeitsklima im Büro. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//         "Organisation und Führungsstärke gehören zu den wichtigsten Merkmalen von Managerinnen. <br /> __________ legt trotzdem viel Wert auf ein freundliches Arbeitsklima im Büro. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//         "Organisation und Führungsstärke gehören zu den wichtigsten Merkmalen von Manager*innen. <br /> __________ legt trotzdem viel Wert auf ein freundliches Arbeitsklima im Büro. <br /><br /> Bitte schreibe einen passenden Namen in das Feld."]),
//         min_chars: 2
//     },
//     {
//         item: 17,
//         phase: 1,
//         stereotype: "male",
//         role_noun: "Bürgermeister*innen",
//         question:
//         _.sample(["Urbane Bürgermeister haben andere Prioritäten als jene auf dem Land. <br />	__________ legt das Hauptaugenmerk in der aktuellen Kampagne auf Innovation und Klimaschutz. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//         "Urbane Bürgermeisterinnen haben andere Prioritäten als jene auf dem Land. <br />	__________ legt das Hauptaugenmerk in der aktuellen Kampagne auf Innovation und Klimaschutz. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//         "Urbane Bürgermeister*innen haben andere Prioritäten als jene auf dem Land. <br />	__________ legt das Hauptaugenmerk in der aktuellen Kampagne auf Innovation und Klimaschutz. <br /><br /> Bitte schreibe einen passenden Namen in das Feld."]),
//         min_chars: 2
//     },
//     {
//         item: 18,
//         phase: 1,
//         stereotype: "male",
//         role_noun: "Mörder*innen",
//         question:
//         _.sample(["Die erfolgreiche Festnahme von Mördern nimmt aufgrund technologischen Fortschritts immer weiter zu. <br />	__________ konnte aufgrund von Videoüberwachung und der Ortung des Smartphones schnell verhaftet werden, bevor es ein neues Opfer gab. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//         "Die erfolgreiche Festnahme von Mörderinnen nimmt aufgrund technologischen Fortschritts immer weiter zu. <br />	__________ konnte aufgrund von Videoüberwachung und der Ortung des Smartphones schnell verhaftet werden, bevor es ein neues Opfer gab. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//         "Die erfolgreiche Festnahme von Mörder*innen nimmt aufgrund technologischen Fortschritts immer weiter zu. <br />	__________ konnte aufgrund von Videoüberwachung und der Ortung des Smartphones schnell verhaftet werden, bevor es ein neues Opfer gab. <br /><br /> Bitte schreibe einen passenden Namen in das Feld."]),
//         min_chars: 2
//     },
//     {
//         item: 19,
//         phase: 1,
//         stereotype: "male",
//         role_noun: "Pilot*innen",
//         question:
//         _.sample(["Weil Piloten beim Fliegen einer erhöhten Strahlung ausgesetzt sind, müssen sie früher in den Ruhestand. <br />		__________ geht Ende des Jahres bereits in Rente, während Gleichaltrige noch 8 Jahre in ihrem Job arbeiten müssen. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//         "Weil Pilotinnen beim Fliegen einer erhöhten Strahlung ausgesetzt sind, müssen sie früher in den Ruhestand. <br />		__________ geht Ende des Jahres bereits in Rente, während Gleichaltrige noch 8 Jahre in ihrem Job arbeiten müssen. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//         "Weil Pilot*innen beim Fliegen einer erhöhten Strahlung ausgesetzt sind, müssen sie früher in den Ruhestand. <br />		__________ geht Ende des Jahres bereits in Rente, während Gleichaltrige noch 8 Jahre in ihrem Job arbeiten müssen. <br /><br /> Bitte schreibe einen passenden Namen in das Feld."]),
//         min_chars: 2
//     },
//     {
//         item: 20,
//         phase: 1,
//         stereotype: "male",
//         role_noun: "Präsident*innen",
//         question:
//         _.sample(["Auf dem Weltklima-Gipfel versammeln sich unter anderem Präsidenten verschiedener Länder, um über eine politische Zusammenarbeit zu diskutieren. <br />	__________ ist für die Einführung einer einheitlichen, verpflichtenden CO2-Besteuerung. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//         "Auf dem Weltklima-Gipfel versammeln sich unter anderem Präsidentinnen verschiedener Länder, um über eine politische Zusammenarbeit zu diskutieren. <br />	__________ ist für die Einführung einer einheitlichen, verpflichtenden CO2-Besteuerung. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//         "Auf dem Weltklima-Gipfel versammeln sich unter anderem Präsident*innen verschiedener Länder, um über eine politische Zusammenarbeit zu diskutieren. <br />	__________ ist für die Einführung einer einheitlichen, verpflichtenden CO2-Besteuerung. <br /><br /> Bitte schreibe einen passenden Namen in das Feld."]),
//         min_chars: 2
//     },
//     {
//         item: 21,
//         phase: 1,
//         stereotype: "male",
//         role_noun: "Privatdetektiv*innen",
//         question:
//         _.sample(["Eine erfolgreiche TV-Serie berichtet über die spannende Arbeit von Privatdetektiven. <br />	__________ arbeitet schon seit langem in einer Detektei und ärgert sich über die unauthentische Darstellung des Berufes. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//         "Eine erfolgreiche TV-Serie berichtet über die spannende Arbeit von Privatdetektivinnen. <br />	__________ arbeitet schon seit langem in einer Detektei und ärgert sich über die unauthentische Darstellung des Berufes. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//         "Eine erfolgreiche TV-Serie berichtet über die spannende Arbeit von Privatdetektiv*innen. <br />	__________ arbeitet schon seit langem in einer Detektei und ärgert sich über die unauthentische Darstellung des Berufes. <br /><br /> Bitte schreibe einen passenden Namen in das Feld."]),
//         min_chars: 2
//     },
//     {
//         item: 22,
//         phase: 1,
//         stereotype: "male",
//         role_noun: "Soldat*innen",
//         question:
//         _.sample(["In Deutschland dürfen Soldaten kostenlos die öffentlichen Verkehrsmittel nutzen. <br />	__________ besucht deshalb jede Woche die Familie. <br /> <br />Bitte schreibe einen passenden Namen in das Feld.",
//         "In Deutschland dürfen Soldatinnen kostenlos die öffentlichen Verkehrsmittel nutzen. <br />	__________ besucht deshalb jede Woche die Familie. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//         "In Deutschland dürfen Soldat*innen kostenlos die öffentlichen Verkehrsmittel nutzen. <br />	__________ besucht deshalb jede Woche die Familie. <br /><br /> Bitte schreibe einen passenden Namen in das Feld."]),
//         min_chars: 2
//     },
//     {
//         item: 23,
//         phase: 1,
//         stereotype: "male",
//         role_noun: "Chirurg*innen",
//         question:
//         _.sample(["Um während Operationen konzentriert zu bleiben, haben alle Chirurgen ihre ganz persönlichen Strategien. <br />	__________ hört gerne klassische Musik während eines Eingriffs. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//         "Um während Operationen konzentriert zu bleiben, haben alle Chirurginnen ihre ganz persönlichen Strategien. <br />	__________ hört gerne klassische Musik während eines Eingriffs. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//         "Um während Operationen konzentriert zu bleiben, haben alle Chirurg*innen ihre ganz persönlichen Strategien. <br />	__________ hört gerne klassische Musik während eines Eingriffs. <br /><br /> Bitte schreibe einen passenden Namen in das Feld."]),
//         min_chars: 2
//     },
//     {
//         item: 24,
//         phase: 1,
//         stereotype: "male",
//         role_noun: "Taxifahrer*innen",
//         question:
//         _.sample(["Während einer Nachtschicht wird der Dienst von Taxifahrern hauptsächlich von Betrunkenen in Anspruch genommen. <br />	__________ arbeitet deswegen lieber tagsüber. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//         "Während einer Nachtschicht wird der Dienst von Taxifahrerinnen hauptsächlich von Betrunkenen in Anspruch genommen. <br />	__________ arbeitet deswegen lieber tagsüber. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//         "Während einer Nachtschicht wird der Dienst von Taxifahrer*innen hauptsächlich von Betrunkenen in Anspruch genommen. <br />	__________ arbeitet deswegen lieber tagsüber. <br /><br /> Bitte schreibe einen passenden Namen in das Feld."]),
//         min_chars: 2
//     },
//     {
//       item: 25,
//       phase: 1,
//       stereotype: "neutral",
//       role_noun: "Künstler*innen",
//       question:
//       _.sample(["Bei einer Vernissage stellen Künstler ihre aktuellen Werke vor. <br /> ________ präsentiert stolz eine neue Technik, die Gips und Sand auf eine einzigartige Art und Weise  miteinander verbindet. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//       "Bei einer Vernissage stellen Künstlerinnen ihre aktuellen Werke vor. <br /> ________ präsentiert stolz eine neue Technik, die Gips und Sand auf eine einzigartige Art und Weise  miteinander verbindet. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//       "Bei einer Vernissage stellen Künstler*innen ihre aktuellen Werke vor. <br /> ________ präsentiert stolz eine neue Technik, die Gips und Sand auf eine einzigartige Art und Weise  miteinander verbindet. <br /><br /> Bitte schreibe einen passenden Namen in das Feld."]),
//       min_chars: 2
//     },
//     {
//       item: 26,
//       phase: 1,
//       stereotype: "neutral",
//       role_noun: "Sportler*innen",
//       question:
//       _.sample(["Bei Olympia werden die besten Sportler mit einer Medaille gekürt. <br /> ________ erhält Gold in der Disziplin Schwimmen. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//       "Bei Olympia werden die besten Sportlerinnen mit einer Medaille gekürt. <br /> ________ erhält Gold in der Disziplin Schwimmen. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//       "Bei Olympia werden die besten Sportler*innen mit einer Medaille gekürt. <br /> ________ erhält Gold in der Disziplin Schwimmen. <br /><br /> Bitte schreibe einen passenden Namen in das Feld."]),
//       min_chars: 2
//     },
//     {
//       item: 27,
//       phase: 1,
//       stereotype: "neutral",
//       role_noun: "Hundehalter*innen",
//       question:
//       _.sample(["Während der Corona-Pandemie hatten Hundehalter mehr Zeit für ihre Vierbeiner. <br /> ________ ging jeden Nachmittag ausgiebig mit dem Hund spazieren. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//       "Während der Corona-Pandemie hatten Hundehalterinnen mehr Zeit für ihre Vierbeiner. <br /> __________ ging jeden Nachmittag ausgiebig mit dem Hund spazieren. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//       "Während der Corona-Pandemie hatten Hundehalter*innen mehr Zeit für ihre Vierbeiner. <br /> __________ ging jeden Nachmittag ausgiebig mit dem Hund spazieren. <br /><br /> Bitte schreibe einen passenden Namen in das Feld."]),
//       min_chars: 2
//     },
//     {
//       item: 28,
//       phase: 1,
//       stereotype: "neutral",
//       role_noun: "Immobilienmakler*innen",
//       question:
//       _.sample(["Um die besten Angebote nicht zu verpassen, müssen Immobilienmakler täglich das Internet durchforsten. <br /> ________ hat allein heute 3 Stunden recherchiert. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//       "Um die besten Angebote nicht zu verpassen, müssen Immobilienmaklerinnen täglich das Internet durchforsten. <br /> ________ hat allein heute 3 Stunden recherchiert. <br /><br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//       "Um die besten Angebote nicht zu verpassen, müssen Immobilienmakler*innen täglich das Internet durchforsten. <br /> ________ hat allein heute 3 Stunden recherchiert. <br /><br /> Bitte schreibe einen passenden Namen in das Feld."]),
//       min_chars: 2
//     },
//     {
//       item: 29,
//       phase: 1,
//       stereotype: "neutral",
//       role_noun: "Journalist*innen",
//       question:
//       _.sample(["Ein Journalismus Studium zu beginnen, ist in Deutschland sehr schwierig, weshalb viele angehende Journalisten einen alternativen Bildungsweg einschlagen. <br /> ________ möchte sich trotzdem an der Universität in Berlin bewerben. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//       "Ein Journalismus Studium zu beginnen, ist in Deutschland sehr schwierig, weshalb viele angehende Journalistinnen einen alternativen Bildungsweg einschlagen. <br /> ________ möchte sich trotzdem an der Universität in Berlin bewerben. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//       "Ein Journalismus Studium zu beginnen, ist in Deutschland sehr schwierig, weshalb viele angehende Journalist*innen einen alternativen Bildungsweg einschlagen. <br /> ________ möchte sich trotzdem an der Universität in Berlin bewerben. <br /><br /> Bitte schreibe einen passenden Namen in das Feld."]),
//       min_chars: 2
//     },
//     {
//       item: 30,
//       phase: 1,
//       stereotype: "neutral",
//       role_noun: "Mieter*innen",
//       question:
//       _.sample(["Wegen des Mietendeckels konnten viele Mieter während der Pandemie zu günstigen Mieten in ihren Wohnungen bleiben. <br /> ________ wurde jedoch kürzlich wegen Eigenbedarfs der Mietvertrag gekündigt. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//       "Wegen des Mietendeckels konnten viele Mieterinnen während der Pandemie zu günstigen Mieten in ihren Wohnungen bleiben. <br /> ________ wurde jedoch kürzlich wegen Eigenbedarfs der Mietvertrag gekündigt. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//       "Wegen des Mietendeckels konnten viele Mieter*innen während der Pandemie zu günstigen Mieten in ihren Wohnungen bleiben. <br /> ________ wurde jedoch kürzlich wegen Eigenbedarfs der Mietvertrag gekündigt. <br /><br /> Bitte schreibe einen passenden Namen in das Feld."]),
//       min_chars: 2
//     },
//     {
//       item: 31,
//       phase: 1,
//       stereotype: "neutral",
//       role_noun: "Patient*innen",
//       question:
//       _.sample(["In den Wintermonaten steigt die Anzahl der Patienten in den Arztpraxen stark an. <br /> ________ wartet schon seit Tagen auf einen Termin. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//       "In den Wintermonaten steigt die Anzahl der Patientinnen in den Arztpraxen stark an. <br /> ________ wartet schon seit Tagen auf einen Termin. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//       "In den Wintermonaten steigt die Anzahl der Patient*innen in den Arztpraxen stark an. <br /> ________ wartet schon seit Tagen auf einen Termin. <br /><br /> Bitte schreibe einen passenden Namen in das Feld."]),
//       min_chars: 2
//     },
//     {
//       item: 32,
//       phase: 1,
//       stereotype: "neutral",
//       role_noun: "Fotograf*innen",
//       question:
//       _.sample(["Fotografen werden häufig für große Hochzeiten engagiert. <br /> ________ fotografiert dabei am liebsten spontane Momente, die nicht gestellt sind. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//       "Fotografinnen werden häufig für große Hochzeiten engagiert. <br /> ________ fotografiert dabei am liebsten spontane Momente, die nicht gestellt sind. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//       "Fotograf*innen werden häufig für große Hochzeiten engagiert. <br /> ________ fotografiert dabei am liebsten spontane Momente, die nicht gestellt sind. <br /><br /> Bitte schreibe einen passenden Namen in das Feld."]),
//       min_chars: 2
//     },
//     {
//       item: 33,
//       phase: 1,
//       stereotype: "neutral",
//       role_noun: "Mediziner*innen",
//       question:
//       _.sample(["Mediziner tragen eine große Verantwortung. <br /> ________ kontrolliert jedes Rezept, das ausgestellt wird mehrfach, um Fehler zu vermeiden. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//       "Medizinerinnen tragen eine große Verantwortung. <br /> ________ kontrolliert jedes Rezept, das ausgestellt wird mehrfach, um Fehler zu vermeiden. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//       "Mediziner*innen tragen eine große Verantwortung. <br /> ________ kontrolliert jedes Rezept, das ausgestellt wird mehrfach, um Fehler zu vermeiden. <br /><br /> Bitte schreibe einen passenden Namen in das Feld."]),
//       min_chars: 2
//     },
//     {
//       item: 34,
//       phase: 1,
//       stereotype: "neutral",
//       role_noun: "Aktivist*innen",
//       question:
//       _.sample(["Die Relevanz von politischen Aktivisten nimmt immer mehr zu. <br /> ________ geht jede Woche auf die Straße, um für den Klimaschutz zu demonstrieren. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//       "Die Relevanz von politischen Aktivistinnen nimmt immer mehr zu. <br /> ________ geht jede Woche auf die Straße, um für den Klimaschutz zu demonstrieren. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//       "Die Relevanz von politischen Aktivist*innen nimmt immer mehr zu. <br /> ________ geht jede Woche auf die Straße, um für den Klimaschutz zu demonstrieren. <br /><br /> Bitte schreibe einen passenden Namen in das Feld."]),
//       min_chars: 2
//     },
//     {
//       item: 35,
//       phase: 1,
//       stereotype: "neutral",
//       role_noun: "Psychiater*innen",
//       question:
//       _.sample(["Eine eigene Praxis ist der Traum vieler Psychiater. <br /> ________ erhofft sich davon besonders flexible Arbeitszeiten. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//       "Eine eigene Praxis ist der Traum vieler Psychiaterinnen. <br /> ________ erhofft sich davon besonders flexible Arbeitszeiten. <br /><br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//       "Eine eigene Praxis ist der Traum vieler Psychiater*innen. <br /> ________ erhofft sich davon besonders flexible Arbeitszeiten. <br /><br /> Bitte schreibe einen passenden Namen in das Feld."]),
//       min_chars: 2
//     },
//     {
//       item: 36,
//       phase: 1,
//       stereotype: "neutral",
//       role_noun: "Student*innen",
//       question:
//       _.sample(["Während der Pandemie vermissten die Studenten vor allem die Mensa. <br /> ________ geht jeden Tag essen, seit sie wieder geöffnet ist. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//       "Während der Pandemie vermissten die Studentinnen vor allem die Mensa. <br /> ________ geht jeden Tag essen, seit sie wieder geöffnet ist. <br /><br /> Bitte schreibe einen passenden Namen in das Feld.",
//       "Während der Pandemie vermissten die Student*innen vor allem die Mensa. <br /> ________ geht jeden Tag essen, seit sie wieder geöffnet ist. <br /> <br /> Bitte schreibe einen passenden Namen in das Feld."]),
//       min_chars: 2
//     },
// ],

// Phase 2 ---- NAME CHECK
// list that allows iteration through all 36 previous trials from phase 1
iteration: [
  ([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35]),
]};


// Phase 3 --- STEREOTYPE CHECK
// stereotype check with forced choice including three possible answers
// item: assigns number to each role noun
        // range from 1 to 36
// phase: declares the phase of the complete experiment
        // phase3
// stereotype: declares stereoptype of corresponding role noun
        // stereotype is either "male","female" or "neutral"
// role_noun: declares role noun in question
      // role nouns are represented in the masuline generic for the sake of simplicity
// question: declares the question for the participant
      // "Which gender would you most likely associate this role noun/word with?"
// three different options to choose from
      // option1: "Männlich",
      // option2: "Neutral",
      // option3: "Weiblich"

const forced_choice_3A_trials = {
  forced_choice:[
    {
      item: 1,
      phase: 3,
      stereotype:"female",
      role_noun: "Babysitter*innen",
      question: "<strong> Babysiter*innen </strong> <br /> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
      option1: "Männlich",
      option2: "Neutral",
      option3: "Weiblich"
    },
    {
        item: 2,
        phase: 3,
        stereotype:"female",
        role_noun: "Balletttänzer*innen",
        question: "<strong>Balletttänzer*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 3,
        phase: 3,
        stereotype:"female",
        role_noun: "Kassierer*innen",
        question: "<strong>Kassierer*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 4,
        phase: 3,
        stereotype:"female",
        role_noun: "Ernährungsberater*innen",
        question: "<strong>Ernährungsberater*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 5,
        phase: 3,
        stereotype:"female",
        role_noun: "Florist*innen",
        question: "<strong>Florist*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 6,
        phase: 3,
        stereotype:"female",
        role_noun: "Flugbegleiter*innen",
        question: "<strong>Flugbegleiter*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 7,
        phase: 3,
        stereotype:"female",
        role_noun: "Friseur*innen",
        question: "<strong>Friseur*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 8,
        phase: 3,
        stereotype:"female",
        role_noun: "Haushälter*innen",
        question: "<strong>Haushälter*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 9,
        phase: 3,
        stereotype:"female",
        role_noun: "Kindergärtner*innen",
        question: "<strong>Kindergärtner*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 10,
        phase: 3,
        stereotype:"female",
        role_noun: "Grundschullehrer*innen",
        question: "<strong>Grundschullehrer*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 11,
        phase: 3,
        stereotype:"female",
        role_noun: "Autor*innen von Liebesromanen",
        question: "<strong>Autor*innen von Liebesromanen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 12,
        phase: 3,
        stereotype:"female",
        role_noun: "Schneider*innen",
        question: "<strong>Schneider*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 13,
        phase: 3,
        stereotype:"male",
        role_noun: "Astronaut*innen",
        question: "<strong>Astronaut*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 14,
        phase: 3,
        stereotype:"male",
        role_noun: "Metzger*innen",
        question: "<strong>Metzger*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 15,
        phase: 3,
        stereotype:"male",
        role_noun: "Programmierer*innen",
        question: "<strong>Programmierer*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 16,
        phase: 3,
        stereotype:"male",
        role_noun: "Manager*innen",
        question: "<strong>Manager*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 17,
        phase: 3,
        stereotype:"male",
        role_noun: "Bürgermeister*innen",
        question: "<strong>Bürgermeister*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 18,
        phase: 3,
        stereotype:"male",
        role_noun: "Mörder*innen",
        question: "<strong>Mörder*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 19,
        phase: 3,
        stereotype:"male",
        role_noun: "Pilot*innen",
        question: "<strong>Pilot*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 20,
        phase: 3,
        stereotype:"male",
        role_noun: "Präsident*innen",
        question: "<strong>Präsident*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 21,
        phase: 3,
        stereotype:"male",
        role_noun: "Privatdetektiv*innen",
        question: "<strong>Privatdetektiv*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 22,
        phase: 3,
        stereotype:"male",
        role_noun: "Soldat*innen",
        question: "<strong>Soldat*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 23,
        phase: 3,
        stereotype:"male",
        role_noun: "Chirgur*innen",
        question: "<strong>Chirgur*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 24,
        phase: 3,
        stereotype:"male",
        role_noun: "Taxifahrer*innen",
        question: "<strong>Taxifahrer*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 25,
        phase: 3,
        stereotype:"neutral",
        role_noun: "Künstler*innen",
        question: "<strong>Künstler*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 26,
        phase: 3,
        stereotype:"neutral",
        role_noun: "Sportler*innen",
        question: "<strong>Sportler*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 27,
        phase: 3,
        stereotype:"neutral",
        role_noun: "Hundehalter*innen",
        question: "<strong>Hundehalter*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 28,
        phase: 3,
        stereotype:"neutral",
        role_noun: "Immobilienmakler*innen",
        question: "<strong>Immobilienmakler*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 29,
        phase: 3,
        stereotype:"neutral",
        role_noun: "Journalist*innen",
        question: "<strong>Journalist*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 30,
        phase: 3,
        stereotype:"neutral",
        role_noun: "Mieter*innen",
        question: "<strong>Mieter*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 31,
        phase: 3,
        stereotype:"neutral",
        role_noun: "Patient*innen",
        question: "<strong>Patient*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 32,
        phase: 3,
        stereotype:"neutral",
        role_noun: "Fotograf*innen",
        question: "<strong>Fotograf*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 33,
        phase: 3,
        stereotype:"neutral",
        role_noun: "Mediziner*innen",
        question: "<strong>Mediziner*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 34,
        phase: 3,
        stereotype:"neutral",
        role_noun: "politische Aktivist*innen",
        question: "<strong>politische Aktivist*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 35,
        phase: 3,
        stereotype:"neutral",
        role_noun: "Psychiater*innen",
        question: "<strong>Psychiater*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
    {
        item: 36,
        phase: 3,
        stereotype:"neutral",
        role_noun: "Student*innen",
        question: "<strong>Student*innen</strong> <br /> Mit welchem Geschlecht würdest du dieses Wort am ehesten assoziieren?",
        option1: "Männlich",
        option2: "Neutral",
        option3: "Weiblich"
    },
]};
