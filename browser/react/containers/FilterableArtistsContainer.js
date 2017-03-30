import React from 'react';
import { Link } from 'react-router';
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';

class FilterableArtistsContainer extends React.Component {
  constructor() {
    super()
    this.state = { inputValue: '' }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value })
  }

  


  render() {
    const filterArtists =
      this.props.artists.filter(artist =>  artist.name.match(new RegExp(this.state.inputValue, "i")))
    
    return (
      <div>
        <FilterInput handleChange={this.handleChange} />
        <Artists artists={filterArtists} />
      </div>
    );
  }
}

export default FilterableArtistsContainer;
