import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { array } from 'prop-types';

import { messagesActions } from '../../bus/messages/actions';

import './EditMessage.css';

const EditMessage = (props) => {
  const { messages, editingMessageId, history, actions } = props;
  const [editingText, setEditingText] = useState('');
  const editingMessage = messages.find(message => message.id === editingMessageId);
  
  useEffect(() => {
    setEditingText(editingMessage.message);
  }, [editingMessage.message]);

  const saveMessage = () => {
    actions.updateMessageAsync(editingMessage.id, editingText);
    history.replace('/chat')
  }

  return (
    <>
      <TextareaAutosize
        className='edit_message_textarea'
        aria-label="Textarea" 
        rows={5}  
        value={editingText}
        onChange={e => setEditingText(e.target.value)}
        style={{resize: 'none'}}
      />

      <Button onClick={saveMessage} color="primary">
        OK
      </Button>
      <Button onClick={() => {history.replace('/chat')}} color="primary">
        Cancel
      </Button>
    </>
  );
}

EditMessage.propTypes = {
  messages: array.isRequired,
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages.messageList,
    editingMessageId: state.messages.editingMessageId,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      ...messagesActions
    }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditMessage);