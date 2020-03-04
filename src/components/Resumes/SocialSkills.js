import React, { Component } from 'react';
import { connect } from 'react-redux';
 
class SocialSkills extends Component {
    render() {
        return (
            <div className="resume-section" style={{color:this.props.name}}>
                <div className="field-header fh-interests">
                    {this.props.language==='english' ? "Social skills:" : "Socijalne vještine:"}
                </div>
                <div className="pointer">-></div>
                <div className="interests">
                    {this.props.language==='english' ? "Team player" : "Timski igrač"} 
                    <br/>
                </div>
                <div className="pointer">-></div>
                <div className="interests">
                    {this.props.language==='english' ? "Highly creative and innovative" : "Kreativna i inovativna"} 
                    <br/>
                </div>
                <div className="pointer">-></div>
                <div className="interests">
                    {this.props.language==='english' ? "Fast learner" : "Brzo učim"} 
                    <br/>
                </div>
                <div className="pointer">-></div>
                <div className="interests">
                    {this.props.language==='english' ? "Hard working " : "Marljiva"}
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
export default connect(mapStateToProps)(SocialSkills);
