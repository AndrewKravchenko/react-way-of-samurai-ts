import React from "react";
import "./App.css";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import store, {
    ActionTypes,
    DialogsType,
    MessagesType,
    PostsType,
    RootStateType
} from "./redux/state";

type StatePropsType = {
    posts: Array<PostsType>
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newPostText: string
    dispatch: (action: ActionTypes) => void
}

export function App(props: StatePropsType) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                {/*<Route path='/dialogs' render={() => <Dialogs dialogs={props.dialogs} messages={props.messages} />}/>*/}
                {/*<Route path='/profile' render={() => <Profile posts={props.posts}/>}/>*/}
                <Route
                    path="/dialogs"
                    render={() => <Dialogs
                        dialogs={props.dialogs}
                        messages={props.messages}
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
