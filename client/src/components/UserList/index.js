import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { userActions } from '../../bus/users/actions';
import { makeStyles } from '@material-ui/core/styles';

import './UserList.css';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const UserList = (props) => {
  const classes = useStyles();
  const { users, history, actions } = props;
  useEffect(() => {
    actions.fetchUsers();
  }, [actions]);

  const handleCreateUser = () => {
    history.push('/user_editor');
  }

  const handleEditUser = (id) => {
    actions.setEditingUserId(id);
    history.push('/user_editor');
  }

  return (
    <>
      <CssBaseline/>
      <Container maxWidth="md">
        <Button variant="contained" color="primary" className={classes.button} onClick={handleCreateUser}>
          Add user
        </Button>
        {users.length && users.map(({id, name, email}) => 
          <Card key={id} className='user_card'>
            <p>{name}</p>
            <p>{email}</p>
            <Button variant="contained" color="primary" className={classes.button} onClick={() => handleEditUser(id)}>
              Edit
            </Button>
            <Button variant="contained" color="secondary" className={classes.button} onClick={() => actions.deleteUserAsync(id)}>
              Delete
            </Button>
          </Card>
        )}
      </Container>
    </>
  )
}


const mapStateToProps = (state) => {
  return {
    users: state.users.userList,
    editingUserId: state.users.editingUserId,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      ...userActions
    }, dispatch),
  }
}

UserList.propTypes = {
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
