import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import Menu from './Menu';
import '../Style/About.css';

class About extends Component {
    render() {
        return (
            <div className={this.props.theme} >
                <Menu theme={this.props.theme}/>
                <div className="about-header" style={{color:this.props.name}}>
                    Hey!<br/> <br/>
                    I'm So Glad You're Here.
                </div>
                <div className="ui card about-card">
                    <div className="image">
                        <div className="about-picture"></div>
                    </div>
                    <div className="content"> 
                        <a className="header" href="/">Emina Mehic</a>
                    </div>
                </div>
                <div className="about-dot">
                    <div className="about-subheader" style={{color:this.props.name}}>a bit about me:</div>
                    <div className="about-me" style={{color:this.props.name}}>
                        My name's Emina Mehic. I'm 23 years old. I'm  on intership in Walter Code. <br />
                        This is site about me, my schooling, projects, interests etc. <br />
                        Enjoy! 
                    </div>
                    <span className="dot" style={{backgroundColor:this.props.dot}}>
                        <Link to="/resume" className="about-link">
                            resume
                        </Link>
                    </span>
                    <span className="dot" style={{backgroundColor:this.props.dot}}>
                        <Link to="/projects" className="about-link">
                            projects
                        </Link>
                    </span>
                    <span className="dot" style={{backgroundColor:this.props.dot}}>
                        <Link to="/contact" className="about-link">
                            contact
                        </Link>
                    </span>
                </div>
                <div className="theme-language" style={{backgroundColor:this.props.dot}}>
                    <div className="theme-text-select">Select a language:</div>
                    <i className="ba flag my-flag"/> 
                    <div className="theme-text-language">Bosnian</div>
                    <i className="gb us flag my-flag"/>
                    <div className="theme-text-language">English</div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        theme: state.theme,
        name: state.name,
        dot: state.dot
    }
}
export default connect(mapStateToProps)(About);