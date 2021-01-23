import {ActionTypes, ProfilePageType} from "./state";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'


export type  AddPostActionType = {
    type: 'ADD-POST'
}
export type SetUserProfileActionType = {
    type: 'SET_USER_PROFILE',
    profile: ProfileType
}
export type ChangeNewTextPostActionType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string
}
export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string,
        github: string,
        instagram: string,
        mainLink: null,
        twitter: string,
        vk: string,
        website: null,
        youtube: null
    }
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: {
        large: string,
        small: string
    }
}
export type PostActionTypes = AddPostActionType | ChangeNewTextPostActionType | SetUserProfileActionType

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first post?", likesCount: 11},
    ],
    newPostText: "it-camasutra.com",
    profile: null,
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 7,
                message: state.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state
    }
}
export const addPostActionCreator = (): AddPostActionType => ({type: ADD_POST})
export const setUserProfile = (profile: ProfileType):SetUserProfileActionType => ({type: SET_USER_PROFILE, profile})
export const updateNewPostTextActionCreator = (text: string): ChangeNewTextPostActionType =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})