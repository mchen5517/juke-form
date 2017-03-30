import React from 'react';
import { Link } from 'react-router';
import NewPlaylist from '../components/NewPlaylist';

class NewPlaylistContainer extends React.Component {
    constructor() {
        super()
        this.state = { inputValue: '' }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ inputValue: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({inputValue: ''});
    }

    render() {
        return (
            <div>
                <NewPlaylist  
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange} 
                inputValue={this.state.inputValue}/>
            </div>
        );
    }
}

export default NewPlaylistContainer;
