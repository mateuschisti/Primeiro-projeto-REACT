import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import SendIcon from '@material-ui/icons/Send';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

import './index.css'
import { IconButton } from '@material-ui/core';

export const Interacao = () => {
  return <div className='interacao'>
    <div className='interacao-esquerda'>
      <IconButton><FavoriteIcon/></IconButton>
      <IconButton><ChatBubbleOutlineIcon/></IconButton>
      <IconButton><SendIcon/></IconButton>
    </div>
    <IconButton><BookmarkBorderIcon/></IconButton>
  </div>
}