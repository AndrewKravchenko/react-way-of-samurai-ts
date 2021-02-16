import {authAPI} from "../api/api";
import {ThunkReducerType} from "../types/entities";

const SET_USER_DATA = 'SET_USER_DATA'
const TOGGLE_IS_FETCHING_FOR_AUTH = 'TOGGLE_IS_FETCHING_FOR_AUTH'
export type PropsType = typeof initialState
let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    isFetching: true
}
export type ToggleIsFetchingForAuthAC = {
    type: 'TOGGLE_IS_FETCHING_FOR_AUTH'
    isFetching: boolean
}
export type SetAuthUserDataACType = ReturnType<typeof setAuthUserData> /*{
    type: 'SET_USER_DATA'
    data:
        {
            userId: number | null
            email: string | null
            login: string | null

        }
}*/

export type ActionAuthType = ToggleIsFetchingForAuthAC | SetAuthUserDataACType

export const authReducer = (state = initialState, action: ActionAuthType): PropsType => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING_FOR_AUTH: {
            return {...state, isFetching: action.isFetching}
        }
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingForAuthAC => ({
    type: TOGGLE_IS_FETCHING_FOR_AUTH,
    isFetching
})
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null) => ({
    type: SET_USER_DATA,
    data: {userId, email, login}
}) as const
export const getAuthUserData = (): ThunkReducerType =>
    (dispatch) => {
        dispatch(toggleIsFetching(true))
        authAPI.me()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(toggleIsFetching(false))
                    let {id, email, login} = data.data
                    dispatch(setAuthUserData(id, email, login))
                }
            })
    }
