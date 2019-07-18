import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import nanoid from 'nanoid';
import { array } from 'prop-types';

import { userActions } from '../../bus/users/actions';

import './UserEditor.css';

const UserEditor = (props) => {
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const { users, editingUserId, history, actions } = props;
  const editingUser = users.find(user => user.id === editingUserId);

  useEffect(() => {
    if (editingUser) {
      setNewName(editingUser.name);
      setNewEmail(editingUser.email);
      setNewPassword(editingUser.password);
    }
  }, [editingUser]);

  const clearAll = () => {
    actions.clearEditingUserId();
    setNewName('');
    setNewEmail('');
    setNewPassword('');
  }

  const createOrUpdateUser = (e) => {
    e.preventDefault();
    editingUserId 
    ? actions.updateUserAsync({
        id: editingUserId,
        name: newName,
        email: newEmail,
        password: newPassword,
        role: 'user'
      })
    : actions.createUserAsync({
        id: nanoid(),
        name: newName,
        email: newEmail,
        password: newPassword,
        role: 'user'
      })
    clearAll();
    history.push('/user_list');
  }

  const cancelUpdateMessage = () => {
    clearAll();
    history.push('/user_list');
  }

  return ( 
    <Container maxWidth="sm">
      <form onSubmit={createOrUpdateUser}>
        <TextField
          label="Name"
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          label="Email"
          type="email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          label="Password"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          margin="normal"
          required
        />
        <Button type='submit' color="primary">
          {editingUser ? 'Update' : 'Create'}
        </Button>
        <Button onClick={cancelUpdateMessage} color="primary" autoFocus>
          Cancel
        </Button>
      </form>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  users: state.users.userList,
  editingUserId: state.users.editingUserId,
})

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      ...userActions
    }, dispatch),
  }
}

UserEditor.propTypes = {
  users: array.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEditor);
