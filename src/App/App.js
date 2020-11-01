import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

let FileName = "No File";
let no_invoice = 0;
let total_amount = 0;
let total_vendors = 0;
let invalid_invoice = 0;
let FileName1

class App extends Component {

  state = {
    selectedFile: null
  }

  filesSelectedHandler = event => {
    this.setState({
      selectedFile: event,
    })
    FileName1 = event.target.files[0].name
  }

  fileUploadHandler = event => {
    this.setState({
      selectedFile: event,
    })
    FileName = FileName1

    //FileName = event.target.files[0].name
    const fd = new FormData();
    fd.append('excel', this.state.selectedFile);
    console.log(fd)
    axios.post('http://localhost:4000/upload', fd)
    .then(res => {
    console.log(res)
    }); //api
  }

  render() {
    return (
      <div className="App">
        <h1>Upload Excel file</h1>
        <input type="file" name="file" onChange={this.filesSelectedHandler} /><br /><br />
        <button onClick={this.fileUploadHandler}>Upload</button>
        <div className="dialogeBox">
          {FileName} Uploaded<br /><br /><br /><br />
          <div className="column1">
            Total No. of Invoices Uploaded<br />
            Total sum of Invoice amount<br />
            Total number of vendors whose invoices were uploaded<br />
            Total number of invalid invoices
          </div>
          <div className="column2">
            {no_invoice}<br />
            {total_amount}<br />
            {total_vendors}<br />
            {invalid_invoice}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
