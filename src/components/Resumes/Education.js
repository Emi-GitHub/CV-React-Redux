import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../Style/Resume.css';

class Education extends Component {
    render() {
        return (
            <div className="resume-section" style={{color:this.props.name}}>
                <div className="field-header">
                    {this.props.language==='english' ? "High school:" : "Srednja škola:"}
                </div>
                <div className="field-year">2015</div>
                <div className="resume-notes" >
                    <div className="subheader">
                    {this.props.language==='english' ? "HIGH SCHOOL DIPLOMA" : "DIPLOMA O ZAVRŠENOJ SREDNJOJ ŠKOLI"}
                    </div>
                    {this.props.language==='english' ? " First bosniak gymnasium, Sarajevo ( Mathematics and Informatics ) " : "Prva bošnjačka gimnazija (Matematičko-informatički smijer)"}
                </div>
                <div className="field-header">
                    {this.props.language==='english' ? "Faculty:" : "Fakultet:"}
                </div>
                <div className="field-year">2019</div>
                <div className="resume-notes">
                    <div className="subheader">
                        {this.props.language==='english' ? "B.E. OF COMPUTING AND INFORMATICS" : "BACHELOR INŽINJER ELEKTROTEHNIKE"}
                    </div> 
                    {this.props.language==='english' ? " Faculty of Electrical Energeineering, University of Sarajevo ( Computer Science and Informatics )" : "Elektrotehnički fakultet, Sarajevno ( smijer računarstvo i informatika)"} 
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
export default connect(mapStateToProps)(Education);
