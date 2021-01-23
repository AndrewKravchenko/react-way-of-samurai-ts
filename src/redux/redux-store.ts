import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {profileReducer} from "./profile-reducer";
import {authReducer} from "./auth-reducer";
import {usersReducer} from "./users-reducer";

export type ReduxStoreType = typeof store
export type StateType = ReturnType<typeof reducers>

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPages: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers)

export default store