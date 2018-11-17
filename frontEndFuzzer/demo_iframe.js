// LINK TESTING 
// Check that all links are valid (no broken links)
var links = document.querySelectorAll('a');
for (var curr_website = 0; curr_website < links.length; curr_website++) {
    check_links(links[curr_website].href);
    console.log(links[curr_website].href);
}

// function check_links(URL) {
//     fetch(URL)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(myJson) {
//             console.log(JSON.stringify(myJson));
//         });
// }
// // --------------------------------------------------------------------- //
// BUTTON TESTING
// Check when a button has been selected
var buttons = document.getElementsByClassName("radio_button");

// function check_buttons(button) {
//     console.log("Reached here");

// }



