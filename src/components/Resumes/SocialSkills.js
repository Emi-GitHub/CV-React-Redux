import React, { Component } from 'react';
import { connect } from 'react-redux';
 
class SocialSkills extends Component {
    render() {
        return (
            <div className="resume-section" style={{color:this.props.name}}>
                <div className="resume-header">Social skills:</div>
                <div className="pointer">-></div>
                <div className="interests">
                    Team player <br/>
                </div>
                <div className="pointer">-></div>
                <div className="interests">
                    Highly creative and innovative <br/>
                </div>
                <div className="pointer">-></div>
                <div className="interests">
                    Fast learner <br/>
                </div>
                <div className="pointer">-></div>
                <div className="interests">
                    Hard working <br/>
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
export default connect(mapStateToProps)(SocialSkills);
