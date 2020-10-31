import React, { Component } from 'react';
import './App.css';


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
