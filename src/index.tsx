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
                dispatch={store.dispatch.bind(store)}
                newPostText={store._state.profilePage.newPostText}
            />
        </BrowserRouter>, document.getElementById("root"));
};
rerenderEntireTree();
store.subscribe(rerenderEntireTree);