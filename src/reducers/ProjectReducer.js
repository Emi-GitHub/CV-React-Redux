export const music = (state = false, action) => {
    switch(action.type) {
        case 'SHOW_MUSIC': return action.payload;
        case 'SHOW_YOUTUBE': return false;
        case 'SHOW_NOTES': return false;
        case 'SHOW_PICTURE': return false;
        case 'SHOW_HOOKS': return false;
        case 'SHOW_NEWS': return false;
        case 'SHOW_YELP': return false;
        case 'SHOW_WALTER': return false;
        default: return state;
    }
}
export const youtube = (state = false, action) => {
    switch(action.type) {
        case 'SHOW_YOUTUBE': return action.payload;
        case 'SHOW_MUSIC': return false;
        case 'SHOW_NOTES': return false;
        case 'SHOW_PICTURE': return false;
        case 'SHOW_HOOKS': return false;
        case 'SHOW_NEWS': return false;
        case 'SHOW_YELP': return false;
        case 'SHOW_WALTER': return false;
        default: return state;
    }
}
export const notes = (state = false, action) => {
    switch(action.type) {
        case 'SHOW_NOTES': return action.payload;
        case 'SHOW_YOUTUBE': return false;
        case 'SHOW_MUSIC': return false;
        case 'SHOW_PICTURE': return false;
        case 'SHOW_HOOKS': return false;
        case 'SHOW_NEWS': return false;
        case 'SHOW_YELP': return false;
        case 'SHOW_WALTER': return false;
        default: return state;
    }
}
export const picture = (state = false, action) => {
    switch(action.type) {
        case 'SHOW_PICTURE': return action.payload;
        case 'SHOW_YOUTUBE': return false;
        case 'SHOW_NOTES': return false;
        case 'SHOW_MUSIC': return false;
        case 'SHOW_HOOKS': return false;
        case 'SHOW_NEWS': return false;
        case 'SHOW_YELP': return false;
        case 'SHOW_WALTER': return false;
        default: return state;
    }
}
export const news = (state = false, action) => {
    switch(action.type) {
        case 'SHOW_NEWS': return action.payload;
        case 'SHOW_YOUTUBE': return false;
        case 'SHOW_NOTES': return false;
        case 'SHOW_PICTURE': return false;
        case 'SHOW_HOOKS': return false;
        case 'SHOW_MUSIC': return false;
        case 'SHOW_YELP': return false;
        case 'SHOW_WALTER': return false;
        default: return state;
    }
}
export const yelp = (state = false, action) => {
    switch(action.type) {
        case 'SHOW_YELP': return action.payload;
        case 'SHOW_WALTER': return false;
        case 'SHOW_NEWS': return false;
        case 'SHOW_YOUTUBE': return false;
        case 'SHOW_NOTES': return false;
        case 'SHOW_PICTURE': return false;
        case 'SHOW_HOOKS': return false;
        case 'SHOW_MUSIC': return false;
        default: return state;
    }
}
export const walter = (state = false, action) => {
    switch(action.type) {
        case 'SHOW_WALTER': return action.payload;
        case 'SHOW_YELP': return false;
        case 'SHOW_NEWS': return false;
        case 'SHOW_YOUTUBE': return false;
        case 'SHOW_NOTES': return false;
        case 'SHOW_PICTURE': return false;
        case 'SHOW_HOOKS': return false;
        case 'SHOW_MUSIC': return false;
        default: return state;
    }
}