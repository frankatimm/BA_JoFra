// In this file you can instantiate your views
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

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  title: 'Welcome!',
  text: `Welcome to our experiment!
  <br />
  <br />
  Thank you for taking your time and contributing to our research.
  <br />
  Before you start, make sure you are meeting the following requirements:
  <br />
  - You are running this experiment on a device with a stable internet connection.
  - You have approximately 30 minutes time to complete the full exercise.
  - You are in a calm and comfortable environment that allows you to focus on the task.
  <br />
  <br />
  <br />
  If you feel ready to start the experiment, please click on the "Begin the experiment"-button down below.`,
  buttonText: 'Begin the experiment'
});

// For most tasks, you need instructions views
const general_instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'General Instructions',
  text: `Before we get started we will provide you with some short instructions and explain what your
  task is going to be.
  <br />
  In the following exercise, sentences will be presented to you on your screen. The scheme of those sentences will remain
  just about the same during the full first task of this experiment. The first sentence is a complete sentence that
  describes a situation which the second sentence picks up. Your task is going to be to complete the second sentence
  by inserting a name into the box which will be shown below the text and it should be the name that you think fits
  best at the empty space of the second sentence.
  You are allowed to repeat names and choose as many upper- and lowercase letters as you wish but it is important that you answers
  contain surnames only that you are not using special characters of any kind (_, *, /, 1, 2, 3...)
  <br />
  <br />
  In order to prepare you for the experimental setup you will first run through some practice trials before you proceed to the main task.
  If you feel ready to start the practice trials, please click on the "start with practice trials"-button down below.`,
  buttonText: 'start with trials'
});

//instruction in order to proceed to the textbox input trials

const textbox_input_instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'main_instructions',
  title: 'Instructions',
  text: `So far so good!
  You have now finished the practice phase and are hopefully well prepared for the main trials.
  They are identical in format and content.
  In order to proceed, press the button below.`,
  buttonText: 'proceed to trials'
});

const forced_choice_2A_instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_conjunction_2',
  title: 'Instructions',
  text: `You successfully reached the end of the first part of the experiment and will now go on with
  the second block in which you are asked to work with the earlier inserted names. More precisely, you will see
  the names you chose to fill in the boxes of task 1 again and are asked to assess if for your personal understanding
  the name at question is either used to describe female individuals or male ones. Click the button which suits
  your idea better even though you might feel like some names could describe both sexes. A clear decision is necessary since
  you cannot proceed with the task otherwise.
  <br />
  If you feel ready press the 'Proceed to trials'-button.`,
  buttonText: 'proceed to trials'
});

const forced_choice_3A_instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_conjunction_2',
  title: 'Instructions',
  text: `Great job, you completed the second task of the experiment and there is only one more in order to
  finish. In the third task you are asked again to rate words. This time you will be represented role nouns
  and your task is to decide intuitively to which of the categories
  <strong female strong>, <strong male strong> and <strong neutral strong>
  you would assign each one of them.
  <br />
  To start the last block, click on the 'Proceed to trials'-button. `,
  buttonText: 'proceed to trials'
});

//feedback after each block
//little break for participants in order to show that one block is already done
//const after_block_1 = magpieViews.view_generator("instructions", {
  //trials: 1,
  //name: 'after_block_1',
  //title: 'Take a short break!',
  //text: `Good job! You completed one block. If you feel ready to proceed click on the botton below. `,
  //buttonText: 'proceed to trials'
//});

//const after_block_2 = magpieViews.view_generator("instructions", {
  //trials: 1,
  //name: 'after_block_2',
  //title: 'Take a short break!',
  //text: `Good job! You completed one block. If you feel ready to proceed click on the botton below. `,
  //buttonText: 'proceed to trials'
//});

// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: ' Good job! You nearly done with the experiment. The last step is to answer the following questions.',

  // You can change much of what appears here, e.g., to present it in a different language, as follows:
  // buttonText: 'Weiter',
  // age_question: 'Alter',
  // gender_question: 'Geschlecht',
  // gender_male: 'männlich',
  // gender_female: 'weiblich',
  // gender_other: 'divers',
  // edu_question: 'Höchster Bildungsabschluss',
  // edu_graduated_high_school: 'Abitur',
  // edu_graduated_college: 'Hochschulabschluss',
  // edu_higher_degree: 'Universitärer Abschluss',
  // languages_question: 'Muttersprache',
  // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Perfect, you are done! Thank you for taking part in our experiment! Have a great day!:)',
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


// Here, we initialize a normal forced_choice view
const filler_sentences = magpieViews.view_generator('textbox_input', {
  // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
  trials: 36,
  // name should be identical to the variable name
  name: 'filler_sentences',
  data: _.shuffle(textbox_input_trials.textbox_input), //shuffle
  // you can add custom functions at different stages through a view's life cycle
  // hook: {
  //     after_response_enabled: check_response
  // }
});


//const forced_choice_3A = magpieViews.view_generator('forced_choice',{
//  trials: forced_choice_3A_trials.forced_choice.length,
  //name: 'forced_choice_3A',
  //data: forced_choice_3A_trials.forced_choice, //shuffle,
  // We add our custom generators here
  //stimulus_container_generator: forced_choice_customized.stimulus_container_gen,
  //answer_container_generator: forced_choice_customized.answer_container_gen,
  //handle_response_function: forced_choice_customized.handle_response_function
//});

// Here, we initialize a forced_choice view with a custom answer container
// We added an additional title above the question
const forced_choice_3A = magpieViews.view_generator(
    "forced_choice",
    {
        // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
        trials: forced_choice_3A_trials.forced_choice.length,
        // name should be identical to the variable name
        name: 'forced_choice_3A',
        data: _.shuffle(forced_choice_3A_trials.forced_choice)
    },
    {
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

// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale
