const postsInitialState = []

const postsReducer = (state=postsInitialState, action) => {
    switch(action.type) {
        case 'GET_POSTS': {
            return [...action.payload]
        }
        default: {
            return state
        }
    }
}

export default postsReducer