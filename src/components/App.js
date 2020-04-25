import React, { Component } from 'react';
import '../styles/App.css';
import Topbar from "./Topbar.js"
import SearchBar from "./SearchBarComponent.js"
import FootBar from "./FootBar.js"


class App extends Component {

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
