import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menu from './Menu'

export class Contact extends Component {
    render() {
        return (
            <div className={this.props.theme} style={{color:this.props.name}} >
                <Menu theme={this.props.theme}/>
                <div className="my-header">
                    You can contact me!
                </div>
                <div className="about-me" style={{marginTop:"50px", marginLeft:"150px", fontSize:"20px"}}>
                If you are interested in details you can send me e-mail,
                or you can call me on the number bellow. <br/>
                I'd be happy to reply! 
                </div>

                <div className="my-header" style={{fontSize:"30px", marginTop:"50px", marginLeft:"150px"}}>
                    <i className="phone icon" style={{color:"#BC8F8F"}}></i>phone:
                </div>
                <div className="about-me" style={{marginLeft:"200px"}}>
                (+387)603114029
                <br/>
                </div>

                <div className="my-header" style={{fontSize:"30px", marginTop:"30px", marginLeft:"150px"}}>
                    <i className="mail icon" style={{color:"#BC8F8F"}}></i>mail:
                </div>
                <div className="about-me" style={{marginLeft:"200px"}}>
                mehicemina05@gmail.com
                <br/>
                </div>

                <div className="my-header" style={{fontSize:"30px", marginTop:"30px", marginLeft:"150px"}}>
                    <i className="address card icon" style={{color:"#BC8F8F"}}></i>adress:
                </div>
                <div className="about-me" style={{marginLeft:"200px"}}>
                Kenana Brkanića 44
                <br/>
                </div>

                <div className="my-header" style={{fontSize:"30px", marginTop:"30px", marginLeft:"150px"}}>
                    <i className="linkedin icon" style={{color:"#BC8F8F"}}></i>linkedin:
                </div>
                <div className="about-me" style={{marginLeft:"200px"}}>
                <a href="https://www.linkedin.com/in/emina-mehic-366729183/" target="_blank" rel="noopener noreferrer" style={{color:"#BC8F8F"}}>Click to open my linkedin profile</a>
                <br/>
                </div>

                <div className="my-header" style={{fontSize:"30px", marginTop:"30px", marginLeft:"150px"}}>
                    <i className="github icon" style={{color:"#BC8F8F"}}></i>github:
                </div>
                <div className="about-me" style={{marginLeft:"200px"}}>
                <a href="https://www.github.com/Emi-GitHub" target="_blank" rel="noopener noreferrer" style={{color:"#BC8F8F"}}>Click to open my GitHub profile</a>
                <br/>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        theme: state.theme,
        name: state.name,
    }
}

export default connect(mapStateToProps)(Contact)