import React, { Component } from 'react';
import { connect } from 'react-redux';

export class TehnicalSkills extends Component {
    render() {
        return (
            <div style={{marginLeft:"300px"}}>
                <div className="my-header resume-header" style={{fontSize:"50px", color:this.props.name}}>Tehnical skills:</div>
                <div className="my-header year" style={{fontSize:"50px", color:this.props.name}}>-></div>
                <div className="about-me resume-notes" style={{fontSize:"25px", color:this.props.name}}>
                   C, C++, C# <br/>
                </div>
                <div className="my-header year" style={{fontSize:"50px", color:this.props.name}}>-></div>
                <div className="about-me resume-notes" style={{fontSize:"25px", color:this.props.name}}>
                   HTML5, CSS3, JavaScript <br/>
                </div>
                <div className="my-header year" style={{fontSize:"50px", color:this.props.name}}>-></div>
                <div className="about-me resume-notes" style={{fontSize:"25px", color:this.props.name}}>
                   Node.js, React.js, Redux.js <br/>
                </div>
                <div className="my-header year" style={{fontSize:"50px", color:this.props.name}}>-></div>
                <div className="about-me resume-notes" style={{fontSize:"25px", color:this.props.name}}>
                    MySQL <br/>
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
export default connect(mapStateToProps)(TehnicalSkills)
