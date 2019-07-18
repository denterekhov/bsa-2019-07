import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { string, func } from 'prop-types';

import './EditMessage.css';

const EditMessage = (props) => {
  const { id, message, history, updateMessageAsync } = props;
  const [editingText, setEditingText] = useState('');

  useEffect(() => {
    setEditingText(message);
  }, [message]);

  const saveMessage = () => {
    updateMessageAsync(id, editingText);
    history.replace('/chat');
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
  message: string.isRequired,
  updateMessageAsync: func.isRequired, 
}


export { EditMessage };