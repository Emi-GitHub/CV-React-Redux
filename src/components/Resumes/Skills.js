import React, { Component } from 'react';
import { connect } from 'react-redux';
import TehnicalSkills from './TehnicalSkills';
import SocialSkills from './SocialSkills';
import { showTehnicalSkills } from '../../actions';
import { showSocialSkills } from '../../actions';
import '../../Style/Resume.css';

class Skills extends Component {
    render() { 
        return (
            <div>
                <span 
                    className="dot dot-skills first-dot" 
                    style={{backgroundColor:this.props.dot}} 
                    onClick={() => this.props.showTehnicalSkills(this.props.tehnicalSkills)}
                >
                    Tehnical skills
                </span>
                <span 
                    className="dot dot-skills" 
                    style={{backgroundColor:this.props.dot}}
                    onClick={() => this.props.showSocialSkills(this.props.socialSkills)}
                >
                    Social skills
                </span>
                {this.props.tehnicalSkills ? <TehnicalSkills/> : null}
                {this.props.socialSkills ? <SocialSkills /> : null}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        socialSkills: state.socialSkills,
        tehnicalSkills: state.tehnicalSkills,
        dot: state.dot
    }
}
export default connect(mapStateToProps, {showSocialSkills, showTehnicalSkills})(Skills);
