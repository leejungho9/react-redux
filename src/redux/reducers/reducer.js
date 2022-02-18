import { combineReducers } from "redux";
import filterReducer from "./filter";
import todosReducer from "./todos";
import users from "./users";


const reducer = combineReducers({
    todos : todosReducer,
    filter : filterReducer,
    users  : users
})

export default reducer;