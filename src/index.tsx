import store from "./redux/state";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {App} from "./App";
import { BrowserRouter } from "react-router-dom";

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                posts={store._state.profilePage.posts}
                dialogs={store._state.dialogsPagegs.dialogs}
                messages={store._state.dialogsPagegs.messages}
                addPost={store.addPost.bind(store)}
                newPostText={store._state.profilePage.newPostText}
                updateNewPostText={store.updateNewPostText.bind(store)}
            />
        </BrowserRouter>, document.getElementById("root"));
};
rerenderEntireTree();
store.subscribe(rerenderEntireTree);