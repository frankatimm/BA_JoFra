// Here, you can define all custom functions, you want to use and initialize some variables

/* Variables
*
*
*/
const coin = _.sample(["head", "tail"]); // You can determine global (random) parameters here
// Declare your variables here



/* Helper functions
*
*
*/


/* For generating random participant IDs */
    // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
// dec2hex :: Integer -> String
const dec2hex = function(dec) {
    return ("0" + dec.toString(16)).substr(-2);
};
// generateId :: Integer -> String
const generateID = function(len) {
    let arr = new Uint8Array((len || 40) /2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, this.dec2hex).join("");
};
// Declare your helper functions here



/* Hooks
*
*
*/

// Error feedback if participants exceeds the time for responding
const time_limit = function(data, next) {
    if (typeof window.timeout === 'undefined'){
        window.timeout = [];
    }
    // Add timeouts to the timeoutarray
    // Reminds the participant to respond after 5 seconds
    window.timeout.push(setTimeout(function(){
          $('#reminder').text('Please answer more quickly!');
    }, 5000));
    next();
};

// compares the chosen answer to the value of `option1`
check_response = function(data, next) {
    $('input[name=answer]').on('change', function(e) {
        if (e.target.value === data.correct) {
            alert('Your answer is correct! Yey!');
        } else {
            alert('Sorry, this answer is incorrect :( The correct answer was ' + data.correct);
        }
        next();
    })
}

// Declare your hooks here


/* Generators for custom view templates, answer container elements and enable response functions
*
*
*/

const custom_views = {};

custom_views.multi_choice_customized = function(config) {
      const multi_choice_customized_function = magpieViews.view_generator(
          "multi_choice",
          // config information
          {
              trials: forced_choice_3A_trials.length,
              name: 'Forced Choice 3A',
              data: forced_choice_3A_trials
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
      return multi_choice_customized_function;


};
