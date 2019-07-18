import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { EditMessage } from '../components/EditMessage';
import UserList from '../components/UserList';
import UserEditor from '../components/UserEditor/UserEditor';
import Chat from '../components/Chat';

const Private = props => {
    const { isAdmin, messages, updateMessageAsync } = props;
    return (
        <Switch>
            <Route exact component = { Chat } path = { '/chat' } />
            <Route
                path = '/edit_message/:id'
                render = { (props) => {
                    const { match } = props;
                    const { id, message } = messages && messages.find((message) => `:${message.id}` === match.params.id);

                    return (
                        <EditMessage 
                            {...props} 
                            id = { id } 
                            message = { message } 
                            updateMessageAsync={updateMessageAsync}/>
                    );
                } }
            />
            {isAdmin && <Route exact component = { UserEditor } path = { '/user_editor' } />}
            {isAdmin && <Route exact component = { UserList } path = { '/user_list' } />}
            <Redirect to = { isAdmin ? '/user_list' : '/chat' } />
        </Switch>
    );
}

export { Private };