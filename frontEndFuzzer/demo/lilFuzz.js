// Questions: 
// Should I specify the randomizing input to include only letters, only punctuation, etc?

function randomizeInput() {
    // All characters that can be combined to generate random input
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[]?><,.";
   
    // Get a random integer to represent the length of the input.
    lenOfInput = generateRandomNum(); 

    // Initialize the random input as an empty string
    randInput = ""; 

    // Choose a random character with length == lenOfInput
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
    // TODO: Delete when transferred to React or a diff environment.
    // After a crash has been found, display a button that
    // triggers a page to refresh. 
    location.reload();
}

function randomClick() {
    // Randomly select a part of the DOM, then click
    // Reference: https://www.w3schools.com/jsref/met_html_click.asp 

    // document.getElementByTagName(getRandom()) ??? 
}

function randomItemFrom(inputArr) {
    return inputArr[Math.floor(Math.random() * inputArr.length)];
}

function generateHexCode() {
    // Generate a random hex code 
    // Reference: https://stackoverflow.com/questions/20553036/random-color-in-jquery
    var rand = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f' ];
    var color = '#' + rand[Math.ceil(Math.random() * 15)] + 
        rand[Math.ceil(Math.random() * 15)] + 
        rand[Math.ceil(Math.random() * 15)] + 
        rand[Math.ceil(Math.random() * 15)] + 
        rand[Math.ceil(Math.random() * 15)] + 
        rand[Math.ceil(Math.random() * 15)];
    return color; 
}

function randomDropDownSelect() {
    // TODO
}

function collectAllButtons(buttonType) {
    var buttons = document.getElementsByTagName('input');
    console.log(buttons);
    if (buttonType == "classic") {
        var classicButtons = [];
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].type == "button") {
                classicButtons.push(buttons[i]);
            }
        }
        return classicButtons;
    }
    if (buttonType == "radio") {
        var radioButtons = [];
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].type == "radio") {
                radioButtons.push(buttons[i]);
            }
        }
        return radioButtons;
    }
    
}

async function testForBrokenLinks() {
    // Collect all links on the web page/document
    var links = document.getElementsByTagName('a');
    console.log(links);
    brokenLinks = [];

    // Check to see if links are broken and return a 404 status code
    for (var i = 0; i < links.length; i++) {
        fetch(links[i].href, {mode: 'no-cors'})
            .then(function(response) {
                // console.log(response.status);
                if (response.status == 400) {
                    console.log("Broken!");
                    brokenLinks.append(links[i].href);
                }
                else {
                    // console.log("Probably working...");
                }
            });
        return brokenLinks;
        
    }
}

function testForSQLInjection(userInput) {
    // Inject a SQL statement that will always evaluate to true
    sqlStatement = "0 or 1=1";
    userInput = userInput + sqlStatement;

    action = "<script type='text/javascript'> window.location.href='www.google.com'; </script>"; 

    return userInput, action;

}


