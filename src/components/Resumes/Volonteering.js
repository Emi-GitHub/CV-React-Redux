import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../Style/Resume.css';

class Volonteering extends Component {
    render() {
        return (
            <div className="resume-section" style={{color:this.props.name}}>
                <div className="field-header">Volonteering:</div>
                <div className="field-year">2019</div>
                <div className="resume-notes">
                    <div className="subheader">Sarajevo Unlimited</div>
                   ( 4th regional forum on innovation, entrepreneurship ) <br/>
                   22-24 OCTOBER 2019
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
export default connect(mapStateToProps)(Volonteering);
