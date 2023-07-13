import React from 'react'
import { useState } from 'react';
import AdminNav from './AdminNav'

export default function Register() {
    const [pass, setPass] = useState('');
    const [cpass, setcPass] = useState('');
    const [rpassmessage, setrpassmessage] = useState('');
    const[rcpassmessage, setrcpassmessage] = useState('');

    function handlePassChange(e){
        setPass(e.target.value);
    }

    function handleConPassChange(e){
        setcPass(e.target.value);
    }

    const handleValidation = (e) => {

        e.preventDefault();

        const passwordregex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

        if(!passwordregex.test(pass)){
          setrpassmessage("Password is invalid");
        }
        else{
          setrpassmessage("");
        }

        if( pass != cpass){
          setrcpassmessage("Password Mismatxh");
        }
        else{
          setrcpassmessage("");
        }
      }

  return (
    <div className='regback'>
        <AdminNav/>
        <div className='register'>
            <form onSubmit={handleValidation}>
                <div className='grid'>
                    <div className='rgrid1'>
                        <div className='rtag'>Personal Info</div>
                            <div className='griddesignn'>
                                <div className='regtext1'>Employee Id</div>
                                <input style={{width:250}} className='rinput' placeholder='Employee Id' type='text' id='eid'/>
                                <div className='regtext1'>First Name</div>
                                <input style={{width:250}} className='rinput' placeholder='First Name' type='text' id='fullname'/>
                                <div className='regtext1'>last Name</div>
                                <input style={{width:250}} className='rinput' placeholder='Last Name' type='text' id='lastname'/>
                                <div style={{display:'flex'}}>
                                    <div className='regtext1'>Gender</div>
                                    <input type='radio' id='male'/>
                                    <div className='regtext1'>Male</div>
                                    <input type='radio' id='female'/>
                                    <div className='regtext1'>Female</div>
                                </div>
                                <div className='regtext1'>Date of Birth</div>
                                <input className='rinput' type='date' id='date'/>
                                <div className='regtext1'>Marital Status</div>
                                <input style={{width:250}} className='rinput' placeholder='Marital Status' type='text' id='marital'/>
                            </div>

                    </div>
                    <div className='rgrid2'>
                        <div className='rtag'>Contact Info</div>
                            <div className='griddesignn'>
                                <div className='regtext1'>Address</div>
                                <input className='rinput' placeholder='Street' type='text' id='street'/>
                                <input className='rinput' placeholder='City' type='text' id='city'/>
                                <input className='rinput' placeholder='State' type='text' id='state'/>
                                <input className='rinput' placeholder='Zip Code' type='text' id='zip code'/>
                                <input className='rinput' placeholder='Country' type='text' id='country'/>
                                <div className='regtext1'>Mobile Number</div>
                                <input style={{width:200}} className='rinput' placeholder='Mobile' type='text' id='Mobile'/>
                                <div className='regtext1'>Email</div>
                                <input style={{width:200}}  className='rinput' placeholder='Email' type='email' id='email'/>
                                <div className='regtext1'>LinkedIn Profile</div>
                                <input style={{width:200}} className='rinput' placeholder='Linkedin' type='text' id='linkedin'/>
                                <div className='regtext1'>GitHub Profile</div>
                                <input style={{width:200}} className='rinput' placeholder='Github' type='text' id='github'/>
                            </div>
                    </div>
                    <div className='rgrid3'>
                    <div className='rtag'>Acadamic Info</div>

                            <div className='griddesignn'>
                                <div className='regtext1'>Education</div>
                                <input className='rinput' placeholder='Qualification' type='text' id='text'/>
                                <input className='rinput' placeholder='Specialization' type='text' id='special'/>
                                <input className='rinput' placeholder='Year' type='number' min="1960" max="2023" id='year'/>
                                <input className='rinput' placeholder='CGPA' type='number' min="1" max="10" id='cgpa'/>
                                <input className='rinput' placeholder='Experience' type='number' id='experience'/>
                                <input className='rinput' placeholder='Years of Agreement' type='number' id='agreement'/>
                                <input className='rinput' placeholder='Position' type='text' id='position'/>
                                <input className='rinput' placeholder='Salary' type='text' id='salary'/>
                                <div className='regtext1'>Hire Date</div>
                                <input className='rinput' placeholder='Hire Date' type='date' id='hdate'/>
                                <div className='regtext1'>Date of Joining</div>
                                <input style={{marginRight:20}} className='rinput' placeholder='Pass' type='date' id='ddate'/>
                                <input style={{marginTop:20}} className='rinput' placeholder='Password' type='password' name='pass' onChange={handlePassChange}/>
                                <b className='message2'><p>{rpassmessage}</p></b>
                                <input className='rinput' placeholder='Confirm Password' type='password' name='cpass' onChange={handleConPassChange}/>
                                <b className='message2'><p>{rcpassmessage}</p></b>
                            </div>

                    </div>
                </div>
                <center><input type='submit' className='rbutton'/></center>
            </form>
        </div>
    </div>
  )
}
