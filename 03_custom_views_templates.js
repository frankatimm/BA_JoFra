// In this file you can create your own custom view templates


// A view template is a function that returns a view,
// this functions gets some config (e.g. trial_data, name, etc.) information as input
// A view is an object, that has a name, CT (the counter of how many times this view occurred in the experiment),
// trials the maximum number of times this view is repeated
// and a render function, the render function gets CT and the magpie-object as input
// and has to call magpie.findNextView() eventually to proceed to the next view (or the next trial in this view),
// if it is an trial view it also makes sense to call magpie.trial_data.push(trial_data) to save the trial information
const forced_choice_2A_customized = function(config) {
  const view = {
    name: config.name,
    CT: 0,
    trials: config.trials,
    render: function(CT, magpie) {
      console.log(magpie.trial_data[CT])
      const startTime = Date.now()
      $("main").html(`
        <div class='magpie-view'>
              <h1 class='magpie-view-title'>Klicke auf eins der Felder!</h1>
              <p class='magpie-view-question'> Würden Sie den Namen <strong>${magpie.trial_data[CT].response}</strong> eher der Kategorie "männlich" oder "weiblich" zuordnen?</p>

        <div class='magpie-view-answer-container'>
              <button id="first" class='magpie-view-button'>weiblich</button>
              <button id="second" class='magpie-view-button'>männlich</button>
        </div>
        `)


        $("input[name=answer]").on("change", function() {
          const RT = Date.now() - startTime;
          let trial_data = {
              // nicht vergessen
              name: magpie.trial_data[0].response,
              trial_name: config.name,
              trial_number: CT + 1,
              response: $("input[name=answer]:checked").val(),
              RT: RT
          };
        }
        // This function will handle  the response
                  const handle_click = function(e){
                        // We will just save the response and continue to the next view
                        let trial_data = {
                            trial_name: config.name,
                            trial_number: CT + 1,
                            response: e.target.id,
                        };

                        // Often it makes sense to also save the config information
                        // trial_data = magpieUtils.view.save_config_trial_data(config.data[CT], trial_data);

                        // Here, we save the trial_data
                        magpie.trial_data.push(trial_data);

                        // Now, we will continue with the next view
                        magpie.findNextView();
                    };

                    // We will add the handle_click functions to both buttons
                    $('#first').on("click", handle_click);
                    $('#second').on("click", handle_click);

                    // That's everything for this view
              }  
  return view;
}
