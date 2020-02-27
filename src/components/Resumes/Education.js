import React, { Component } from 'react';
import '../../Style/Style.css';
import '../../Style/About.css';
import '../../Style/Education.css';
import { connect } from 'react-redux';

export class Education extends Component {
    render() {
        return (
            <div style={{marginLeft:"300px", marginTop:"50px"}}>
                <div className="my-header resume-header" style={{fontSize:"50px", color:this.props.name}}>High school:</div>
                <div className="my-header year" style={{fontSize:"100px", color:this.props.name}}>2015</div>
                <div className="about-me resume-notes" style={{color:this.props.name}}>
                    <div style={{fontSize:"20px"}}>HIGH SCHOOL DIPLOMA</div>
                    First bosniak gymnasium, Sarajevo 
                   ( Mathematics and Informatics ) 
                </div>

                <div className="my-header resume-header" style={{fontSize:"50px", color:this.props.name}}>Faculty:</div>
                <div className="my-header year" style={{fontSize:"100px", color:this.props.name}}>2019</div>
                <div className="about-me resume-notes" style={{color:this.props.name}}>
                    <div style={{fontSize:"20px"}}>B.E. OF COMPUTING AND INFORMATICS</div> 
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
export default connect(mapStateToProps)(Education)
