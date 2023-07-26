import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFFile from './PDFFile';

export function ReactPdfDemo() {
  return (
    <div>
      <PDFDownloadLink document={<PDFFile />} fileName="damiansPDF">
        {({ loading }) =>
          loading ? <button>Loading...</button> : <button>Download</button>
        }
      </PDFDownloadLink>
    </div>
  );
}

export default ReactPdfDemo;
