import React from 'react';
import Songs from './Songs';
import { Link } from 'react-router';


class Playlist extends React.Component {
    componentDidMount() {
        const playlistId = this.props.routeParams.playlistId;
        const selectPlaylist = this.props.selectPlaylist;

        selectPlaylist(playlistId);
    }

    componentWillReceiveProps(nextProps) {
        const nextPlaylistId = nextProps.routeParams.playlistId;
        const currentPlaylistId = this.props.routeParams.playlistId;
        const selectPlaylist = this.props.selectPlaylist;
        if (nextPlaylistId !== currentPlaylistId)
            selectPlaylist(nextPlaylistId);
    }

    render() {
        console.log('once')
        const playlist = this.props.selectedPlaylist;
        console.log('playlist', playlist)

        return (
            <div>
                <h3>{playlist.name}</h3>
                <Songs songs={playlist.songs} /> {/** Hooray for reusability! */}
                {playlist.songs && !playlist.songs.length && <small>No songs.</small>}
                <hr />
            </div>
        )
    }
}


export default Playlist;
