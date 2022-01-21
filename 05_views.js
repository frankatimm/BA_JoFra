//Introduction view: welcome participants

const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  title: 'Welcome!',
  text: `Welcome to our experiment!
  <br />
  <br />
  Thank you for taking your time and contributing to our research.
  You can only take part in this experiment using a computer that is connected to a keyboard.
  <br />
  Before we start, please make sure to not get distracted by anything (e.g. your phone, internet browser,...).
  Make yourself comfortable.
  <br />
  <br />
  If you feel ready to start the experiment, please click on the "begin the experiment"-button down below.`,
  buttonText: 'Begin the experiment'
});


//general instructions

const general_instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'Instructions',
  text: `Before we get started we will provide you with some short instructions and explain what your
  task is going to be.
  <br />
  hier muss unsere instruction hin !!!!!!!!!!!
  <br />
  <br />
  In order to prepare you for the experimental setup you will first run through some practice trials before you proceed to the main task.
  If you feel ready to start the practice trials, please click on the "start with practice trials"-button down below.`,
  buttonText: 'start with practice trials'
});

//instruction in order to proceed to the main trials

const textbox_input_instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'main_instructions',
  title: 'Instructions',
  text: `So far so good!
  You have now finished the practice phase and hopefully well prepared for the main trials.
  They are identical in format and content.
  In order to proceed, press the button below.`,
  buttonText: 'proceed to main trials'
});

const forced_choice_2A_instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_conjunction_2',
  title: 'Instructions',
  text: `The target you are supposed to find is a green T.
  Again, if you detect the target "green T" press L, otherwise press S.`,
  buttonText: 'proceed to trials'
});

const forced_choice_3A_instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_conjunction_2',
  title: 'Instructions',
  text: `The target you are supposed to find is a green T.
  Again, if you detect the target "green T" press L, otherwise press S.`,
  buttonText: 'proceed to trials'
});


//feedback after each block
//little break for participants in order to show that one block is already done
const after_block_1 = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'after_block_1',
  title: 'Take a short break!',
  text: `Good job! You completed one block. If you feel ready to proceed click on the botton below. `,
  buttonText: 'proceed to trials'
});

const after_block_2 = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'after_block_2',
  title: 'Take a short break!',
  text: `Good job! You completed one block. If you feel ready to proceed click on the botton below. `,
  buttonText: 'proceed to trials'
});

// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: ' Good job! You nearly done with the experiment. The last step is to answer the following questions.',

  //Age
  //Education level
  //Mother-tongue
  //Do you think feminism plays an important role in your life?
  //Do you use gender-neutral language?
  //Do your friends use gender-neutral language?
  //Do you think gender-neutral language can improve gender equality?
  //Further comments/ Feedback

});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Perfect, you are done! Thank you for taking part in our experiment!',
  prolificConfirmText: 'Press the button'
});


const filler_sentences = magpieViews.view_generator('textbox_input', {
  trials: 36,
  name: 'filler sentences',
  title: 'Think of a name to put into the white box!',
  min_chars: 2,
  data: _.shuffle(textbox_input_trials.textbox_input)
  }
);

//const forced_choice_2A = magpieViews.view_generator('forced_choice', {
//  trails: 36,
//  data: answer_container_generator.textbox_input,
//});


const forced_choice_3A = custom_views.multi_choice_customized({
  trials: 36 ,
  name: "forced_choice_3A" ,
  data: forced_choice_3A_trials,
});
