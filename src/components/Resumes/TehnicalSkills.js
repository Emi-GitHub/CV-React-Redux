import React, { Component } from 'react';
import { connect } from 'react-redux';

class TehnicalSkills extends Component {
    render() {
        return (
            <div className="resume-section" style={{color:this.props.name}}>
                <div className="resume-header">
                    {this.props.language==='english' ? "Tehnical skills:" : "Tehničke vještine:"}
                </div>
                <div className="pointer">-></div>
                <div className="interests">
                   C, C++, C# 
                   <br/>
                </div>
                <div className="pointer">-></div>
                <div className="interests">
                   HTML5, CSS3, JavaScript 
                   <br/>
                </div>
                <div className="pointer">-></div>
                <div className="interests">
                   Node.js, React.js, Redux.js 
                   <br/>
                </div>
                <div className="pointer">-></div>
                <div className="interests">
                    MySQL 
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
export default connect(mapStateToProps)(TehnicalSkills);
