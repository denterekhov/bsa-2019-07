import React, { useState } from 'react';
import nanoid from 'nanoid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import { func } from 'prop-types';

import './MessageInput.css';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  }
}));

const MessageInput = (props) => {
  const classes = useStyles();
  const [message, setMessage] = useState('');

  const handleCreateMessage = (e) => {
    const dateInISOFormat = ((new Date()).toISOString()).slice(0, 10);
    const created_at = `${dateInISOFormat} ` + (new Date()).toLocaleTimeString();

    e.preventDefault();
    if (!(message.trim())) {
      return;
    }
    props.createMessageAsync({
      id: nanoid(),
      user: "Den",
      created_at,
      isLiked: false,
      message,
      marked_read: false,
    });
    setMessage('');
  }

  return (
    <>
      <form 
        onSubmit={handleCreateMessage}
        className='form'>
        <TextField
          label="Message"
          className={classes.textField}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          margin="normal"
          style={{width: '80%'}}
        />
        <Button variant="contained" color="primary" className={classes.button} size="small" type="submit">
          Send
          <Icon className={classes.rightIcon}>send</Icon>
        </Button>
      </form>
    </>
  )
}

MessageInput.propTypes = {
  createMessageAsync: func.isRequired
}

export { MessageInput };
