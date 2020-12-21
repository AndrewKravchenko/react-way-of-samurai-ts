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

const profileReducer = (state: ProfilePageType, action: ActionTypes) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 7,
                message: state.newPostText,
                likesCount: 0,
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state
        default:
            return state
    }
}
export const addPostActionCreator = (): AddPostActionType => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: string): ChangeNewTextPostActionType =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer
