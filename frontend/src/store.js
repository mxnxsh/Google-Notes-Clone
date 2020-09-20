import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import Cookie from 'js-cookie'
import { noteListReducer, noteSaveReducer, noteDeleteReducer } from "./reducers/noteReducer";
import { userRegisterReducer, userLoginReducer } from "./reducers/userReducer";

const userInfo = Cookie.getJSON('userInfo') || null;
const initialState = {
    userLogin: { userInfo }
};
const reducers = combineReducers({
    noteList:noteListReducer,
    saveNote:noteSaveReducer,
    delNote: noteDeleteReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;