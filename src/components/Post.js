import React from 'react'
import { Avatar } from '@material-ui/core';
import '../styles/Post.css'
import InputOption from './InputOption';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

function Post({ name, description, message, photoUrl }) {
  return (
    <div className='post'>
        <div class="post__header">
            <Avatar />
            <div class="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
            <div class="post__body">
                <p>{message}</p>
            </div>

            <div class="post__buttons">
            <InputOption Icon={ThumbUpOutlinedIcon} title={"like"} color={"gray"} />
            <InputOption Icon={ChatOutlinedIcon} title={"like"} color={"gray"} />
            <InputOption Icon={ShareOutlinedIcon} title={"like"} color={"gray"} />
            <InputOption Icon={SendOutlinedIcon} title={"like"} color={"gray"} />
            </div>
    </div>
  )
}

export default Post;