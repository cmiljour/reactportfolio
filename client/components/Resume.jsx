import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Iframe from 'react-iframe';
import logger from 'logging-library';
import FileViewer from 'react-file-viewer';
import { CustomErrorComponent } from 'custom-error';

const file = './CMiljourResume.pdf'
const type = 'pdf'

const StyledTextArea = styled.div`
    ${'' /* background: lightgreen; */}
    grid-area: c;
    ${'' /* ${'' /* margin: 15px; */}
    ${'' /* padding-left: 20px; */} */}
`

const Resume = (props) => {
    return (
        <StyledTextArea>
                  <FileViewer
        fileType={type}
        filePath={file}
        errorComponent={CustomErrorComponent}
        onError={this.onError} />
        </StyledTextArea>
    );  
}

export default Resume;



<iframe src="https://docs.google.com/document/d/e/2PACX-1vScMiMOLBGlxTNpC7hjMPzrUuLWI-Wjg7lcLnvKF6wpWh8DkyOwovt1_9FZMuZEf-Na-h5v8J9nKlLX/pub?embedded=true"></iframe>