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
                dispatch={store.dispatch.bind(store)}
                newPostText={store._state.profilePage.newPostText}
                store={store}
            />
        </BrowserRouter>, document.getElementById("root"));
};
rerenderEntireTree();
store.subscribe(rerenderEntireTree);