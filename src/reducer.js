const themeStyle = (state,action) => {
    if(!state){
        return {
            themeColor:'red'
        }
    }
    switch(action.type){
        case 'changeColor':
        return {
            ...state,
            themeColor:action.themeColor
        };
        default:
        return state
    }
}

export default themeStyle;