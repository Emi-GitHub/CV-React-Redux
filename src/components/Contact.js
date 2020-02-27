import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menu from './Menu';
import '../Style/Contact.css';

class Contact extends Component {
    render() {
        return (
            <div className={this.props.theme} style={{color:this.props.name}} >
                <Menu theme={this.props.theme}/>
                <div className="contact-header">You can contact me!</div>
                <div className="contact-description">
                    If you are interested in details you can send me e-mail,
                    or you can call me on the number bellow. <br/>
                    I'd be happy to reply! 
                </div>
                <div className="contact-subheader">
                    <i className="phone icon contact-color"></i>
                    phone:
                </div>
                <div className="subheader-desc">
                    (+387)603114029<br/>
                </div>
                <div className="contact-subheader">
                    <i className="mail icon contact-color"></i>
                    mail:
                </div>
                <div className="subheader-desc">
                    mehicemina05@gmail.com<br/>
                </div>
                <div className="contact-subheader">
                    <i className="address card icon contact-color"></i>
                    adress:
                </div>
                <div className="subheader-desc">
                    Kenana Brkanića 44<br/>
                </div>
                <div className="contact-subheader">
                    <i className="linkedin icon contact-color"></i>
                    linkedin:
                </div>
                <div className="subheader-desc">
                <a href="https://www.linkedin.com/in/emina-mehic-366729183/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-color" 
                >
                    Click to open my linkedin profile
                </a><br/>
                </div>
                <div className="contact-subheader">
                    <i className="github icon contact-color"></i>
                    github:
                </div>
                <div className="subheader-desc">
                    <a href="https://www.github.com/Emi-GitHub" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="contact-color"
                    >
                    Click to open my GitHub profile
                    </a><br/>
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
export default connect(mapStateToProps)(Contact);