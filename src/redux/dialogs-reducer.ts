import {ActionTypes, DialogPageType} from "./state";

const SEND_MESSAGE = 'SEND-MESSAGE'

type SendMessageActionType = {
    type: 'SEND-MESSAGE'
    newMessageBody: string
}
export type MessageActionTypes = SendMessageActionType

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
export const dialogsReducer = (state: DialogPageType = initialState, action: ActionTypes): DialogPageType => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: action.newMessageBody}]
            }
        default:
            return state
    }
}
export const sendMessageCreator = (newMessageBody: string): SendMessageActionType => ({type: SEND_MESSAGE, newMessageBody})