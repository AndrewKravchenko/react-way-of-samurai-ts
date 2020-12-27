import store from "./redux/redux-store";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {App} from "./App";
import { BrowserRouter } from "react-router-dom";

export const rerenderEntireTree = (state: any) => {

    ReactDOM.render(
        <BrowserRouter>
            <App
                // posts={store._state.profilePage.posts}
                // dispatch={store.dispatch.bind(store)}
                // newPostText={store._state.profilePage.newPostText}
                // store={store}
                posts={store.getState().profilePage.posts}
                dispatch={store.dispatch.bind(store)}
                newPostText={store.getState().profilePage.newPostText}
                store={store}
            />
        </BrowserRouter>, document.getElementById("root"));
};
// rerenderEntireTree();
// store.subscribe(rerenderEntireTree);

rerenderEntireTree(store.getState());

store.subscribe(() => {

    let state = store.getState()
    rerenderEntireTree(state)
});