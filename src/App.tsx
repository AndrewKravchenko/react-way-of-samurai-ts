import React from "react";
import "./App.css";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import store, {
    AddPostActionType,
    ChangeNewTextPostActionType,
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
    // addPost: (postText: string) => void
    // updateNewPostText: (newText: string) => void
    dispatch: (action: AddPostActionType | ChangeNewTextPostActionType) => void
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
                            // updateNewPostText={props.updateNewPostText}
                        />
                    )}
                />
            </div>
        </div>
    );
}
