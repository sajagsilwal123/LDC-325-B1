
import React, {useState} from 'react';
import {Table, Container, Col, Row} from 'react-bootstrap';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

import pdf from "./../Resources/test.pdf"

const LeoManual = ({url}) => {

  const onZoom = (e) => {
    console.log(`Zoom to \${e.scale}`);
  };
    return (
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
        <div
          style={{
              border: '1px solid rgba(0, 0, 0, 0.3)',
              height: '750px',
          }}
        >
          <Viewer fileUrl={pdf} onZoom={onZoom} />
        </div>
      </Worker>
    );
  };
  
  export default LeoManual;