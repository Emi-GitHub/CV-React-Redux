import React, { Component } from 'react';
import '../../Style/Style.css';
import '../../Style/About.css';
import '../../Style/Education.css';
import { connect } from 'react-redux';

export class Volonteering extends Component {
    render() {
        return (
            <div style={{marginLeft:"300px", marginTop:"50px"}}>
                <div className="my-header resume-header" style={{fontSize:"50px", color:this.props.name}}>Volonteering:</div>
                <div className="my-header year" style={{fontSize:"100px", color:this.props.name}}>2019</div>
                <div className="about-me resume-notes" style={{color:this.props.name}}>
                    <div style={{fontSize:"20px"}}>Sarajevo Unlimited</div>
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
export default connect(mapStateToProps)(Volonteering)
