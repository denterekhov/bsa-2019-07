import React, { Fragment } from 'react';
import Divider from '@material-ui/core/Divider';
import { Message } from '../Message/Message';
import { array, func } from 'prop-types';

const MessageList = ({ messages, history, deleteMessageAsync, toggleMessageLike, setEditingMessageId }) => {
  const createMessageList = () => {
    return messages.map(( post, ind) => {
      const card = <Message 
        key={post.id}
        post={post}
        history={history}
        toggleMessageLike={toggleMessageLike}
        deleteMessageAsync={deleteMessageAsync}
        setEditingMessageId={setEditingMessageId}/>;

      const nextMessage = messages[ind + 1];
      const nextDay = nextMessage && new Date(messages[ind + 1].created_at);
      const previousDay = new Date(messages[ind].created_at);

      if(nextMessage && nextDay.getDate() - previousDay.getDate()) {

        return (
          <Fragment key={post.id}>
            {card}
            <Divider style={{marginTop: 20}}/>
            <p style={{textAlign: 'center'}}>{(new Date(messages[ind + 1].created_at)).toLocaleString('ru', {  month: 'long', day: 'numeric'})}</p>
          </Fragment>
        )
      } else {
        return card;
      }
    })
  }

  const messageList = createMessageList();

  return (
    <>
      {messageList}
    </>
  )
}

MessageList.propTypes = {
  messages: array.isRequired,
  toggleMessageLike: func.isRequired,
  deleteMessageAsync: func.isRequired,
  setEditingMessageId: func.isRequired,
}

export { MessageList };
