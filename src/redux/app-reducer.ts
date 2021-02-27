import {getAuthUserData} from "./auth-reducer";
import {ThunkReducerType} from "../types/entities";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

let initialState = {
    initialized: false
}
export type initializedSuccessACType = ReturnType<typeof initializedSuccess>

const appReducer = (state = initialState, action: initializedSuccessACType) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {...state, initialized: true}
        }
        default:
            return state
    }
}
export const initializedSuccess = () => ({type: "INITIALIZED_SUCCESS"})
export const initializeApp = (): ThunkReducerType =>
    (dispatch) => {
        let promise = dispatch(getAuthUserData())
        Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
    }
export default appReducer
