import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import Menu from './Menu';
import { setLanguage } from '../actions';
import '../Style/About.css';
import MenuMobile from './MenuMobile';
import MenuMobileButton from './MenuMobileButton';
import BackDrop from './BackDrop';

class About extends Component {
    english = () => {
        this.props.setLanguage('english');
    }
    bosnian = () => {
        this.props.setLanguage('bosnian');
    }
    aboutMeLanguage = (language) => {
        if(language === 'english'){
            return(
                <div className="about-me" style={{color:this.props.name}}>
                    My name's Emina Mehic. I'm 23 years old. I'm  on intership in Walter Code. <br />
                    This is site about me, my schooling, projects, interests etc. <br />
                    Enjoy! 
                </div>
            )
        }
        else if(language === 'bosnian'){
            return(
                <div className="about-me" style={{color:this.props.name}}>
                    Moje ime je Emina Mehić. Imam 23 godine. Trenutno sam na praksi u Walter Code-u. <br />
                    Ovo je aplikacija o meni, mom školovanju, projektima, hobijima i sl. <br />
                    Uživaj! 
                </div>
            )
        }
    }
    render() {
        let sideDrawer;
        let backdrop;
        if(this.props.sideDrawerOpen) {
            sideDrawer =  <MenuMobile />
            backdrop = <BackDrop />
        }
        return (
            <div className={this.props.theme}>
                <div className="menu-visible">
                    <Menu theme={this.props.theme}/>
                </div>
                <div className="button-visible">
                    <MenuMobileButton theme={this.props.theme}/>
                </div>
                {sideDrawer}
                {backdrop}
                <div className="about-header" style={{color:this.props.name}}>
                    {this.props.language==='english' ? 'Hey!' : 'Cao!'} 
                    <br/>
                    {this.props.language==='english' ? "I'm So Glad You're Here." : "Drago Mi Je Sto Ste Ovdje."}
                </div>
                <div className="ui container">
                    <div className="parent">
                        <div className="child-1">
                            <div className="ui card about-card">
                                <div className="image">
                                    <div className="about-picture"></div>
                                </div>
                                <div className="content"> 
                                    <a className="header about-me" href="/">Emina Mehic</a>
                                </div>
                            </div>
                        </div>
                        <div className="child-2">
                            <div className="about-dot">
                                <div className="about-subheader" style={{color:this.props.name}}>
                                    {this.props.language==='english' ? "a bit about me:" : "malo o meni:"}
                                </div>
                                {this.props.language==='english' ? this.aboutMeLanguage('english') : this.aboutMeLanguage('bosnian')}
                                <span className="dot aid" style={{backgroundColor:this.props.dot}}>
                                    <Link to="/resume" className="about-link">
                                    {this.props.language==='english' ? "resume" : "rezime"}
                                    </Link>
                                </span>
                                <span className="dot aid" style={{backgroundColor:this.props.dot}}>
                                    <Link to="/projects" className="about-link">
                                    {this.props.language==='english' ? "projects" : "projekti"}
                                    </Link>
                                </span>
                                <span className="dot aid" style={{backgroundColor:this.props.dot}}>
                                    <Link to="/contact" className="about-link">
                                    {this.props.language==='english' ? "contact" : "kontakt"}
                                    </Link>
                                </span>
                            </div>
                       </div>
                    </div>
                </div>
                <div className="theme-language" style={{backgroundColor:this.props.dot}}>
                    <div className="ui container">
                        <div className="select-language">
                            <div className="theme-text-select">Select a language:</div>
                            <i className="ba flag my-flag" onClick={this.bosnian}/> 
                            <div className="theme-text-language" onClick={this.bosnian}>Bosnian</div>
                            <i className="gb us flag my-flag" onClick={this.english}/>
                            <div className="theme-text-language" onClick={this.english}>English</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        theme: state.theme,
        name: state.name,
        dot: state.dot,
        language: state.language,
        sideDrawerOpen: state.sideDrawerOpen
    }
}
export default connect(mapStateToProps, {setLanguage})(About);