import { types } from './types';

export const messagesActions = {
  fetchMessages: () => ({
    type: types.FETCH_MESSAGES,
  }),

  fillMessages: (messages) => ({
    type:    types.FILL_MESSAGES,
    payload: messages,
  }),

  createMessageAsync: (message) => ({
    type:    types.CREATE_MESSAGE_ASYNC,
    payload: message,
  }),

  createMessage: (message) => ({
    type:    types.CREATE_MESSAGE,
    payload: message,
  }),

  updateMessageAsync: (id, text) => ({
    type:    types.UPDATE_MESSAGE_ASYNC,
    payload: {id, text},
  }),

  updateMessage: ({id, text}) => ({
    type:    types.UPDATE_MESSAGE,
    payload: {id, text},
  }),

  deleteMessageAsync: (id) => ({
    type:    types.DELETE_MESSAGE_ASYNC,
    payload: id,
  }),

  deleteMessage: (id) => ({
    type:    types.DELETE_MESSAGE,
    payload: id,
  }),

  setEditingMessageId: (id) => ({
    type:    types.SET_EDITING_MESSAGE_ID,
    payload: id,
  }),

  toggleMessageLike: (id) => ({
    type:    types.TOGGLE_MESSAGE_LIKE,
    payload: id,
  }),
};