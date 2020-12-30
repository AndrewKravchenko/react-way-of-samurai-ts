import React from 'react';
import {updateNewMessageBodyCreator, sendMessageCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {Store} from "redux";

type DialogsContainerPropsType = {
    store: Store
}

export const DialogsContainer = (props: DialogsContainerPropsType) => {
    let state = props.store.getState().dialogsPages

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return <Dialogs updateNewMessageBody={onNewMessageChange}
                    sendMessage={onSendMessageClick}
                    dialogsPages={state}
    />

}



