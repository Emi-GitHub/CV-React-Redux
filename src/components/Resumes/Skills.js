import React, { Component } from 'react';
import { showTehnicalSkills } from '../../actions';
import { showSocialSkills } from '../../actions';
import { connect } from 'react-redux';
import '../../Style/About.css';
import '../../Style/Education.css';
import '../../Style/Skills.css';
import TehnicalSkills from './TehnicalSkills';
import SocialSkills from './SocialSkills';

export class Skills extends Component {
    render() { 
        return (
            <div>
                <span className="dot dot-skills" style={{marginLeft:"880px", backgroundColor:this.props.dot}} onClick={() => this.props.showTehnicalSkills(this.props.tehnicalSkills)}>Tehnical skills</span>
                <span className="dot dot-skills" style={{backgroundColor:this.props.dot}}onClick={() => this.props.showSocialSkills(this.props.socialSkills)}>Social skills</span>
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

export default connect(mapStateToProps, {showSocialSkills, showTehnicalSkills})(Skills)
