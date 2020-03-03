export const education = (state = true, action) => {
    switch(action.type) {
        case 'SHOW_EDUCATION': return action.payload;
        case 'SHOW_INTERSHIP': return false;
        case 'SHOW_VOLONTEERING': return false;
        case 'SHOW_SKILLS': return false;
        case 'SHOW_INTERESTS': return false
        default: return state; 
    }
}
export const intership = (state = false, action) => {
    switch(action.type) {
        case 'SHOW_INTERSHIP': return action.payload;
        case 'SHOW_EDUCATION': return false;
        case 'SHOW_VOLONTEERING': return false;
        case 'SHOW_SKILLS': return false;
        case 'SHOW_INTERESTS': return false;
        default: return state;
    }
}
export const volonteering = (state = false, action) => {
    switch(action.type) {
        case 'SHOW_VOLONTEERING': return action.payload;
        case 'SHOW_SKILLS': return false;
        case 'SHOW_INTERESTS': return false
        case 'SHOW_INTERSHIP': return false;
        case 'SHOW_EDUCATION': return false;
        default: return state;
    }
}
export const skills = (state = false, action) => {
    switch(action.type) {
        case 'SHOW_SKILLS': return action.payload;
        case 'SHOW_VOLONTEERING': return false;
        case 'SHOW_INTERESTS': return false
        case 'SHOW_INTERSHIP': return false;
        case 'SHOW_EDUCATION': return false;
        default: return state;
    }
}
export const interests = (state = false, action) => {
    switch(action.type) {
        case 'SHOW_INTERESTS': return action.payload;
        case 'SHOW_SKILLS': return false;
        case 'SHOW_VOLONTEERING': return false;
        case 'SHOW_INTERSHIP': return false;
        case 'SHOW_EDUCATION': return false;
        default: return state;
    }
}
export const tehnicalSkills = (state = false, action) => {
    switch(action.type) {
        case 'SHOW_TEHNICAL_SKILLS': return action.payload;
        case 'SHOW_SOCIAL_SKILLS': return false;
        default: return state;
    }
}
export const socialSkills = (state = false, action) => {
    switch(action.type) {
        case 'SHOW_SOCIAL_SKILLS': return action.payload;
        case 'SHOW_TEHNICAL_SKILLS': return false;
        default: return state;
    }
}