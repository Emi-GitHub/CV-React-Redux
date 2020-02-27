import React, { Component } from 'react';
import './Music.css';
import { connect } from 'react-redux';

class SongsList extends Component {
    render() {
        const songs = this.props.songs.map((song) => {
            return <div key={song.id} className="main" style={{backgroundColor:this.props.dot}}>
                        <img 
                            src={song.album.cover_medium} 
                            alt={song.album.title} 
                            className="ui medium rounded image album image-album"
                        />
                        <h2 className="album-header">{song.artist.name}</h2>
                        <p className="album-title">{song.album.title}</p>
                        <button className="ui secondary button album-button" onClick={() => window.open(song.preview, "_blank")}>
                            <i className="play icon"></i>
                            PLAY
                        </button>
                        <br/>
                    </div>
        });
        return (
            <div className="card-wrapper" style={{backgroundColor:this.props.theme}}>
                {songs}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        theme: state.theme,
        name: state.name,
        dot: state.dot
    }
}
export default connect(mapStateToProps)(SongsList);
 

