const formDefaultState = {
    name: null,
    age: null,
    gender: null,
}

const formReducer = (state = formDefaultState, action) => {
    switch (action.type) {
        case "UPDATE_FORM":
            return { ...state, ...action.payload }

        default:
            return state
    }
}

export default formReducer;