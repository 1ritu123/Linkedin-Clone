import React from 'react'
import './Css/header.css';
import {Avatar}from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import firebase from 'firebase';
const Headeroptions = ({Icon,title,avatar}) => {
  const user=useSelector(selectUser)
  console.log("Reduxuser",user.photoURL)
  return (
    <div className='header__options'>
        {
            Icon &&<Icon></Icon>
        }
        {
            avatar && <Avatar name={avatar} src={user.photoURL} onClick={e=>firebase.auth().signOut()} />
        }
       
       <span>{title}</span>
    </div>
  )
}

export default Headeroptions
