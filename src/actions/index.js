export const setTheme = theme => {
    return {
        type: 'SET_THEME',
        payload: theme
    }
}
export const setName = name => {
    return {
        type: 'SET_NAME',
        payload: name
    }
}
export const setDot = color => {
    return {
        type: 'SET_DOT',
        payload: color
    }
}
export const setBackground = color => {
    return {
        type: 'SET_BACKGROUND',
        payload: color
    }
}
export const showEducation = education => {
    return {
        type: 'SHOW_EDUCATION',
        payload: !education
    }
}
export const showIntership = intership => {
    return {
        type: 'SHOW_INTERSHIP',
        payload: !intership
    }
}
export const showVolonteering = volonteering => {
    return {
        type: 'SHOW_VOLONTEERING',
        payload: !volonteering
    }
}
export const showSkills = skills => {
    return {
        type: 'SHOW_SKILLS',
        payload: !skills
    }
}
export const showInterests = interests => {
    return {
        type: 'SHOW_INTERESTS',
        payload: !interests
    }
}
export const showTehnicalSkills = tehnicalSkills => {
    return {
        type: 'SHOW_TEHNICAL_SKILLS',
        payload: !tehnicalSkills
    }
}
export const showSocialSkills = socialSkills => {
    return {
        type: 'SHOW_SOCIAL_SKILLS',
        payload: !socialSkills
    }
}
export const showNews = value => {
    return {
        type: 'SHOW_NEWS',
        payload: !value
    }
}
export const showYoutube = value => {
    return {
        type: 'SHOW_YOUTUBE',
        payload: !value
    }
}
export const showNotes = value => {
    return {
        type: 'SHOW_NOTES',
        payload: !value
    }
}
export const showPicture = value => {
    return {
        type: 'SHOW_PICTURE',
        payload: !value
    }
}
export const showMusic = value => {
    return {
        type: 'SHOW_MUSIC',
        payload: !value
    }
}
export const setLanguage = language => {
    return {
        type: 'SET_LANGUAGE',
        payload: language
    }
}
export const setSideDrawer = value => {
    return {
        type: 'SET_SIDEDRAWER',
        payload: !value
    }
}
export const setSideDrawerBack = () => {
    return {
        type: 'SET_SIDEDRAWER',
        payload: false
    }
}
export const showYelp = value => {
    return {
        type: 'SHOW_YELP',
        payload: !value
    }
}
export const showWalter = value => {
    return {
        type: 'SHOW_WALTER',
        payload: !value
    }
}