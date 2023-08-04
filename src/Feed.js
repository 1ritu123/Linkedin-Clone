import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import PhotoIcon from '@material-ui/icons/Photo';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventIcon from '@material-ui/icons/Event';
import AssignmentIcon from '@material-ui/icons/Assignment';
import './Css/feed.css';
import Post from '../src/Post';
import { db } from '../src/Firebase';
import firebase from 'firebase'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
  import FlipMove from 'react-flip-move';
function Feed() {

  const user=useSelector(selectUser)

    const[input,setInput]=useState();
    const[posts,setPost]=useState();
 
const submitPost =async(e)=>{
    e.preventDefault();
  db.collection("posts").add({
    name:user.displayName,
    description:'This is test post',
    message:input,
    photoURL:user.photoURL,
    timestamp:firebase.firestore.FieldValue.serverTimestamp()
   
  })
  setInput(" ")
}

 
 


useEffect(() => {

  db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot=>{
    setPost(snapshot.docs.map(doc=>({
       id:doc.id,
       data:doc.data() 

    })))
  })

  
}, [])
console.log("posts",posts)

  return (
    <div className="feed">
        <div className="feed__input">
            <div className='feed__form'>
            <Avatar src= {user.photoURL}/>
            <form onSubmit={submitPost}>
                <input type="text"placeholder='  Start a post here ' value={input} onChange={e=>setInput(e.target.value)}/>
                <input type="submit"/>
            </form>
            </div>
        <div className='feed__options'>
            <div className='options'>
                <PhotoIcon style={{color:'#70b5f9'}}/>
                <span>Photo</span>
            </div>
            <div className='options'>
                <YouTubeIcon style={{color:'#7fc15e'}}/>
                <span>Video</span>
            </div>
            <div className='options'>
                <EventIcon style={{color:'#e7a33e'}}/>
                <span>Event</span>
            </div><div className='options'>
                <AssignmentIcon style={{color:'#fc9295'}}/>
                <span>Article</span>
            </div>
        </div>
     
        </div>
        <FlipMove>
        {
            posts?.map(({id,data:{name,description,message,photoURL}})=>{

            return    <Post key={id} id={id} name={name} description={description} message={message} photoUrl={photoURL}/>

            })

  }
  </FlipMove>
        </div>
  )
}

export default Feed
