import pdfjs from "react-pdf/dist/pdfjs-dist";

pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.js");
export { pdfjs };
