import { convertTextToImage, extractTextFromImage } from "textifyimage";

// IMAGE TO TEXT
// returns a promise
var test = extractTextFromImage("test.jpg");
// callback for the promise
test.then((data) => console.log(data)).catch((error) => console.log(error));

// TEXT TO IMAGE
const text = "Hello, World Text!";
const outputPath = "output.png";

// returns a callback. handle it with then and catch
convertTextToImage({
  text,
  outputPath,
  fontSize: "30px",
  fontName: "Arial",
  textColor: "rgb(0,0,0)",
  backgroundColor: "orange",
  width: 200,
  height: 200,
  lineHeight: 30,
  textAlignment: "start",
  x: 0,
  y: 30,
})
  .then(() => {
    console.log(`Image saved to ${outputPath}`);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
