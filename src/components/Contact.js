import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menu from './Menu';
import MenuMobile from './MenuMobile';
import MenuMobileButton from './MenuMobileButton';
import BackDrop from './BackDrop';
import '../Style/Contact.css';

class Contact extends Component {
    render() {
        let sideDrawer;
        let backdrop;
        if(this.props.sideDrawerOpen) {
            sideDrawer =  <MenuMobile />
            backdrop = <BackDrop />
        }
        return (
            <div className={this.props.theme} style={{color:this.props.name}} >
                <div className="menu-visible">
                    <Menu theme={this.props.theme}/>
                </div>
                <div className="button-visible">
                    <MenuMobileButton theme={this.props.theme}/>
                </div>
                {sideDrawer}
                {backdrop}
                <div className="contact-header">
                    {this.props.language==='english' ? "You can contact me!" : "Možete me kontaktirati!"}
                </div>
                <div className="contact-description">
                    {this.props.language==='english' ? " If you are interested in details you can send me e-mail, or you can call me on the number bellow." : "Ako ste zainteresovani za detalje, možete mi poslati poruku na e-mail, ili me kontaktirati na broj naveden ispod."} 
                    <br/>
                    {this.props.language==='english' ? "I'd be happy to reply! " : "Biće mi zadovoljstvo odgovoriti!"}
                </div>
                <div className="contact-subheader">
                    <i className="phone icon contact-color"></i>
                    {this.props.language==='english' ? "phone:" : "telefon:"} 
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
                    {this.props.language==='english' ? "adress:" : "adresa:"}
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
                    {this.props.language==='english' ? "Click to open my linkedin profile" : "Klikni za prikaz linkedin profila"}
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
                        {this.props.language==='english' ? "Click to open my GitHub profile" : "Klikni za prikaz GitHub profila"}
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
        language: state.language,
        sideDrawerOpen: state.sideDrawerOpen
    }
}
export default connect(mapStateToProps)(Contact);