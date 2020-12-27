import {combineReducers, createStore, Store} from "redux";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPages: dialogsReducer,
    sidebar: sidebarReducer
})

let store: Store = createStore(reducers)

export default store