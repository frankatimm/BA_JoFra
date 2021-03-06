/// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below
* Obligatory properties
    * trials: int - the number of trials this view will appear
    * name: string
*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view
    * More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views
*/

// experiment starts with an intro view
// welcome your participants and tell them what the prerequisites are
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  title: 'Willkommen!',
  text: `Willkommen zu unserem Experiment!
  <br />
  <br />
  Vielen Dank, dass Sie sich dazu entschieden haben, an unserem Experiment teilzunehmen und auf diese
  Weise das Projekt für unsere Bachelorarbeit zu unterstützen.
  <br />
  Ihre Daten werden anonymisiert, dementsprechend ist eine Rückverfolgung zu Ihrer Person nicht möglich.
  Die erhobenen Daten werden ausschließlich für die Analyse dieses Experiments verwendet.
  Falls Sie sich während der Bearbeitung doch gegen die Verwendung Ihrer Daten entscheiden sollten,
  können Sie das Experiment jederzeit abbrechen und somit eine Speicherung Ihrer Antworten verhindern.
  <br />
  Bitte beachten Sie, dass eine Teilnahme nur unter folgenden Bedingungen möglich ist:
  <br />
  <br />
  - Das Gerät, auf dem Sie arbeiten, verfügt über eine stabile Internetverbindung.
  <br />
  - Sie haben ausreichend Zeit, um das Experiment vollständig zu bearbeiten (ca. 30 Minuten).
  <br />
  - Sie befinden sich in einer ruhigen und gemütlichen Umgebung, in der Ihre ungeteilte Aufmerksamkeit dem Experiment gilt.
  <br />
  <br />
  <br />
  Sobald Sie bereit sind, klicken Sie auf den <strong>Weiter zu den Instruktionen</strong>-Button um mit dem Experiment fortzufahren.`,
  buttonText: 'Weiter zu den Instruktionen'
});

// instructions views
// instructions for phase 1 ---- Filler sentences
const textbox_input_instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions phase 1',
  title: 'Instruktionen',
  text: `Im Folgenden werden Sätze auf Ihrem Bildschirm erscheinen. Der Aufbau dieser Sätze folgt stets dem gleichen Schema.
  Dabei ist der erste Satz vollständig und beschreibt eine bestimmte Situation, auf die sich wiederum der zweite Satz bezieht.
  <br />
  <br />
  Ihre Aufgabe ist es, den zweiten Satz zu vervollständigen, indem Sie einen Namen in das leere Feld schreiben, welcher Ihrer Vorstelleung
  nach am besten zu dem vorherigen Satz passt.
  <br />
  Namenswiederholungen sind zulässig, jedoch sollte es sich bei Ihrer Wahl nur um Vornamen handeln, die zudem keine Sonderzeichen (_, *, /, 1, 2, 3...)
  enthalten.
  <br />
  <br />
  Sobald Sie bereit sind, zögern Sie nicht, das Experiment mithilfe eines Klicks auf das <strong>Mit dem Experiment beginnen</strong>-Feld.
  <p style="text-align:center;"><img src="images/picture_phase1.png" alt="instructions" height="300" width="400"></p>`,
  buttonText: 'Mit dem Experiment beginnen'
});


//instruction for phase 2 ---- Name-Gender Check

const name_check_instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'name_check_instructions',
  title: 'Instruktionen',
  text: `Gratulation, der erste Teil des Experiments ist geschafft.
  <br />
  Im zweiten Teil des Experiments sind Sie nun dazu aufgefordert,
  sich mit den von Ihnen gewählten Namen aus der ersten Phase zu befassen.
  <br />
  <br />
  Genauer gesagt, ist es Ihre Aufgabe, zu beurteilen, ob die von Ihnen gewählten Namen eher <strong>weibliche</strong> oder
  <strong>männliche</strong> Individuen beschreiben. Dafür werden Ihnen die Namen einzeln präsentiert und Sie sollen den
  eingeblendeten Namen in eine der durch Felder markierten Kategorien <strong>weiblich</strong> oder <strong>männlich</strong> einordnen.
  <br />
  <br />
  Falls ein Name beiden Geschlechtern zugeordnet werden kann, lassen Sie Ihr Bauchgefühl entscheiden.
  <br />
  <br />
  Wenn Sie bereit sind, betätigen Sie den <strong>Mit dem Experiment fortfahren</strong>-Button.
  <p style="text-align:center;"><img src="images/picture_phase2.png" alt="instructions" height="auto" width="auto"></p>`,
  buttonText: 'Mit dem Experiment fortfahren'
});

//instruction for phase 3 ---- Stereotype Check


const stereotype_check_instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions phase 3',
  title: 'Instruktionen',
  text: `Gut gemacht, Sie haben den zweiten Teil des Experiments abgeschlossen und müssen nun nur noch einen letzten Teil bearbeiten.
  <br />
  <br />
  In der dritten Aufgabe sollen Sie erneut Wörter bewerten. Hierbei handelt es sich allerdings nicht um die von Ihnen gewählten Namen,
  sondern um Substantive, die Personen beschreiben (Beispiel: Kollegen). Auch hier Sie sollen intuitiv entscheiden, ob die beschriebene Personengruppe
  für Sie eher männlich, weiblich oder neutral besetzt ist.
  <br />
  <br />
  Um mit der letzten Phase des Experiments zu beginnen, klicken Sie bitte auf den <strong>Mit dem Experiment fortfahren</strong>-Button.
  <p style="text-align:center;"><img src="images/picture_phase3.png" alt="instructions" height="300" width="400"></p>`,
  buttonText: 'Mit dem Experiment fortfahren'
});


// In the post test questionnaire we ask the participants addtional questions
const post_test_customized = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Zusätzliche Informationen',
  text: ' Großartig, Sie sind beinahe am Ende. Im allerletzten Schritt, bitten wir Sie darum, die folgenden Fragen zu beantworten.',
  buttonText: 'Weiter',

  //translated the default questionair (english) into german
  age_question: 'Alter',
  gender_question: 'Geschlecht',
  gender_male: 'männlich',
  gender_female: 'weiblich',
  gender_other: 'divers',
  edu_question: 'Höchster Bildungsabschluss',
  edu_graduated_high_school: 'Abitur',
  edu_graduated_college: 'Hochschulabschluss',
  edu_higher_degree: 'Universitärer Abschluss',
  languages_question: 'Muttersprache',
  languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  comments_question: 'Weitere Kommentare',
});


// The 'thanks' view
// submit the results
// Say goodbye and thank the participant for participating
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'Danke',
  title: 'Perfekt, Sie sind nun am Ende! Vielen Dank, dass Sie sich die Zeit genommen haben, an unserem Experiment teilzunehmen. Wir wünschen Ihnen einen schönen Tag!:)',
  prolificConfirmText: 'Press the button'
});



/** trial (magpie's Trial Type Views) below
* Obligatory properties
    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects
* Optional properties
    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/
    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/
* All about the properties of trial views
* https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#trial-views
*/


// Here, we initialize a normal textbox input view
// const filler_sentences = magpieViews.view_generator('textbox_input', {
//   //title
//   title: 'Fügen Sie einen passenden Namen ein!',
//   // This will use all trials specified in `textbox_input_trials` in 04_trials.js
//   trials: textbox_input_trials.textbox_input.length,
//   // name should be identical to the variable name
//   name: 'filler_sentences',
//   //shuffle data
//   data: _.shuffle(textbox_input_trials.textbox_input)
// },
// );
const filler_sentences_Babysitter = magpieViews.view_generator('textbox_input', {
  //title
  title: 'Fügen Sie einen passenden Namen ein!',
  // This will use all trials specified in `textbox_input_trials` in 04_trials.js
  trials: 1,
  // name should be identical to the variable name
  name: 'filler_sentences',
  //shuffle data
  data: _.shuffle(textbox_input_trials.textbox_input_Babysitter)
},
);

const filler_sentences_Baletttänzer = magpieViews.view_generator('textbox_input', {
  //title
  title: 'Fügen Sie einen passenden Namen ein!',
  // This will use all trials specified in `textbox_input_trials` in 04_trials.js
  trials: 1,
  // name should be identical to the variable name
  name: 'filler_sentences',
  //shuffle data
  data: _.shuffle(textbox_input_trials.textbox_input_Baletttänzer)
},
);

const filler_sentences_Kassierer = magpieViews.view_generator('textbox_input', {
  //title
  title: 'Fügen Sie einen passenden Namen ein!',
  // This will use all trials specified in `textbox_input_trials` in 04_trials.js
  trials: 1,
  // name should be identical to the variable name
  name: 'filler_sentences',
  //shuffle data
  data: _.shuffle(textbox_input_trials.textbox_input_Kassierer)
},
);

const filler_sentences_Ernährungsberater = magpieViews.view_generator('textbox_input', {
  //title
  title: 'Fügen Sie einen passenden Namen ein!',
  // This will use all trials specified in `textbox_input_trials` in 04_trials.js
  trials: 1,
  // name should be identical to the variable name
  name: 'filler_sentences',
  //shuffle data
  data: _.shuffle(textbox_input_trials.textbox_input_Ernährungsberater)
},
);

const filler_sentences_Floristen = magpieViews.view_generator('textbox_input', {
  //title
  title: 'Fügen Sie einen passenden Namen ein!',
  // This will use all trials specified in `textbox_input_trials` in 04_trials.js
  trials: 1,
  // name should be identical to the variable name
  name: 'filler_sentences',
  //shuffle data
  data: _.shuffle(textbox_input_trials.textbox_input_Floristen)
},
);

const filler_sentences_Flugbegleiter = magpieViews.view_generator('textbox_input', {
  //title
  title: 'Fügen Sie einen passenden Namen ein!',
  // This will use all trials specified in `textbox_input_trials` in 04_trials.js
  trials: 1,
  // name should be identical to the variable name
  name: 'filler_sentences',
  //shuffle data
  data: _.shuffle(textbox_input_trials.textbox_input_Flugbegleiter)
},
);
const filler_sentences_Friseure = magpieViews.view_generator('textbox_input', {
  //title
  title: 'Fügen Sie einen passenden Namen ein!',
  // This will use all trials specified in `textbox_input_trials` in 04_trials.js
  trials: 1,
  // name should be identical to the variable name
  name: 'filler_sentences',
  //shuffle data
  data: _.shuffle(textbox_input_trials.textbox_input_Friseure)
},
);

const filler_sentences_Haushälter = magpieViews.view_generator('textbox_input', {
  //title
  title: 'Fügen Sie einen passenden Namen ein!',
  // This will use all trials specified in `textbox_input_trials` in 04_trials.js
  trials: 1,
  // name should be identical to the variable name
  name: 'filler_sentences',
  //shuffle data
  data: _.shuffle(textbox_input_trials.textbox_input_Haushälter)
},
);

const filler_sentences_Kindergärtner = magpieViews.view_generator('textbox_input', {
  //title
  title: 'Fügen Sie einen passenden Namen ein!',
  // This will use all trials specified in `textbox_input_trials` in 04_trials.js
  trials: 1,
  // name should be identical to the variable name
  name: 'filler_sentences',
  //shuffle data
  data: _.shuffle(textbox_input_trials.textbox_input_Kindergärtner)
},
);

const filler_sentences_Grundschullehrer = magpieViews.view_generator('textbox_input', {
  //title
  title: 'Fügen Sie einen passenden Namen ein!',
  // This will use all trials specified in `textbox_input_trials` in 04_trials.js
  trials: 1,
  // name should be identical to the variable name
  name: 'filler_sentences',
  //shuffle data
  data: _.shuffle(textbox_input_trials.textbox_input_Grundschullehrer)
},
);

const filler_sentences_Autoren = magpieViews.view_generator('textbox_input', {
  //title
  title: 'Fügen Sie einen passenden Namen ein!',
  // This will use all trials specified in `textbox_input_trials` in 04_trials.js
  trials: 1,
  // name should be identical to the variable name
  name: 'filler_sentences',
  //shuffle data
  data: _.shuffle(textbox_input_trials.textbox_input_Autoren)
},
);


const filler_sentences_Schneider = magpieViews.view_generator('textbox_input', {
  //title
  title: 'Fügen Sie einen passenden Namen ein!',
  // This will use all trials specified in `textbox_input_trials` in 04_trials.js
  trials: 1,
  // name should be identical to the variable name
  name: 'filler_sentences',
  //shuffle data
  data: _.shuffle(textbox_input_trials.textbox_input_Schneider)
},
);

const filler_sentences_Astronauten = magpieViews.view_generator('textbox_input', {
  //title
  title: 'Fügen Sie einen passenden Namen ein!',
  // This will use all trials specified in `textbox_input_trials` in 04_trials.js
  trials: 1,
  // name should be identical to the variable name
  name: 'filler_sentences',
  //shuffle data
  data: _.shuffle(textbox_input_trials.textbox_input_Astronauten)
},
);

const filler_sentences_Metzger = magpieViews.view_generator('textbox_input', {
  //title
  title: 'Fügen Sie einen passenden Namen ein!',
  // This will use all trials specified in `textbox_input_trials` in 04_trials.js
  trials: 1,
  // name should be identical to the variable name
  name: 'filler_sentences',
  //shuffle data
  data: _.shuffle(textbox_input_trials.textbox_input_Metzger)
},
);

const filler_sentences_Programmierer = magpieViews.view_generator('textbox_input', {
  //title
  title: 'Fügen Sie einen passenden Namen ein!',
  // This will use all trials specified in `textbox_input_trials` in 04_trials.js
  trials: 1,
  // name should be identical to the variable name
  name: 'filler_sentences',
  //shuffle data
  data: _.shuffle(textbox_input_trials.textbox_input_Programmierer)
},
);

const filler_sentences_Manager = magpieViews.view_generator('textbox_input', {
  //title
  title: 'Fügen Sie einen passenden Namen ein!',
  // This will use all trials specified in `textbox_input_trials` in 04_trials.js
  trials: 1,
  // name should be identical to the variable name
  name: 'filler_sentences',
  //shuffle data
  data: _.shuffle(textbox_input_trials.textbox_input_Manager)
},
);

const filler_sentences_Bürgermeister = magpieViews.view_generator('textbox_input', {
  //title
  title: 'Fügen Sie einen passenden Namen ein!',
  // This will use all trials specified in `textbox_input_trials` in 04_trials.js
  trials: 1,
  // name should be identical to the variable name
  name: 'filler_sentences',
  //shuffle data
  data: _.shuffle(textbox_input_trials.textbox_input_Bürgermeister)
},
);

const filler_sentences_Mörder = magpieViews.view_generator('textbox_input', {
  //title
  title: 'Fügen Sie einen passenden Namen ein!',
  // This will use all trials specified in `textbox_input_trials` in 04_trials.js
  trials: 1,
  // name should be identical to the variable name
  name: 'filler_sentences',
  //shuffle data
  data: _.shuffle(textbox_input_trials.textbox_input_Mörder)
},
);

const filler_sentences_Piloten = magpieViews.view_generator('textbox_input', {
  //title
  title: 'Fügen Sie einen passenden Namen ein!',
  // This will use all trials specified in `textbox_input_trials` in 04_trials.js
  trials: 1,
  // name should be identical to the variable name
  name: 'filler_sentences',
  //shuffle data
  data: _.shuffle(textbox_input_trials.textbox_input_Piloten)
},
);

const filler_sentences_Präsidenten = magpieViews.view_generator('textbox_input', {
  //title
  title: 'Fügen Sie einen passenden Namen ein!',
  // This will use all trials specified in `textbox_input_trials` in 04_trials.js
  trials: 1,
  // name should be identical to the variable name
  name: 'filler_sentences',
  //shuffle data
  data: _.shuffle(textbox_input_trials.textbox_input_Präsidenten)
},
);

const filler_sentences_Privatdetektive = magpieViews.view_generator('textbox_input', {
  //title
  title: 'Fügen Sie einen passenden Namen ein!',
  // This will use all trials specified in `textbox_input_trials` in 04_trials.js
  trials: 1,
  // name should be identical to the variable name
  name: 'filler_sentences',
  //shuffle data
  data: _.shuffle(textbox_input_trials.textbox_input_Privatdetektive)
},
);

const filler_sentences_Soldaten = magpieViews.view_generator('textbox_input', {
  //title
  title: 'Fügen Sie einen passenden Namen ein!',
  // This will use all trials specified in `textbox_input_trials` in 04_trials.js
  trials: 1,
  // name should be identical to the variable name
  name: 'filler_sentences',
  //shuffle data
  data: _.shuffle(textbox_input_trials.textbox_input_Soldaten)
},
);

const filler_sentences_Chirurgen = magpieViews.view_generator('textbox_input', {
  //title
  title: 'Fügen Sie einen passenden Namen ein!',
  // This will use all trials specified in `textbox_input_trials` in 04_trials.js
  trials: 1,
  // name should be identical to the variable name
  name: 'filler_sentences',
  //shuffle data
  data: _.shuffle(textbox_input_trials.textbox_input_Chirurgen)
},
);

const filler_sentences_Taxifahrer = magpieViews.view_generator('textbox_input', {
  //title
  title: 'Fügen Sie einen passenden Namen ein!',
  // This will use all trials specified in `textbox_input_trials` in 04_trials.js
  trials: 1,
  // name should be identical to the variable name
  name: 'filler_sentences',
  //shuffle data
  data: _.shuffle(textbox_input_trials.textbox_input_Taxifahrer)
},
);

const filler_sentences_Künstler = magpieViews.view_generator('textbox_input', {
  //title
  title: 'Fügen Sie einen passenden Namen ein!',
  // This will use all trials specified in `textbox_input_trials` in 04_trials.js
  trials: 1,
  // name should be identical to the variable name
  name: 'filler_sentences',
  //shuffle data
  data: _.shuffle(textbox_input_trials.textbox_input_Künstler)
},
);

const filler_sentences_Sportler = magpieViews.view_generator('textbox_input', {
  //title
  title: 'Fügen Sie einen passenden Namen ein!',
  // This will use all trials specified in `textbox_input_trials` in 04_trials.js
  trials: 1,
  // name should be identical to the variable name
  name: 'filler_sentences',
  //shuffle data
  data: _.shuffle(textbox_input_trials.textbox_input_Sportler)
},
);
const filler_sentences_Hundehalter = magpieViews.view_generator('textbox_input', {
  //title
  title: 'Fügen Sie einen passenden Namen ein!',
  // This will use all trials specified in `textbox_input_trials` in 04_trials.js
  trials: 1,
  // name should be identical to the variable name
  name: 'filler_sentences',
  //shuffle data
  data: _.shuffle(textbox_input_trials.textbox_input_Hundehalter)
},
);

const filler_sentences_Immmobilienmakler = magpieViews.view_generator('textbox_input', {
  //title
  title: 'Fügen Sie einen passenden Namen ein!',
  // This will use all trials specified in `textbox_input_trials` in 04_trials.js
  trials: 1,
  // name should be identical to the variable name
  name: 'filler_sentences',
  //shuffle data
  data: _.shuffle(textbox_input_trials.textbox_input_Immobilienmakler)
},
);

const filler_sentences_Journalisten = magpieViews.view_generator('textbox_input', {
  //title
  title: 'Fügen Sie einen passenden Namen ein!',
  // This will use all trials specified in `textbox_input_trials` in 04_trials.js
  trials: 1,
  // name should be identical to the variable name
  name: 'filler_sentences',
  //shuffle data
  data: _.shuffle(textbox_input_trials.textbox_input_Journalisten)
},
);

const filler_sentences_Mieter = magpieViews.view_generator('textbox_input', {
  //title
  title: 'Fügen Sie einen passenden Namen ein!',
  // This will use all trials specified in `textbox_input_trials` in 04_trials.js
  trials: 1,
  // name should be identical to the variable name
  name: 'filler_sentences',
  //shuffle data
  data: _.shuffle(textbox_input_trials.textbox_input_Mieter)
},
);

const filler_sentences_Patienten = magpieViews.view_generator('textbox_input', {
  //title
  title: 'Fügen Sie einen passenden Namen ein!',
  // This will use all trials specified in `textbox_input_trials` in 04_trials.js
  trials: 1,
  // name should be identical to the variable name
  name: 'filler_sentences',
  //shuffle data
  data: _.shuffle(textbox_input_trials.textbox_input_Patienten)
},
);

const filler_sentences_Fotografen = magpieViews.view_generator('textbox_input', {
  //title
  title: 'Fügen Sie einen passenden Namen ein!',
  // This will use all trials specified in `textbox_input_trials` in 04_trials.js
  trials: 1,
  // name should be identical to the variable name
  name: 'filler_sentences',
  //shuffle data
  data: _.shuffle(textbox_input_trials.textbox_input_Fotografen)
},
);

const filler_sentences_Mediziner = magpieViews.view_generator('textbox_input', {
  //title
  title: 'Fügen Sie einen passenden Namen ein!',
  // This will use all trials specified in `textbox_input_trials` in 04_trials.js
  trials: 1,
  // name should be identical to the variable name
  name: 'filler_sentences',
  //shuffle data
  data: _.shuffle(textbox_input_trials.textbox_input_Mediziner)
},
);

const filler_sentences_Aktivisten = magpieViews.view_generator('textbox_input', {
  //title
  title: 'Fügen Sie einen passenden Namen ein!',
  // This will use all trials specified in `textbox_input_trials` in 04_trials.js
  trials: 1,
  // name should be identical to the variable name
  name: 'filler_sentences',
  //shuffle data
  data: _.shuffle(textbox_input_trials.textbox_input_Aktivisten)
},
);

const filler_sentences_Psychiater = magpieViews.view_generator('textbox_input', {
  //title
  title: 'Fügen Sie einen passenden Namen ein!',
  // This will use all trials specified in `textbox_input_trials` in 04_trials.js
  trials: 1,
  // name should be identical to the variable name
  name: 'filler_sentences',
  //shuffle data
  data: _.shuffle(textbox_input_trials.textbox_input_Psychiater)
},
);

const filler_sentences_Studenten = magpieViews.view_generator('textbox_input', {
  //title
  title: 'Fügen Sie einen passenden Namen ein!',
  // This will use all trials specified in `textbox_input_trials` in 04_trials.js
  trials: 1,
  // name should be identical to the variable name
  name: 'filler_sentences',
  //shuffle data
  data: _.shuffle(textbox_input_trials.textbox_input_Studenten)
},
);


const name_check = forced_choice_2A_customized({
  trials: 36,
  name: 'name_check',
  data: textbox_input_trials.iteration,
});

// Initialization of a forced_choice view with a custom answer container
// forced choice of three instead of two alternatives

const stereotype_check = magpieViews.view_generator(
    "forced_choice",
    {
        // This will use all trials specified in `forced_choice_3A_trials' in 04_trials.js
        trials: forced_choice_3A_trials.forced_choice.length,
        // name should be identical to the variable name
        name: 'forced_choice_3A',
        //shuffle
        data: _.shuffle(forced_choice_3A_trials.forced_choice)
    },
    {
      // initialize three alternatives
        answer_container_generator:  function (config, CT) {
         return `<div class='magpie-view-answer-container'>
                 <p class='magpie-view-question'>${config.data[CT].question}</p>
                 <label for='o1' class='magpie-response-buttons'>${config.data[CT].option1}</label>
                 <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                 <label for='o2' class='magpie-response-buttons'>${config.data[CT].option2}</label>
                 <input type='radio' name='answer' id='o2' value=${config.data[CT].option2} />
                 <label for='o2' class='magpie-response-buttons'>${config.data[CT].option3}</label>
                 <input type='radio' name='answer' id='o3' value=${config.data[CT].option3} />
                 </div>`;
    }
    }
);
