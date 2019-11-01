import React, { Component } from 'react';
import DeckOfCards from '../DeckOfCards';
import PropTypes from 'prop-types';
import apiCall from '../../services/api-call';

class Characters extends Component {
  static propTypes = {
    charCount: PropTypes.number.isRequired
  }
  state= {
    characters: [],
    pageCount: 1
  }

  componentDidMount() {
    apiCall('https://hey-arnold-api.herokuapp.com/api/v1/characters', this.props.charCount, this.state.pageCount)
      .then(result => this.setState({ characters: result }));
  }

  decrementPage = () => {
    this.setState(state => ({
      pageCount: state.pageCount - 1
    }), () => {
      apiCall('https://hey-arnold-api.herokuapp.com/api/v1/characters', this.props.charCount, this.state.pageCount)
        .then(result => this.setState({ characters: result }));
    });
  }

  incrementPage = () => {
    this.setState(state => ({
      pageCount: state.pageCount + 1
    }), () => {
      apiCall('https://hey-arnold-api.herokuapp.com/api/v1/characters', this.props.charCount, this.state.pageCount)
        .then(result => this.setState({ characters: result }));
    });
  }

  render() {
    return (
      <>
        <DeckOfCards items={this.state.characters} title='Characters' />
        <button disabled={this.state.pageCount === 1 ? true : false} onClick={this.decrementPage}>←</button>
        <button disabled={this.state.pageCount === 500 ? true : false} onClick={this.incrementPage}>→</button>
      </>
    );
  }
}

export default Characters;

