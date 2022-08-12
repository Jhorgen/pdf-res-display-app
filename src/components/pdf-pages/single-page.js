import React, { useState } from 'react';
import {Document, Page } from 'react-pdf';

export default function SinglePage() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage (offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  const { pdf } = props; //where does it pass from?

  return (
    <>
      <Document
      file={pdf}
      options={{  workerSrc: 'pdf.worker.js'  }}
      onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div>
        <p>

        </p>

        <button>
        </button>

        <button>
        </button>
      </div>
  )
};
