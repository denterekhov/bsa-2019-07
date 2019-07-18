import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { array, string } from 'prop-types';

import { Header } from '../Header/Header';
import { MessageList } from '../MessageList/MessageList';
import { MessageInput } from '../MessageInput/MessageInput';
import Spinner from '../Spinner/Spinner';

import { messagesActions } from '../../bus/messages/actions';

class Chat extends Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.fetchMessages();
  }

  static propTypes = {
    messages: array.isRequired,
    editingMessageId: string.isRequired
  }
  
  render() {
    const { messages, history, actions } = this.props;
    const usersQuantity = (new Set(messages.map(({user}) => user))).size;
    const lastMessageTime = messages.length && messages[messages.length - 1].created_at;

    return (
      <>
        {messages.length 
          ? <>
              <Spinner/>
              <Header 
                messageQuantity={messages.length}
                usersQuantity={usersQuantity}
                lastMessageTime={lastMessageTime}
              />
              <CssBaseline />
              <Container maxWidth="md">
                <MessageList 
                  messages={messages}
                  history={history}
                  toggleMessageLike={actions.toggleMessageLike}
                  deleteMessageAsync={actions.deleteMessageAsync}
                  setEditingMessageId={actions.setEditingMessageId}
                />
                <MessageInput 
                  createMessageAsync={actions.createMessageAsync}
                />
              </Container>
          </>
          : null
        }
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages.messageList,
    editingMessageId: state.messages.editingMessageId,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(messagesActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
