import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import EditMessage from '../components/EditMessage/EditMessage';
import UserList from '../components/UserList/UserList';
import UserEditor from '../components/UserEditor/UserEditor';
import Chat from '../components/Chat/Chat';

const Private = props => {
    const { isAdmin } = props;
    return (
        <Switch>
            <Route exact component = { Chat } path = { '/chat' } />
            <Route exact component = { EditMessage } path = { '/edit_message' } />
            {isAdmin && <Route exact component = { UserEditor } path = { '/user_editor' } />}
            {isAdmin && <Route exact component = { UserList } path = { '/user_list' } />}
            <Redirect to = { isAdmin ? '/user_list' : '/chat' } />
        </Switch>
    );
}

export { Private };