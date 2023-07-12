import React from 'react'
import AdminNav from './AdminNav'

export default function Dept() {
  return (
    <div>
        <div className='dept'>
            <img src="logo.png" alt="logo" className='dlogo'/>
            <div className='dname'>Dizzo</div>
            <img src="x-button.png" className='cross'></img>
            <button style={{position:'relative',top:-10,left:-10}} className='button1'>Assign Task</button>
            <button style={{position:'relative',top:-10,left:-10}} className='button2'>Edit Details</button>
            <div className='department'>Departments</div>
            <div class="dropdown">
                <button class="dropbtn">Sort By</button>
                <div class="dropdown-content">
                    <a className="listitem2">Normal</a>
                    <a className="listitem2">Recent</a>
                    <a className="listitem2">Performance</a>
                </div>
            </div>
            <ul className='deptlist'>
                <li className='deptitems'>Accounts</li>
                <li className='deptitems'>Admin Dept</li>
                <li className='deptitems'>Finance</li>
                <li className='deptitems'>Buisness Development</li>
                <li className='deptitems'>Infrastructures</li>
                <li className='deptitems'>Research and Development</li>
                <li className='deptitems'>IT Services</li>
                <li className='deptitems'>Product development</li>
                <li className='deptitems'>Security and Transport</li>
            </ul>
        </div>
    </div>
  )
}
