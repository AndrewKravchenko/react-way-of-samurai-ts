import React from 'react';
import {sendMessageCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {ActionTypes} from "../../redux/state";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state: StateType) => {
    return {
        dialogsPages: state.dialogsPages
    }
}
let mapDispatchToProps = (dispatch: (action: ActionTypes) => void) => {
    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(Dialogs)

