import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../Style/About.css';

class Interests extends Component {
    render() {
        return (
            <div className="resume-section" style={{color:this.props.name}}>
                <div className="resume-header">Interests:</div>
                <div className="pointer">-></div>
                <div className="interests">
                    basketball <br/>
                </div>
                <div className="pointer">-></div>
                <div className="interests">
                    gym <br/>
                </div>
                <div className="pointer">-></div>
                <div className="interests">
                    jogging<br/>
                </div>
                <div className="pointer">-></div>
                <div className="interests">
                    yoga<br/>
                </div>
                <div className="pointer">-></div>
                <div className="interests">
                    cooking<br/>
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
export default connect(mapStateToProps)(Interests)
