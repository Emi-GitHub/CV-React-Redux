import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../Style/About.css';

class Interests extends Component {
    render() {
        return (
            <div className="resume-section" style={{color:this.props.name}}>
                <div className="field-header fh-interests">
                    {this.props.language==='english' ? "Interests:" : "Hobi:"}
                </div>
                <div className="pointer">-></div>
                <div className="interests">
                    {this.props.language==='english' ? "basketball" : "košarka"}
                    <br/>
                </div>
                <div className="pointer">-></div>
                <div className="interests">
                    {this.props.language==='english' ? "gym " : "teretana"}
                    <br/>
                </div>
                <div className="pointer">-></div>
                <div className="interests">
                    {this.props.language==='english' ? "jogging" : "trčanje"}
                    <br/>
                </div>
                <div className="pointer">-></div>
                <div className="interests">
                    yoga
                    <br/>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        name: state.name,
        language: state.language
    }
}
export default connect(mapStateToProps)(Interests)
