# TextifyImage

TextifyImage is a JavaScript package that allows you to extract text from images using OCR (Optical Character Recognition) technology.

## Installation

You can install the package using npm:

```bash
npm install textifyimage
```

## Usage

To use the TextifyImage package, follow these steps:

## Image to Text (Extract text from image)

1. Import the `extractTextFromImage` function from the package:

2. Call the `extractTextFromImage` function, passing the file path or URL of the image as a parameter. The function returns a promise:

```javascript
import { extractTextFromImage } from "textifyimage";
```

```javascript
var text = extractTextFromImage("test.jpg");
```

3. Handle the promise using `then` and `catch` to access the extracted text or handle any errors:

```javascript
text
  .then((data) => {
    console.log(data); // Output the extracted text
  })
  .catch((error) => {
    console.log(error); // Handle any errors
  });
```

Please note that the `extractTextFromImage` function returns a promise, which allows you to handle the result asynchronously.

## Image to Text (Extract text from image)

2. Call the `convertTextToImage` function, passing desired parameters. The function returns a promise:

```javascript
import { convertTextToImage } from "textifyimage";
```

3. Handle the promise using `then` and `catch` to access the extracted text or handle any errors:

```javascript
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
```

#### Output

<img src="output.png" alt="output.png" />

Please note that the `convertTextToImage` function returns a promise, which allows you to handle the result asynchronously.

## License

This package is licensed under the ISC License.
