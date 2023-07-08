import extractTextFromImage from "textifyimage";

// returns a promise
var test = extractTextFromImage("test.jpg");
// callback for the promise
test.then((data) => console.log(data)).catch((error) => console.log(error));
