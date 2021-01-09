const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

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
}
export type ActionUsersType = FollowACType | UnfollowACType | SetUsersACType

let initialState = {
    users: []
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
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}

export const followAC = (userId: number): FollowACType => ({type: FOLLOW, userId})
export const unfollowAC = (userId: number): UnfollowACType => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: UsersType[]): SetUsersACType => ({type: SET_USERS, users})

export default usersReducer
