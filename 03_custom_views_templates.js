// In this file you can create your own custom view templates
const custom_views = {};

custom_views.multi_choice_customized = function(config) {
      const forced_choice_customized_function = magpieViews.view_generator(
          "multi_choice",
          // config information
          {
              trials: forced_choice_3A_trials.multi_choice.length,
              name: 'Forced Choice 3A',
              data: forced_choice_3A_trials.multi_choice
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
      return forced_choice_customized_function;


};
