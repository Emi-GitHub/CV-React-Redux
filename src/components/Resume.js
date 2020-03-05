import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menu from './Menu';
import Education from './Resumes/Education';
import Volonteering from './Resumes/Volonteering';
import Intership from './Resumes/Intership';
import Skills from './Resumes/Skills';
import Interests from './Resumes/Interests';
import MenuMobile from './MenuMobile';
import MenuMobileButton from './MenuMobileButton';
import BackDrop from './BackDrop';
import { showEducation } from '../actions';
import { showInterests } from '../actions';
import { showIntership } from '../actions';
import { showSkills } from '../actions';
import { showVolonteering } from '../actions';
import '../Style/Resume.css';

class Resume extends Component {
    componentDidMount(){
        this.props.showEducation(false);
    }
    headerLanguage = (language) => {
        if(language === 'english'){
            return(
                <div className="resume-header" style={{color:this.props.name}}>
                    Please,<br/> <br/>
                    select a field! <br/> <br/>
                </div>
            )
        }
        else if(language === 'bosnian'){
            return(
                <div className="resume-header" style={{color:this.props.name}}>
                    Odaberi polje! <br/> <br/>
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
            <div className={this.props.theme} >
                <div className="menu-visible">
                    <Menu theme={this.props.theme}/>
                </div>
                <div className="button-visible">
                    <MenuMobileButton theme={this.props.theme}/>
                </div>
                {sideDrawer}
                {backdrop}
                {this.props.language==='english' ? this.headerLanguage('english') : this.headerLanguage('bosnian')}
                <div className="resume-dot parent">
                    <div className="child">
                        <span 
                            className="dot aid-resume" 
                            style={{backgroundColor:this.props.dot}} 
                            onClick={() => this.props.showEducation(this.props.education)}
                        >
                            {this.props.language==='english' ? "Education" : "Edukacija"}
                        </span>
                        <span 
                            className="dot aid-resume" 
                            style={{backgroundColor:this.props.dot}} 
                            onClick={() => this.props.showIntership(this.props.intership)}
                        >
                            {this.props.language==='english' ? "Intership" : "Praksa"}
                        </span>
                        <span 
                            className="dot aid-resume" 
                            style={{backgroundColor:this.props.dot}} 
                            onClick={() => this.props.showVolonteering(this.props.volonteering)}
                        >
                            {this.props.language==='english' ? "Volonteering" : "Volontiranje"}
                        </span>
                        <span 
                            className="dot aid-resume" 
                            style={{backgroundColor:this.props.dot}} 
                            onClick={() => this.props.showSkills(this.props.skills)}
                        >
                            {this.props.language==='english' ? "Skills" : "Vještine"}
                        </span>
                        <span 
                            className="dot aid-resume" 
                            style={{backgroundColor:this.props.dot}} 
                            onClick={() => this.props.showInterests(this.props.interests)}
                        >
                            {this.props.language==='english' ? "Interests" : "Hobi"}
                        </span>
                    </div>
                </div> 
                <div className="parent">
                    {this.props.education ? <Education/> : null}
                    {this.props.intership ? <Intership/> : null}
                    {this.props.volonteering ? <Volonteering/> : null}
                    {this.props.skills ? <Skills/> : null }
                    {this.props.interests ? <Interests /> : null }
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
        education: state.education,
        interests: state.interests,
        skills: state.skills,
        intership: state.intership,
        volonteering: state.volonteering,
        dotColorEducation: state.dotColorEducation,
        language: state.language,
        sideDrawerOpen: state.sideDrawerOpen
    }
}
export default connect(mapStateToProps, {showEducation, showInterests, showIntership, showSkills, showVolonteering})(Resume);
