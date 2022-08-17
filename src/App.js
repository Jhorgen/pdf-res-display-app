import React from 'react';

import SinglePagePDFViewer from './components/pdf-pages/single-page';
import AllPagesPDFViewer from './components/pdf-pages/all-pages';

import ResumePDF from './res.pdf';

export default function App() {
  return (
    <div>
    <h4>Single Page</h4>
    <SinglePagePDFViewer pdf={ResumePDF} />

    <hr />

    <h4>All Pages</h4>
    <div>
      <AllPagesPDFViewer pdf={ResumePDF} />
    </div>

    <hr />

    </div>
  );
}
