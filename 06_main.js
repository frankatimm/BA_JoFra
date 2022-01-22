// In this file you initialize and configure your experiment using magpieInit

$("document").ready(function() {
    // prevent scrolling when space is pressed
    window.onkeydown = function(e) {
        if (e.keyCode === 32 && e.target === document.body) {
            e.preventDefault();
        }
    };

    // calls magpieInit
    // in debug mode this returns the magpie-object, which you can access in the console of your browser
    // e.g. >> window.magpie_monitor or window.magpie_monitor.findNextView()
    // in all other modes null will be returned
    window.magpie_monitor = magpieInit({
        // You have to specify all views you want to use in this experiment and the order of them
        views_seq: [
          //introduction
          intro,
          general_instructions,
          textbox_input_instructions,
          filler_sentences,
          //after_block_1,
          //forced_choice_2A_instructions,
          //forced_choice_2A,
          //after_block_2,
          forced_choice_3A_instructions,
          forced_choice_3A,
          //post test and thanks
          post_test,
          thanks,
        ],
        // Here, you can specify all information for the deployment
        deploy: {
            experimentID: "292",
            serverAppURL: "https://magpie-demo.herokuapp.com/api/submit_experiment/",
            // Possible deployment methods are:
            // "debug" and "directLink"
            // As well as "MTurk", "MTurkSandbox" and "Prolific"
            deployMethod: "debug",
            contact_email: "franka.timm00@gmail.com",
            prolificURL: "https://app.prolific.ac/submissions/complete?cc=SAMPLE1234"
        },
        // Here, you can specify how the progress bar should look like
        progress_bar: {
            in: [
              // list the view-names of the views for which you want a progress bar
              general_instructions.name,
              textbox_input_instructions.name,
              filler_sentences.name,
              //after_block_1.name,
              //forced_choice_2A_instructions.name,
              //forced_choice_2A.name,
              //after_block_2.name,
              forced_choice_3A_instructions.name,
              forced_choice_3A.name,
              post_test.name,
            ],
             // Possible styles are "default", "separate" and "chunks"
            style: "separate",
            width: 100
        }
    });
});
