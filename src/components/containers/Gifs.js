import React, { Component } from 'react';
import Deck from '../Deck';
import PropTypes from 'prop-types';
import apiCall from '../../services/api-call';

class Gifs extends Component {
  static propTypes = {
    gifsCount: PropTypes.number.isRequired
  }
  state= {
    gifs: [],
  }

  componentDidMount() {
    apiCall('https://hey-arnold-api.herokuapp.com/api/v1/gifs', this.props.gifsCount)
      .then(result => this.setState({ gifs: result }));
  }

  generateImages = () => {
    apiCall('https://hey-arnold-api.herokuapp.com/api/v1/gifs', this.props.gifsCount)
      .then(result => this.setState({ gifs: result }));
  }

  render() {
    let images = this.state.gifs.map(gif => {
      return <img key={gif._id} src={gif.gifLink} />;
    });
    return (
      <>
        <Deck title='gifs'>
          {images}
        </Deck>
        <button onClick={this.generateImages}>Get New Gifs</button>
      </>
    );
  }
}

export default Gifs;

