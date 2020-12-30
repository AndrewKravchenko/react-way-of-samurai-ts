import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {Store} from "redux";

type MyPostsContainerPropsType = {
    store: Store
}

export const MyPostsContainer = (props: MyPostsContainerPropsType) => {

    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator()); //ActionCreator функц. кот возращ. экшн
    }

    let onPostChange = (text: string) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action);
    }

    return <MyPosts updateNewPostText={onPostChange}
                    addPost={addPost}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}
    />
}


