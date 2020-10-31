import React, { Component } from 'react';
import './App.css';


class App extends Component {

  filesSelectedHandler = event => {
    console.log(event)
  }

  render() {
    return (
      <div className="App">
        <h1>Upload Excel file</h1>
        <input type="file" name="file" onChange={this.filesSelectedHandler} />
      </div>
    );
  }
}

export default App;
