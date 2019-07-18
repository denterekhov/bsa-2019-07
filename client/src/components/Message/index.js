import React from 'react';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import { Delete, ThumbUp, Settings } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import { func, shape, bool, string } from 'prop-types';
import './Message.css';

const IconTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip);

const Message = ({ post, toggleMessageLike, deleteMessageAsync, setEditingMessageId }) => {
  const { id, avatar, created_at, message, user, isLiked } = post;

  const thumbUpIconColor = isLiked ? '#f00' : '#000';
  const myMessageAlignment = user === 'Den' ? 'auto' : '0';

  const handleEditMessage = () => {
    setEditingMessageId(id);
  }

  const createDeleteIcon = () => user === 'Den' 
    ? <Delete 
        className='delete_icon'
        onClick={() => deleteMessageAsync(id)}/> 
    : null;
  const createThumbUpIcon = () => user !== 'Den' 
    ? <ThumbUp 
        className='like_icon'
        style={{color: thumbUpIconColor}} 
        onClick={() => toggleMessageLike(id)}/> 
    : null;

  const deleteIcon = createDeleteIcon();
  const thumbUpIcon = createThumbUpIcon();

  const card = user === 'Den'
    ? <IconTooltip 
        placement="top"
        interactive={true}
        title={
          <Link to = {`/edit_message/:${id}`}>
            <Settings
              // onClick={handleEditMessage}
            />
          </Link>
        }>
        <Card 
          className='card'
          style={{marginLeft: myMessageAlignment}}>
          {avatar && <Avatar src={avatar} alt="user" style={{margin: 10}}/>}
          <div style={{width: '80%', maxWidth: '100%'}}>
            <p>
              {created_at}
            </p>
            <p>{message}</p>
          </div>
          {deleteIcon}
          {thumbUpIcon}
        </Card>
      </IconTooltip>
    : <Card 
        className='card'
        style={{marginLeft: myMessageAlignment}}>
        {avatar && <Avatar src={avatar} alt="user" style={{margin: 10}}/>}
        <div style={{width: '80%', maxWidth: '100%'}}>
          <p>
            {created_at}
          </p>
          <p>{message}</p>
        </div>
        {deleteIcon}
        {thumbUpIcon}
      </Card>

  return card;
}

Message.propTypes = {
  post: shape({
    id: string.isRequired, 
    avatar: string, 
    created_at: string.isRequired, 
    message: string.isRequired, 
    user: string.isRequired,
    isLiked: bool
  }),
  toggleMessageLike: func.isRequired,
  deleteMessageAsync: func.isRequired,
  setEditingMessageId: func.isRequired,
}

export { Message };
