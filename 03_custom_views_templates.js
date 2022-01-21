// In this file you can create your own custom view templates


// A view template is a function that returns a view,
// this functions gets some config (e.g. trial_data, name, etc.) information as input
// A view is an object, that has a name, CT (the counter of how many times this view occurred in the experiment),
// trials the maximum number of times this view is repeated
// and a render function, the render function gets CT and the magpie-object as input
// and has to call magpie.findNextView() eventually to proceed to the next view (or the next trial in this view),
// if it is an trial view it also makes sense to call magpie.trial_data.push(trial_data) to save the trial information

// In this file you can create your own custom view templates
const custom_views = {};

const multi_choice_customized = magpieViews.view_generator(
    "multi_choice",
    // config information
  {
      trials: forced_choice_3A_trials.multi_choice.length,
      name: 'forced_choice_3A',
      data: forced_choice_3A_trials.multi_choice
  },
  // custom generator functions
  {
  answer_container_generator: function (config, CT) {
    return `<div class='magpie-view-answer-container magpie-response-multi-dropdown'>
        ${config.data[CT].sentence_chunk_1}
          <div class= 'response-table'>
            <input type='radio' name='answer1' id='o1' style='display:none' value=${config.data[CT].choice_options_1[0]} />
            <label for='o1' class='magpie-response-buttons'>${config.data[CT].choice_options_1[0]}</label>
            <input type='radio' name='answer1' id='o2' style='display:none' value=${config.data[CT].choice_options_1[1]} />
            <label for='o2' class='magpie-response-buttons'>${config.data[CT].choice_options_1[1]}</label>
            <input type='radio' name='answer1' id='o3' style='display:none' value=${config.data[CT].choice_options_1[2]} />
            <label for='o3' class='magpie-response-buttons'>${config.data[CT].choice_options_1[2]}</label>
          </div>
        ${config.data[CT].sentence_chunk_2}
          <div class= 'response-table'>
            <input type='radio' name='answer2' id='p1' style='display:none' value=${config.data[CT].choice_options_2[0]} />
            <label for='p1' class='magpie-response-buttons'>${config.data[CT].choice_options_2[0]}</label>
            <input type='radio' name='answer2' id='p2' style='display:none' value=${config.data[CT].choice_options_2[1]} />
            <label for='p2' class='magpie-response-buttons'>${config.data[CT].choice_options_2[1]}</label>
            <input type='radio' name='answer2' id='p3' style='display:none' value=${config.data[CT].choice_options_2[2]} />
            <label for='p3' class='magpie-response-buttons'>${config.data[CT].choice_options_2[2]}</label>
          </div>
        ${config.data[CT].sentence_chunk_3}
          </div>`;
        }
    }
);
