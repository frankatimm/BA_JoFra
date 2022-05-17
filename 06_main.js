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
        // Here, we specify all views you want to use in this experiment and the order of them
        views_seq: [
          // introduction
          intro,
          // Phase 1 --- filler sentences
          textbox_input_instructions,
          filler_sentences_Babysitter,
          filler_sentences_Baletttänzer,
          filler_sentences_Kassierer,
          filler_sentences_Ernährungsberater,
          filler_sentences_Floristen,
          filler_sentences_Flugbegleiter,
          filler_sentences_Friseure,
          filler_sentences_Haushälter,
          filler_sentences_Kindergärtner,
          filler_sentences_Grundschullehrer,
          filler_sentences_Autoren,
          filler_sentences_Schneider,
          filler_sentences_Astronauten,
          filler_sentences_Metzger,
          filler_sentences_Programmierer,
          filler_sentences_Manager,
          filler_sentences_Bürgermeister,
          filler_sentences_Mörder,
          filler_sentences_Piloten,
          filler_sentences_Präsidenten,
          filler_sentences_Privatdetektive,
          filler_sentences_Soldaten,
          filler_sentences_Chirurgen,
          filler_sentences_Taxifahrer,
          filler_sentences_Künstler,
          filler_sentences_Sportler,
          filler_sentences_Hundehalter,
          filler_sentences_Immmobilienmakler,
          filler_sentences_Journalisten,
          filler_sentences_Mieter,
          filler_sentences_Patienten,
          filler_sentences_Fotografen,
          filler_sentences_Medizinier,
          filler_sentences_Aktivisten,
          filler_sentences_Psychiater,
          filler_sentences_Studenten,
          // Phase 2 --- name review
          name_check_instructions,
          name_check,
          // Phase 3 --- stereotype check
          stereotype_check_instructions,
          stereotype_check,
          //post test and thanks
          post_test_customized,
          thanks,
        ],
        // Here, we specify all information for the deployment
        deploy: {
            experimentID: "302",
            serverAppURL: "https://magpie-demo.herokuapp.com/api/submit_experiment/",
            // Possible deployment methods are:
            // "debug" and "directLink"
            // As well as "MTurk", "MTurkSandbox" and "Prolific"
            deployMethod: "debug",
            contact_email: "franka.timm00@gmail.com",
            prolificURL: "https://app.prolific.ac/submissions/complete?cc=SAMPLE1234"
        },
        // Here, we specify how the progress bar should look like
        progress_bar: {
            in: [
              // list the view-names of the views for which you want a progress bar
              textbox_input_instructions.name,
              filler_sentences_Babysitter.name,
              filler_sentences_Baletttänzer.name,
              filler_sentences_Kassierer.name,
              filler_sentences_Ernährungsberater.name,
              filler_sentences_Floristen.name,
              filler_sentences_Flugbegleiter.name,
              filler_sentences_Friseure.name,
              filler_sentences_Haushälter.name,
              filler_sentences_Kindergärtner.name,
              filler_sentences_Grundschullehrer.name,
              filler_sentences_Autoren.name,
              filler_sentences_Schneider.name.name,
              filler_sentences_Astronauten.name,
              filler_sentences_Metzger.name,
              filler_sentences_Programmierer.name,
              filler_sentences_Manager.name,
              filler_sentences_Bürgermeister.name,
              filler_sentences_Mörder.name,
              filler_sentences_Piloten.name,
              filler_sentences_Präsidenten.name,
              filler_sentences_Privatdetektive.name,
              filler_sentences_Soldaten.name,
              filler_sentences_Chirurgen.name,
              filler_sentences_Taxifahrer.name,
              filler_sentences_Künstler.name,
              filler_sentences_Sportler.name,
              filler_sentences_Hundehalter.name,
              filler_sentences_Immmobilienmakler.name,
              filler_sentences_Journalisten.name,
              filler_sentences_Mieter.name,
              filler_sentences_Patienten.name,
              filler_sentences_Fotografen.name,
              filler_sentences_Medizinier.name,
              filler_sentences_Aktivisten.name,
              filler_sentences_Psychiater.name,
              filler_sentences_Studenten.name,
              name_check_instructions.name,
              name_check.name,
              stereotype_check_instructions.name,
              stereotype_check.name,
              post_test_customized.name,
            ],
             // Possible styles are "default", "separate" and "chunks"
            style: "separate",
            width: 100
        }
    });
});
