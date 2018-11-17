// Questions: 
// Should I specify the randomizing input to include only letters, only punctuation, etc?

function randomizeInput() {
    // All characters that can be combined to generate random input
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[]?><,.";
   
    // Get a random integer to represent the length of the input.
    lenOfInput = generateRandomNum(); 

    // Initialize the random input as an empty string
    randInput = ""; 

    // Choose a random character with length of lenOfInput
    for (var i = 0; i < lenOfInput; i++) {
        randInput += characters.charAt(Math.floor(Math.random() * characters.length));
    } 

    return randInput;   
}

function generateRandomNum() {
    // Genereate a random number between 0 and 100 
    var randomNum = Math.floor(Math.random() * 101);
    return randomNum; 
}

function refreshPage() 
    // After a crash has been found and it has 
    // TODO: displayed the error message, display a button to refresh page. 
    location.reload(); 
}

// FOR TESTING: 
// console.log(randomizeInput());