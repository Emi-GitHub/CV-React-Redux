import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../Style/Resume.css';

class Intership extends Component {
    render() {
        return (
            <div className="resume-section" style={{color:this.props.name}}>
                <div className="field-header">
                {this.props.language==='english' ? "Intership:" : "Praksa:"}
                </div>
                <div className="field-year">2019</div>
                <div className="resume-notes">
                    <div className="subheader">
                        Walter Code, Sarajevo
                    </div>
                   ( React and Redux ) 
                   <br/>
                   {this.props.language==='english' ? "2 DECEMBER 2019 - NOW" : "2 DECEMBAR 2019 - SAD"}
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
export default connect(mapStateToProps)(Intership)
