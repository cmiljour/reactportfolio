import React from 'react';
import ReactDOM from 'react-dom';
import PDF from 'react-pdf-js';
import styled from 'styled-components';
import pdfFile from './CMiljourResume.pdf';



const StyledTextArea = styled.div`
    ${'' /* background: lightgreen; */}
    grid-area: c;
    justify-self: center;
`

// const Resume = () => {
//     return (
//         <StyledTextArea>
//         <iframe src="https://docs.google.com/document/d/e/2PACX-1vScMiMOLBGlxTNpC7hjMPzrUuLWI-Wjg7lcLnvKF6wpWh8DkyOwovt1_9FZMuZEf-Na-h5v8J9nKlLX/pub?embedded=true"></iframe>
//         </StyledTextArea>
//     );  
// }

// export default Resume;

class Resume extends React.Component {
    state = {};
    
    onDocumentComplete = (pages) => {
      this.setState({ page: 1, pages });
    }
   
    onPageComplete = (page) => {
      this.setState({ page });
    }
   
    handlePrevious = () => {
      this.setState({ page: this.state.page - 1 });
    }
   
    handleNext = () => {
      this.setState({ page: this.state.page + 1 });
    }
   
    renderPagination = (page, pages) => {
      let previousButton = <button type="button" className="previous" onClick={this.handlePrevious}>Previous</button>;
      if (page === 1) {
        previousButton = <button type="button" className="previous disabled">Previous</button>;
      }
      let nextButton =<button type="button" className="next" onClick={this.handleNext}>Next</button> ;
      if (page === pages) {
        nextButton = <button type="button" className="next disabled">Next</button> ;
      }
      return (
        <nav>
          <ul className="pager">
            {previousButton}
            {nextButton}
          </ul>
        </nav>
        );
    }
   
    render() {
      let pagination = null;
      if (this.state.pages) {
        pagination = this.renderPagination(this.state.page, this.state.pages);
      }
      return (
        <StyledTextArea>
          <PDF file={pdfFile} onDocumentComplete={this.onDocumentComplete} onPageComplete={this.onPageComplete} page={this.state.page} />
          {pagination}
        </StyledTextArea>
      )
    }
  }
   
  module.exports = Resume;


