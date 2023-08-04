import { Avatar } from '@material-ui/core'
import React, { forwardRef, useState } from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './Css/post.css';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';
import SendIcon from '@material-ui/icons/Send';
import ShareIcon from '@material-ui/icons/Share';
import DeleteIcon from '@material-ui/icons/Delete';
import { db } from './Firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
 

const Post=forwardRef(({id,name,description,message,photoURL},ref)=>{
  const [color1,setColor1]=useState(false)

  const user=useSelector(selectUser)

const handleDelete=()=>{
  console.log("deleted")
db.collection("posts").doc(id).delete()

}
const handleColor=()=>{
  setColor1(true)
}

  return (
    <div className='posts' ref={ref}>
      <div className='post__header'>
      <div className='post__headerLeft'>
         <Avatar  src={user.photoURL}/>
         <div className='post_profile_details'>
            <h3>{user.displayName}</h3>
            <p>{description}</p>
         </div>
     </div>
       <DeleteIcon style={{cursor:'pointer'}} onClick={handleDelete}  />

      </div>
      <div className='post__body'>
        <p>{message}</p>
      </div>
      <div className='post__footer'>
        <div className='post__footer__options'>
            <ThumbUpAltIcon onClick={handleColor} style={{color:color1?"blue":"rgb(90,90,90)"}} />
            <span>Like</span>
        </div>
        <div className='post__footer__options'>
            <CommentIcon/>
            <span>Comment</span>
        </div>
        <div className='post__footer__options'>
            <ShareIcon/>
            <span>Share</span>
        </div>
        <div className='post__footer__options'>
            <SendIcon/>
            <span>Send</span>
        </div>
      </div>
    </div>
  )})

export default Post
