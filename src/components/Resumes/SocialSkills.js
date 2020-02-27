import React, { Component } from 'react'
import { connect } from 'react-redux'

export class SocialSkills extends Component {
    render() {
        return (
            <div style={{marginLeft:"300px"}}>
                <div className="my-header resume-header" style={{fontSize:"50px", color:this.props.name}}>Social skills:</div>
                <div className="my-header year" style={{fontSize:"50px", color:this.props.name}}>-></div>
                <div className="about-me resume-notes" style={{fontSize:"25px", color:this.props.name}}>
                    Team player <br/>
                </div>
                <div className="my-header year" style={{fontSize:"50px", color:this.props.name}}>-></div>
                <div className="about-me resume-notes" style={{fontSize:"25px", color:this.props.name}}>
                    Highly creative and innovative <br/>
                </div>
                <div className="my-header year" style={{fontSize:"50px", color:this.props.name}}>-></div>
                <div className="about-me resume-notes" style={{fontSize:"25px", color:this.props.name}}>
                    Fast learner <br/>
                </div>
                <div className="my-header year" style={{fontSize:"50px", color:this.props.name}}>-></div>
                <div className="about-me resume-notes"style={{fontSize:"25px", color:this.props.name}}>
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
export default connect(mapStateToProps)(SocialSkills)
