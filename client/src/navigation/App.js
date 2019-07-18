import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { messagesActions } from '../bus/messages/actions';

import { Private } from './Private';
import { Public } from './Public';

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    isAdmin: state.auth.isAdmin,
    messages: state.messages.messageList,
});

const mapDispatchToProps = (dispatch) => ({
  updateMessageAsync: bindActionCreators(messagesActions.updateMessageAsync, dispatch)
});

const App = props => {
  const { isAuthenticated, isAdmin, messages, updateMessageAsync } = props;

  return isAuthenticated ? <Private isAdmin={isAdmin} messages={messages} updateMessageAsync={updateMessageAsync}/> : <Public />;
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
