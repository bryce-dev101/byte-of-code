import { PDFDownloadLink } from '@react-pdf/renderer';
import { CVDocument } from '../CVDocument';

export function DownloadCVButton() {
  return (
    <PDFDownloadLink
      document={<CVDocument />}
      fileName="Bryce_Ferguson_CV.pdf"
      className="inline-flex items-center px-6 py-3 rounded-xl text-sm font-bold bg-yellow-400 text-black hover:brightness-110"
    >
      {({ loading }) => loading ? 'Preparing PDF…' : 'Download CV'}
    </PDFDownloadLink>
  );
}