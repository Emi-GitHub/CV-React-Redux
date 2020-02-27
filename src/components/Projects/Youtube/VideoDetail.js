import React, { Component } from 'react'
import { connect } from 'react-redux'

class VideoDetail extends Component {
    render() {
        if(!this.props.video) return <div>Loading...</div>
        const videoSrc = `https://www.youtube.com/embed/${this.props.video.id.videoId}`
        return (
            <div style={{color:this.props.name}}>
                <div className="ui embed">
                    <iframe title="video player" src={videoSrc} />
                </div>
                <div>
                    <h4 className="ui header" style={{marginTop:"20px"}}>{this.props.video.snippet.title}</h4>
                    <p>{this.props.video.snippet.description}</p>
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

export default connect(mapStateToProps)(VideoDetail)
