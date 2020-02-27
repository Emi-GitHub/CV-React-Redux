import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menu from './Menu';
import Education from './Resumes/Education';
import Volonteering from './Resumes/Volonteering';
import Intership from './Resumes/Intership';
import Skills from './Resumes/Skills';
import Interests from './Resumes/Interests';
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
    render() {
        return (
            <div className={this.props.theme} >
                <Menu theme={this.props.theme}/>
                <div className="resume-header" style={{color:this.props.name}}>
                    Please,<br/> <br/>
                    select a field! <br/> <br/>
                </div>
                <div className="resume-dot">
                    <span 
                        className="dot" 
                        style={{backgroundColor:this.props.dot}} 
                        onClick={() => this.props.showEducation(this.props.education)}
                    >
                        Education
                    </span>
                    <span 
                        className="dot" 
                        style={{backgroundColor:this.props.dot}} 
                        onClick={() => this.props.showIntership(this.props.intership)}
                    >
                        Intership
                    </span>
                    <span 
                        className="dot" 
                        style={{backgroundColor:this.props.dot}} 
                        onClick={() => this.props.showVolonteering(this.props.volonteering)}
                    >
                        Volonteering
                    </span>
                    <span 
                        className="dot" 
                        style={{backgroundColor:this.props.dot}} 
                        onClick={() => this.props.showSkills(this.props.skills)}
                    >
                        Skills
                    </span>
                    <span 
                        className="dot" 
                        style={{backgroundColor:this.props.dot}} 
                        onClick={() => this.props.showInterests(this.props.interests)}
                    >
                        Interests
                    </span>
                </div> 
                {this.props.education ? <Education/> : null}
                {this.props.intership ? <Intership/> : null}
                {this.props.volonteering ? <Volonteering/> : null}
                {this.props.skills ? <Skills/> : null }
                {this.props.interests ? <Interests /> : null }
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
        dotColorEducation: state.dotColorEducation
    }
}
export default connect(mapStateToProps, {showEducation, showInterests, showIntership, showSkills, showVolonteering})(Resume);
