import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import { connect } from 'react-redux';

class Youtube extends Component {
    state = { 
        videos: [],
        selectedVideo: null
    };
    componentDidMount(){
        this.onTermSubmit('fruits')
    }
    onVideoSelect = video => {
        this.setState({
            selectedVideo: video
        })
    };
    onTermSubmit = async term => {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                q: term,
                part: 'snippet',
                type: 'video',
                maxResults: 5,
                key: 'AIzaSyB0IF7DA2EWBLEsLDwbhmE0ED2QSVogPYs'
            }
        });
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    }; 

    render() {
        return (
            <div className={this.props.theme} style={{color:this.props.name}}>
                <div className="main-div">
                    <div className="my-header youtube-link">
                        {this.props.language==='english' ? "To see code click on link: " : "Klikni za prikaz koda:"}
                        <a href="https://github.com/Emi-GitHub/Udemy-React/tree/videos" target="_blank" rel="noopener noreferrer"> Search videos</a> 
                        <br/> <br/>
                    </div>
                </div>
                <div className="ui container">
                    <div className="ui divider"></div>
                    <SearchBar callMe={this.onTermSubmit} />
                    <div className="ui grid">
                        <div className="ui row">
                            <div className="eleven wide column">
                                <VideoDetail video={this.state.selectedVideo}/>
                            </div>
                            <div className="five wide column">
                                <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                            </div>
                        </div>
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
        dot: state.dot,
        language: state.language
    }
}

export default connect(mapStateToProps)(Youtube);

