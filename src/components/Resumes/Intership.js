import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../Style/Resume.css';

class Intership extends Component {
    render() {
        return (
            <div className="resume-section" style={{color:this.props.name}}>
                <div className="field-header">Intership:</div>
                <div className="field-year">2019</div>
                <div className="resume-notes">
                    <div className="subheader">Walter Code, Sarajevo</div>
                   ( React and Redux ) <br/>
                   2 DECEMBER 2019 - NOW
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
export default connect(mapStateToProps)(Intership)
