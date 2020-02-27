export const theme = (state = 'background-white', action) => {
    switch(action.type) {
        case 'SET_THEME': return action.payload;
        default: return state;
    }
}
export const name = (state = 'black', action) => {
    switch(action.type) {
        case 'SET_NAME': return action.payload;
        default: return state;
    }
}
export const dot = (state = 'rgba(218, 173, 173, 0.31)', action) => {
    switch(action.type) {
        case 'SET_DOT': return action.payload;
        default: return state;
    }
}