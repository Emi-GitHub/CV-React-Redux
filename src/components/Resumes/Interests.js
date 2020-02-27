import React, { Component } from 'react';
import '../../Style/Style.css';
import '../../Style/About.css';
import '../../Style/Education.css';
import { connect } from 'react-redux';

export class Interests extends Component {
    render() {
        return (
            <div style={{marginLeft:"300px", marginTop:"50px"}}>
                 <div className="my-header resume-header" style={{fontSize:"50px", color:this.props.name}}>Interests:</div>
                <div className="my-header year" style={{fontSize:"50px",color:this.props.name}}>-></div>
                <div className="about-me resume-notes"  style={{fontSize:"25px",color:this.props.name}}>
                basketball <br/>
                </div>
                <div className="my-header year" style={{fontSize:"50px", color:this.props.name}}>-></div>
                <div className="about-me resume-notes" style={{fontSize:"25px", color:this.props.name}}>
                gym <br/>
                </div>
                <div className="my-header year" style={{fontSize:"50px", color:this.props.name}}>-></div>
                <div className="about-me resume-notes" style={{fontSize:"25px", color:this.props.name}}>
                jogging<br/>
                </div>
                <div className="my-header year" style={{fontSize:"50px", color:this.props.name}}>-></div>
                <div className="about-me resume-notes" style={{fontSize:"25px", color:this.props.name}}>
                yoga<br/>
                </div>
                <div className="my-header year" style={{fontSize:"50px", color:this.props.name}}>-></div>
                <div className="about-me resume-notes" style={{fontSize:"25px", color:this.props.name}}>
                cooking<br/>
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
export default connect(mapStateToProps)(Interests)
