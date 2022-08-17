import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

export default function ResPDF(props) {

const { pdf } = props;

  return (
    <div>
    <Document
      file={pdf}
      options={{  workerSrc: '/pdf.worker.js'  }}
      >
      <Page pageNumber={1} />
    </Document>
    </div>
  );
}
