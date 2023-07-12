import { createWorker } from "tesseract.js";
import { createCanvas } from "canvas";
import fs from "fs";

const worker = await createWorker();

var extractTextFromImage = async (imagePath) => {
  await worker.loadLanguage("eng");
  await worker.initialize("eng");
  const {
    data: { text },
  } = await worker.recognize(imagePath);
  await worker.terminate();
  return text;
};

function convertTextToImage({
  text,
  outputPath,
  fontSize = "16px",
  fontName = "Arial",
  textColor = "black",
  backgroundColor = "white",
  width = 400,
  height = 200,
  lineHeight = 24,
  textAlignment = "center",
  x = null,
  y = null,
}) {
  const canvas = createCanvas(width, height);
  const context = canvas.getContext("2d");

  context.fillStyle = backgroundColor;
  context.fillRect(0, 0, width, height);

  // registerFont('path/to/font.ttf', { family: fontName });

  context.font = `${fontSize} ${fontName}`;
  context.fillStyle = textColor;
  context.textAlign = textAlignment;

  const words = text.split(" ");
  let line = "";
  let yPos = y !== null ? y : height / 2 - (lineHeight * words.length) / 2;
  let xPos = x !== null ? x : width / 2;

  for (let i = 0; i < words.length; i++) {
    const testLine = line + words[i] + " ";
    const metrics = context.measureText(testLine);
    const testWidth = metrics.width;

    if (testWidth > width && i > 0) {
      context.fillText(line.trim(), xPos, yPos);
      line = words[i] + " ";
      yPos += lineHeight;
    } else {
      line = testLine;
      xPos = (width - metrics.width) / 2;
    }
  }

  context.fillText(line.trim(), xPos, yPos);

  return new Promise((resolve, reject) => {
    const writeStream = fs.createWriteStream(outputPath);
    const stream = canvas.createPNGStream();

    stream.pipe(writeStream);
    writeStream.on("finish", () => resolve());
    writeStream.on("error", (error) => reject(error));
  });
}

export { extractTextFromImage, convertTextToImage };
