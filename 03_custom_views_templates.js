// In this file you can create your own custom view templates


// A view template is a function that returns a view,
// this functions gets some config (e.g. trial_data, name, etc.) information as input
// A view is an object, that has a name, CT (the counter of how many times this view occurred in the experiment),
// trials the maximum number of times this view is repeated
// and a render function, the render function gets CT and the magpie-object as input
// and has to call magpie.findNextView() eventually to proceed to the next view (or the next trial in this view),
// if it is an trial view it also makes sense to call magpie.trial_data.push(trial_data) to save the trial information
const custom_view_template = function(config) {
    const view = {
        name: config.name,
        CT: 0,
        trials: config.trials,
        // The render functions gets the magpie object as well as the current trial in view counter as input
        render: function (CT, magpie) {

          console.log(magpie);

          $("main").html(`<div class='magpie-view'>
                  <h1 class='magpie-view-title'>${config.title}</h1>
                  <p class='magpie-view-question magpie-view-qud'>${config.data[CT].QUD}</p>
                  <div class='magpie-view-stimulus-container'>
                      <div class='magpie-view-stimulus magpie-nodisplay'></div>
                  </div>
              </div>`);


          const handle_filler_sentences = function(e) {
                // We will just save the response and continue to the next view
                let trial_data = {
                    trial_name: config.name,
                    trial_number: CT + 1,
                    response: e.target.id
                };
                // Often it makes sense to also save the config information
                // trial_data = magpieUtils.view.save_config_trial_data(config.data[CT], trial_data);

                // Here, we save the trial_data
                magpie.trial_data.push(trial_data);

                // Now, we will continue with the next view
                magpie.findNextView();
            };

          const answer_container_generator = function(config, CT) {
                  return `<p class='magpie-view-question'>${config.data[CT].question}</p>
                              <div class='magpie-view-answer-container'>
                                  <textarea name='textbox-input' rows=10 cols=50 class='magpie-response-text' />
                              </div>
                              <button id='next' class='magpie-view-button magpie-nodisplay'>next</button>`;
              };

          const handle_response_function = function(config, CT, magpie, answer_container_generator, startingTime) {
                  let next;
                  let textInput;
                  const minChars = config.data[CT].min_chars === undefined ? 10 : config.data[CT].min_chars;

                  $(".magpie-view").append(answer_container_generator(config, CT));

                  next = $("#next");
                  textInput = $("textarea");

                  // attaches an event listener to the textbox input
                  textInput.on("keyup", function() {
                      // if the text is longer than (in this case) 10 characters without the spaces
                      // the 'next' button appears
                      if (textInput.val().trim().length > minChars) {
                          next.removeClass("magpie-nodisplay");
                      } else {
                          next.addClass("magpie-nodisplay");
                      }
                  });

                  // the trial data gets added to the trial object
                  next.on("click", function() {
                      const RT = Date.now() - startingTime; // measure RT before anything else
                      let trial_data = {
                          trial_name: config.name,
                          trial_number: CT + 1,
                          response: textInput.val().trim(),
                          RT: RT
                      };

            trial_data = magpieUtils.view.save_config_trial_data(config.data[CT], trial_data);

            magpie.trial_data.push(trial_data);
            magpie.findNextView();
        });
    };


            // Here, you can do whatever you want, eventually you should call magpie.findNextView()
            // to proceed to the next view and if it is an trial type view,
            // you should save the trial information with magpie.trial_data.push(trial_data)
        }
    };
    // We have to return the view, so that it can be used in 05_views.js
    return view;
};
