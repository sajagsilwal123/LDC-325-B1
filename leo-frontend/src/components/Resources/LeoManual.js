
import React, {useState} from 'react';
import {Document, Page} from 'react-pdf';
import { pdfjs } from 'react-pdf';
import {Table, Container, Col, Row} from 'react-bootstrap';
import test from "./../Resources/test.pdf"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const LeoManual = ({url}) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
   function onLoadError(error) {
     console.log(error);
   }
  
   function onSourceError(error) {
     console.log(error);
   }
  
    return (
      <div>
        <Container>

          <br/>
          <Row className="justify-content-md-center">
            <Col lg="8">
                <Document
                file={window.location.origin + test}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onLoadError}
                onSourceError={onSourceError}
                >
                {[...Array(numPages).keys()].map((p) => (
                    <Page pageNumber={p + 1} />
                ))}
                </Document>        
            </Col>
          </Row>
          <br/>
          <br/>
          <br/>
      </Container>
      </div>
    );
  };
  
  export default LeoManual;