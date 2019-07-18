import React, { useState }  from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { bool, func } from 'prop-types';
import Spinner from '../Spinner/Spinner';

import { authActions } from '../../bus/auth/actions';
import './Login.css';

const mapStateToProps = (state) => ({
  isFetching: state.ui.isFetching,
});

const mapDispatchToProps = {
  loginAsync: authActions.loginAsync,
};

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.loginAsync({login, password});
  }

  return (
    <>
      <Spinner/>
      <form 
        className='login_form'
        onSubmit={handleSubmit}>
        <TextField
          label="Login"
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          label="Password"
          type="password"
          className={classes.textField}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary" className={classes.button}>
          Login
        </Button>
      </form>
    </>
  )
}

Login.propTypes = {
  isFetching: bool.isRequired,
  loginAsync: func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
