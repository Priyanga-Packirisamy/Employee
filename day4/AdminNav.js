import React from 'react';
import "./App.css";

export default function AdminNav() {
  return (
    <div className = "Anav">
        <div className='navitem'>
            <img src="list.png" alt="logo" className='menupic'/>
            <img src="logo.png" alt="logo" className='pic'/>
            <p className='navtext' style={{marginRight:"50px"}}>Dizzo</p>
            <li className='navList'>
                <ul style={{marginLeft:100, color:'#a6a430'}}>MANAGE EMPLOYEE</ul>
                <ul>ATTENDANCE</ul>
                <ul style={{marginRight:"170px"}}>ASSIGN TASK</ul>
            </li>
            <button className='button'>LOGOUT</button>
            <img src="profile.jpg" alt="profile pic" className='profilepic'/>
            <p className='navtext' style={{fontSize:"18px"}}>Profile</p>
        </div>
    </div>
  )
}
