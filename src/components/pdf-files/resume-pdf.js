import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

export default function ResPDF(props) {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const { pdf } = props;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  return (
    <div>
    <Document
      file={pdf}
      options={{  workerSrc: '/pdf.worker.js'  }}
      onLoadSuccess={onDocumentLoadSuccess}
      >
      <Page pageNumber={pageNumber} />
    </Document>
    </div>
  );
}
