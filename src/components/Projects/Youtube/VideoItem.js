import React, { Component } from 'react';
import './Youtube.css';
import { connect } from 'react-redux';

class VideoItem extends Component {
    render() {
        return (
            <div className="video-item item" onClick={()=>this.props.onVideoSelect(this.props.video)}>
            <img 
                className="ui image" 
                src={this.props.video.snippet.thumbnails.medium.url} 
                alt={this.props.video.snippet.title}
            />
            <div className="content"> 
                <div className="header" style={{color:this.props.name}}>
                    {this.props.video.snippet.title} 
                </div>
            </div>
        </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        name: state.name,
    }
}
export default connect(mapStateToProps)(VideoItem)

