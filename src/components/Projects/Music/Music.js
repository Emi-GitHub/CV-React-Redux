import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import SongsList from './SongsList';
import './Music.css';
import { connect } from 'react-redux';

class Music extends Component {
    state = {
        songs: []
    }
    onInputSearch = async term => {
        const BASE_URL = 'https://deezerdevs-deezer.p.rapidapi.com/search?';
        const FETCH_URL = BASE_URL + 'q=' + term;   
        const response = await axios.get(FETCH_URL, {
            q: term,
            headers: {
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": "517871db22msh425ef79f83d19e2p1cbfa6jsnc2e769166eb0"
            }
        });
        this.setState({
            songs: response.data.data
        })
    }
    
    render() {
        return (
            <div className="music-div" style={{backgroundColor:this.props.theme, color:this.props.name}}>
                <div className="main-div" style={{backgroundColor:this.props.theme}}>
                    <div className="music-link my-header" >
                        To see code click on link: 
                        <a href='https://github.com/Emi-GitHub/MyApp-React/tree/mymusic' target="_blank" rel="noopener noreferrer"> Play music</a> 
                        <br/> <br/>
                    </div>
                </div>
                <div className="ui divider container"></div>
                <SearchBar onInputSearch={this.onInputSearch}/>
                <div className={this.props.theme}>
                    <div className="song-list">
                        <SongsList songs={this.state.songs}/>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        theme: state.theme,
        name: state.name,
    }
}


export default connect(mapStateToProps)(Music);