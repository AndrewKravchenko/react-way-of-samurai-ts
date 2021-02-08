import React from 'react';
import {updateNewMessageBodyCreator, sendMessageCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {ActionTypes} from "../../redux/state";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state:StateType) => {
    return {
        dialogsPages: state.dialogsPages
    }
}
let mapDispatchToProps = (dispatch: (action: ActionTypes) => void) => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

// let AuthRedirectComponent = withAuthRedirect(Dialogs)
//
// export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

