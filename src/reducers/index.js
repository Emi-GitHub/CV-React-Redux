import { combineReducers } from 'redux';
import { theme } from './UiReducer';
import { name } from './UiReducer';
import { dot } from './UiReducer';
import { education } from './ResumeReducer';
import { intership } from './ResumeReducer';
import { volonteering } from './ResumeReducer';
import { skills } from './ResumeReducer';
import { interests } from './ResumeReducer';
import { tehnicalSkills } from './ResumeReducer';
import { socialSkills } from './ResumeReducer';
import { music } from './ProjectReducer';
import { youtube } from './ProjectReducer';
import { news } from './ProjectReducer';
import { picture } from './ProjectReducer';
import { notes } from './ProjectReducer';

export default combineReducers ({
    theme,
    name,
    education,
    intership,
    volonteering,
    skills,
    interests,
    tehnicalSkills,
    socialSkills,
    music,
    youtube,
    news,
    picture,
    notes,
    dot,
})