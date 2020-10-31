import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


class App extends Component {

  state = {
    selectedFile: null
  }

  filesSelectedHandler = event => {
    this.setState({
      selectedFile: event
    })
  }

  fileUploadHandler = event => {
    const fd = new FormData();
    fd.append('excel', this.state.selectedFile, this.state.selectedFile.name);
    axios.post('', fd)
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
      </div>
    );
  }
}

export default App;
