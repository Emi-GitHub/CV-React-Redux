import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../Style/Resume.css';

class Education extends Component {
    render() {
        return (
            <div className="resume-section" style={{color:this.props.name}}>
                <div className="field-header">High school:</div>
                <div className="field-year">2015</div>
                <div className="resume-notes" >
                    <div className="subheader">HIGH SCHOOL DIPLOMA</div>
                    First bosniak gymnasium, Sarajevo 
                   ( Mathematics and Informatics ) 
                </div>
                <div className="field-header">Faculty:</div>
                <div className="field-year">2019</div>
                <div className="resume-notes">
                    <div className="subheader">B.E. OF COMPUTING AND INFORMATICS</div> 
                    Faculty of Electrical Energeineering, University of Sarajevo
                   ( Computer Science and Informatics ) 
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
export default connect(mapStateToProps)(Education);
