# TextifyImage

TextifyImage is a JavaScript package that allows you to extract text from images using OCR (Optical Character Recognition) technology.

## Installation

You can install the package using npm:

```bash
npm install textifyimage
```

## Usage

To use the TextifyImage package, follow these steps:

1. Import the `extractTextFromImage` function from the package:

```javascript
import extractTextFromImage from "textifyimage";
```

2. Call the `extractTextFromImage` function, passing the file path or URL of the image as a parameter. The function returns a promise:

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

## License

This package is licensed under the ISC License.
