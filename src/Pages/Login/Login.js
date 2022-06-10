import React from "react"
import project_logo from '../../components/cable-car-cabin.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faLock} from '@fortawesome/free-solid-svg-icons'
import './Login.css'
import '../../App.css'
import { Link, useHistory,useLocation } from "react-router-dom"



const Login=()=>{
    return(
      <div className="App">
        <div>
          <button className="homeButton"> <Link to='/' type='button' className="btn shadow-none" style={{textDecoration:'none',color:'white'}}>Homepage</Link></button>

          
          </div>
                <div className='wrapper'>
        <div className='content'>
          <div className='logo'>
            <img src={project_logo} alt='' />            
          </div>
          <div className='c1'>
            <h2>Start your journey here!</h2>
          </div>
          <div className='form'>

            <form className="form">
              <div className='eInput'>
                <FontAwesomeIcon className='icon' icon={faUser}/>
                <input className='inputinfo' type='text' id='input1' placeholder='Enter email address'/>
              </div>
              <div className='eInput'>
                <FontAwesomeIcon className='icon' icon={faLock}/>
                <input className='inputinfo' type='text' id='input2' placeholder='Enter email password'/>
              </div>
              <div className='forgotpass'>
                <a href="/??">Forgot password?</a>
              </div>
              <div>
                <button className='submit'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>

    )

}

export default Login;