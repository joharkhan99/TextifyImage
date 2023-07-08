import { createWorker } from "tesseract.js";

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

export default extractTextFromImage;
