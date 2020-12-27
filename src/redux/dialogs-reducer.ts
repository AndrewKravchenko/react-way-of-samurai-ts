import {ActionTypes, DialogPageType} from "./state";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

type SendMessageActionType = {
    type: 'SEND-MESSAGE'
}
type UpdateNewMessageBodyActionType = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    body: string
}
export type MessageActionTypes = SendMessageActionType | UpdateNewMessageBodyActionType

let initialState = {
    dialogs: [
        {id: 1, name: "Andrey"},
        {id: 2, name: "Dima"},
        {id: 3, name: "Artem"},
        {id: 4, name: "Sveta"},
        {id: 5, name: "Katya"},
        {id: 6, name: "Mark"},
    ],
    messages: [
        {id: 1, message: "Hello"},
        {id: 2, message: "How is your name?"},
        {id: 3, message: "Yo, man!"},
        {id: 4, message: "How are you?"},
        {id: 5, message: "E boy"},
        {id: 6, message: "see you soon"},
    ],
    newMessageBody: ''
}
const dialogsReducer = (state: DialogPageType = initialState, action: ActionTypes): DialogPageType => {

    switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODY:

            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.messages.push({id: 6, message: body})
            state.newMessageBody = ''
            return state
        default:
            return state
    }
}
export const sendMessageCreator = (): SendMessageActionType => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body: string): UpdateNewMessageBodyActionType =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer