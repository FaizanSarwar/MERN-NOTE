import { combineReducers, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userLoginReducer,
  userRegisterReducer,
} from "./redux/reducers/userReducers";
import { noteCreateReducer, noteReducer } from "./redux/reducers/notesReducers";
// combine all reducers here .....
const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  noteReducers: noteReducer,
  createNoteReducer : noteCreateReducer
});
// store thunk as a array and then pass it to applyMiddleware

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromLocalStorage },
};
const middleware = [thunk];
// actually create store start from here.... pass reducer ,initialstate
// and middleware into it........
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
