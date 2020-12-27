import React from "react";
import "./App.css";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {PostsType, StoreType} from "./redux/state";
import {PostActionTypes} from "./redux/profile-reducer";
import {Store} from 'redux'
import store from "./redux/redux-store";

type StatePropsType = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: PostActionTypes) => void
    store: Store
}

export function App(props: StatePropsType) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route
                    path="/dialogs"
                    render={() => <Dialogs
                        store={props.store}
                    />}
                />
                <Route
                    path="/profile"
                    render={() => (
                        <Profile
                            posts={props.posts}
                            newPostText={props.newPostText}
                            dispatch={props.dispatch}
                        />
                    )}
                />
            </div>
        </div>
    );
}
