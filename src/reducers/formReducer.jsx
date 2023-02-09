export const INITIAL_STATE = {
    file: "",
    username: "",
    fullname: "",
    email: "",
    phone: "",
    password: "",
    address: "",
    country: "",
    categories: []
};

export const formReducer = (state, action) => {
    switch(action.type){
        case "CHANGE_INPUT":
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
            case "CHANGE_CATEGORIES":
                return {
                    ...state,
                    [action.payload.name]: action.payload.value
                }
        default:
            return state;
    }
}