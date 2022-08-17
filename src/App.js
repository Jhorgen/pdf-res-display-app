import React, { useState } from 'react';
import ResPDF from './components/pdf-files/resume-pdf.js';

import ResumePDF from './res.pdf';

export default function App() {

  return (
    <div>
      <ResPDF pdf={ResumePDF} />
    </div>
  );
}
