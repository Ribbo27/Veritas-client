import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import httpService from '../services/checkUrlService'
import Prediction from './PredResult'
import isUrl from '../utils/utility'
import '../styles/searchBar.css';

class SearchBar extends Component {

  state = {
    input_URL: "",
    current_title: "",
    probability: "",
    class: "",
    error: null
  };

  onChange = event => {
    this.setState({ input_URL: event.target.value })
    console.log(this)
  }

  onClick = event => {
    event.preventDefault();

    var input = this.state.input_URL
    //
    if (!input) {
      this.setState({ input_URL: event.target.value })
    }

    if (isUrl(input)) {
      console.log('è stato inserito un URL')

      // Fetch data from input URL
      httpService.fetchData(this.state.input_URL)
        .then((resText) => {
          // Extract the title from the fetched site 
          var siteDOM = (new window.DOMParser()).parseFromString(resText, "text/html");
          const parsedTitle = siteDOM.getElementsByTagName("title")[0].innerHTML;
          return parsedTitle
        }).then((parsedTitle) => {
          // Send the title to Back End
          const response = httpService.sendUrl(parsedTitle)
          console.log(response)
          return response
          // Display the result
        }).then((response) => {
          if (response) {
            this.setState({ current_title: response.analyseData })
            this.setState({ probability: response.probability })
            this.setState({ class: response.class })
            this.setState({ error: false })
          } else {
            this.setState({ error: true })
          }
        })
    } else {
      console.log('è stato inserito del testo')
      const response = httpService.sendUrl(input)

      response.then((response) => {
        if (response) {
          this.setState({ current_title: response.analyseData })
          this.setState({ probability: response.probability })
          this.setState({ class: response.class })
          this.setState({ error: false })
        } else {
          this.setState({ error: true })
        }
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <Paper component="form" className="root" >
          <InputBase
            className="input"
            onChange={this.onChange}
            placeholder="Type a title or a URL.."
            inputProps={{ 'aria-label': 'search url here' }}
          />
          <IconButton type="submit" onClick={this.onClick} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
        <Prediction error={this.state.error} title={this.state.current_title} prob={this.state.probability} class={this.state.class} />
      </React.Fragment>
    )
  }
}

export default SearchBar;
