const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

export type  FollowACType = {
    type: 'FOLLOW'
    userId: number
}
export type  UnfollowACType = {
    type: 'UNFOLLOW'
    userId: number
}
export type  SetUsersACType = {
    type: 'SET_USERS'
    users: Array<UsersType>
}
export type  SetCurrentPageAC = {
    type: 'SET_CURRENT_PAGE'
    currentPage: number
}
export type  SetTotalUsersCountAC = {
    type: 'SET_TOTAL_USERS_COUNT'
    count: number
}
export type UsersType = {
    id: number
    photoUrl?: string
    followed: boolean
    name: string
    status: string | null
    uniqueUrlName: string | null
    photos: {
        small: string | null
        large: string | null
    }
    location?: {
        city: string,
        country: string
    }
}
export type UsersStateReducerType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

export type ActionUsersType = FollowACType | UnfollowACType | SetUsersACType | SetCurrentPageAC | SetTotalUsersCountAC

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}

const usersReducer = (state: UsersStateReducerType = initialState, action: ActionUsersType) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        default:
            return state
    }
}

export const followAC = (userId: number): FollowACType => ({type: FOLLOW, userId})
export const unfollowAC = (userId: number): UnfollowACType => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: UsersType[]): SetUsersACType => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage: number): SetCurrentPageAC => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalUsersCount: number): SetTotalUsersCountAC => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})

export default usersReducer
