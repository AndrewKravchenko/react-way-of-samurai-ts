import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";

export type ReduxStoreType = typeof store

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPages: dialogsReducer,
    sidebar: sidebarReducer
})

let store = createStore(reducers)

export default store