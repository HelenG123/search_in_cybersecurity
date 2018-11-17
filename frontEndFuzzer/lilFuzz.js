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

function refreshPage() {
    // After a crash has been found, display a button that
    // triggers a page to refresh. 
    location.reload();
}

function randomClick() {
    // Randomly select a part of the DOM, then click
    // Reference: https://www.w3schools.com/jsref/met_html_click.asp 

    // document.getElementByTagName(getRandom()) ??? 
}

function testForBrokenLinks() {
    // INCOMPLETE!!
    // Collect all links on the web page/document
    var links = document.getElementsByTagName('a');

    // Check to see if links are broken and return a 404 status code
    for (var i = 0; i < links.length; i++) {
        fetch(links[i].href)
            .then(function(response) {
                console.log(response.status);
                if (response.status == 400) {
                    console.log("Broken!")
                }
                else {
                    console.log("Probably working...");
                }
            });
    }


}


// FOR TESTING: 
// console.log(randomizeInput());
