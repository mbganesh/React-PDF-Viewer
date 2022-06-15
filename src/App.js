import { Box  } from "@mui/system";
import {TextField} from '@mui/material'
import react, { useEffect, useState } from "react";

import { Document, Page, pdfjs } from "react-pdf";

function App() {
  const urlAppend =
    "#toolbar=0&amp;navpanes=0&amp;scrollbar=0&amp;page=1&amp;view=FitH";
  const [url, setUrl] = useState("");


   const [numPages, setNumPages] = useState(null);
      const [pageNumber, setPageNumber] = useState(1);
  
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }


  useEffect(() => {
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`; 
  } , [])

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "#737372",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <Box sx={{backgroundColor:'#ccc'  , overflow: "hidden", width:'40vw' , display:'flex' , flexDirection:'column' , padding:'20px' , borderRadius:'10px' , border:'2px solid #000' , height: 365 }}>

        <TextField type='url' size="small" value={url} placeholder='Enter PDF URL' onChange={(e) => setUrl(e.target.value)} />


        {
          url !== ''?
          <object
          data={url + urlAppend}
          type="application/pdf"
          style={{ width: 300, height: 365 }}
        />:
        null
        }


<Document
        file={'http://www.pdf995.com/samples/pdf.pdf'}
        onLoadSuccess={onDocumentLoadSuccess}
        height='234px'
        >
        <Page pageNumber={pageNumber} />
      </Document>

      
      </Box>
    </Box>
  );
}

export default App;

//  #toolbar=1&amp;navpanes=0&amp;scrollbar=1&amp;page=1&amp;view=FitH


// PDF URL's:

// http://www.africau.edu/images/default/sample.pdf
// http://www.pdf995.com/samples/pdf.pdf