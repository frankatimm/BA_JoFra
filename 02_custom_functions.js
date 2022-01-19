
//generating random participant IDs
const dec2hex = function(dec) {
    return ("0" + dec.toString(16)).substr(-2);
};

// generateId :: Integer -> String
const generateID = function(len) {
    let arr = new Uint8Array((len || 40) /2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, this.dec2hex).join("");
};

// Error feedback if participants exceeds the time for responding
const time_limit = function(data, next) {
    if (typeof window.timeout === 'undefined'){
        window.timeout = [];
    }
    // Add timeouts to the timeoutarray
    // Reminds the participant to respond after 45 seconds
    window.timeout.push(setTimeout(function(){
          $('#reminder').text('Please answer more quickly!');
    }, 45000));
    next();
};

// compares the chosen answer to the value of `option1`
// check gender of name? --> personalized data list

//const save_response = function(data,next){
    //var array_names = new Array[];
    //array_names.push('input[name=anser]');
//};


check_response = function(data, next) {
    $('input[name=answer]').on('change', function(e) {
        if (e.target.value === data.correct) {
            alert('Correct!'+ 'Your reaction time is' + data.RT);
        } else {
            alert('Incorrect! The correct answer was ', data.correct, 'Your reaction time is', data.RT);
        }
        next();
    })
};
