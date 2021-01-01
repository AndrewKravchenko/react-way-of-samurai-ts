import React from 'react';
import {updateNewMessageBodyCreator, sendMessageCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from '../../StoreContext';

export const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState()

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator())
                }
                let onNewMessageChange = (body: string) => {
                    store.dispatch(updateNewMessageBodyCreator(body))
                }
                return <Dialogs updateNewMessageBody={onNewMessageChange}
                                sendMessage={onSendMessageClick}
                                dialogsPages={state.dialogsPages}/>
            }
            }
        </StoreContext.Consumer>
    )
}



