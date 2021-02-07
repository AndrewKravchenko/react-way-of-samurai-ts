import {applyMiddleware, combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {profileReducer} from "./profile-reducer";
import {authReducer} from "./auth-reducer";
import {usersReducer} from "./users-reducer";
import thunkMiddleware from "redux-thunk"


export type ReduxStoreType = typeof store
export type StateType = ReturnType<typeof reducer>

let reducer = combineReducers({
    profilePage: profileReducer,
    dialogsPages: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducer, applyMiddleware(thunkMiddleware))

export default store