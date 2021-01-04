import {ActionTypes, ProfilePageType} from "./state";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export type  AddPostActionType = {
    type: 'ADD-POST'
}
export type ChangeNewTextPostActionType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string
}
export type PostActionTypes = AddPostActionType | ChangeNewTextPostActionType

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first post?", likesCount: 11},
    ],
    newPostText: "it-camasutra.com",
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case ADD_POST: {
            let stateCopy = {...state}
            let newPost = {
                id: 7,
                message: state.newPostText,
                likesCount: 0,
            };
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT:
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText;
            return stateCopy
        default:
            return state
    }
}
export const addPostActionCreator = (): AddPostActionType => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: string): ChangeNewTextPostActionType =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer
