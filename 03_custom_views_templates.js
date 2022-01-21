// In this file you can create your own custom view templates


// A view template is a function that returns a view,
// this functions gets some config (e.g. trial_data, name, etc.) information as input
// A view is an object, that has a name, CT (the counter of how many times this view occurred in the experiment),
// trials the maximum number of times this view is repeated
// and a render function, the render function gets CT and the magpie-object as input
// and has to call magpie.findNextView() eventually to proceed to the next view (or the next trial in this view),
// if it is an trial view it also makes sense to call magpie.trial_data.push(trial_data) to save the trial information

const forced_choice_customized = magpieViews.view_generator(
    "forced_choice",
    // config information
    {
      trials: part_one_trial_info.forced_choice.length,
      name: 'rebuilt_FC',
      data: part_one_trial_info.forced_choice
    },
    // custom generator functions
    {
      answer_container_generator: function (config, CT) {
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
