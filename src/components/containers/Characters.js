import React, { Component } from 'react';
import DeckOfCards from '../DeckOfCards';
import PropTypes from 'prop-types';
import apiCall from '../../services/api-call';

class Characters extends Component {
  static propTypes = {
    charCount: PropTypes.number.isRequired
  }
  state= {
    characters: []
  }

  componentDidMount() {
    const characters = apiCall('https://hey-arnold-api.herokuapp.com/api/v1/characters', this.props.charCount, 1);
    console.log(characters);
    this.setState({ characters });
  }

  render() {
    return (
      <>
        <DeckOfCards items={this.state.characters} title='Characters' />
        <button onClick={this.decrementPage}>🡄</button>
        <button onClick={this.incrementPage}>🡆</button>
      </>
    );
  }
}

export default Characters;

