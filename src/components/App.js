import React, { Component } from 'react';
import '../styles/App.css';
import Topbar from "./Topbar.js"
import SearchBar from "./SearchBarComponent.js"
import FootBar from "./FootBar.js"


class App extends Component {

  /*state = {
    prediction: null
  };*/

  /*getPreditionResult = (predResult) => {
    console.log('Callback - ', predResult)
    this.setState({ prediction: predResult.prediction });
    console.log('state - ', this.state)
    console.log('state.prediction - ', this.state.prediction)
  }*/

  render() {
    return (
      <div className="App">

        <Topbar />

        <header className="App-header">
          <SearchBar />
          <FootBar />
        </header>

      </div>
    )
  }
}

export default App;
