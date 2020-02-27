import React, { Component } from 'react';
import { connect } from 'react-redux';

class ImageList extends Component {
    render() {
        const images = this.props.images.map((image) => {
            return <div className="ui medium bordered rounded image" key={image.id+image.alt_description}>
                        <img  src={image.urls.small} alt={image.alt_description} className="image"/>
                    </div> 
        });
        return (
            <div className="card-wrapper" style={{backgroundColor:this.props.theme}}>
            {images}
        </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        theme: state.theme
    }
}
export default connect(mapStateToProps)(ImageList);