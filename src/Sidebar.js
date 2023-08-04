import React from 'react'
import './Css/sidebar.css'
import {Avatar}from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
const Sidebar = () => {
    const user=useSelector(selectUser)
  return (
    <div className="sidebar">
        <div className="sidebar__profile">
            <img src="https://www.freecodecamp.org/news/content/images/2021/06/w-qjCHPZbeXCQ-unsplash.jpg"/>


            <div className="profile__details">
                <Avatar src={user.photoURL}/>
                <h4>{user.displayName}</h4>
                <p>Web Devloper</p>
            </div>
            <div className='profile__stats'>
                <span>Who viewed your profile</span>
                <span className='stat__number'>20</span>
            </div>
            
            <div className='profile__stats'>
                <span>Connection<br/><b>Grow Your Network</b></span>
                <span className='stat__number'>160</span>
            </div>

        </div>
           <div className='sidebar__recent'>
            <p>Recent</p>
            <p className='hash'><span>#</span>branding</p>
            <p className='hash'><span>#</span>marketing</p>
            <p className='hash'><span>#</span>webdevlopment</p>
            <p className='hash'><span>#</span>programming</p>
            <p className='hash'><span>#</span>reactjs</p>
           </div>
    </div>
  )
}

export default Sidebar

            