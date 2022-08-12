import React, { useState } from 'react';
import {Document, Page } from 'react-pdf';

import samplePDF from './../../res-08-2022.pdf'

export default function SinglePage() {
  return (
    <Document file={samplePDF}>
      <Page pageNumber={1} />
    </Document>
  );
}
