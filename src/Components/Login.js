import { useState } from 'react';
import './PartnerDashboard.css';
import { useSelector, useDispatch } from 'react-redux';
import {setUser} from '../Actions/Index'
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";

function Login() {

  const myState = useSelector((state)=>state);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [ read, setRead] = useState('')

  function handleChange(event){
    event.stopPropagation();
    setRead({ ...read, [event.target.name]:event.target.value})
  } 

  function handleSubmit(event){
    event.stopPropagation();
    event.preventDefault();

    fetch('http://192.168.0.169:8000/user/login/',
			{
				method : 'POST',
				body : JSON.stringify(read),  
				headers : {
					"Content-Type" : "application/json"
				}
			})
			.then(response=>response.json())
			.then(data=>{
        console.log('Response received', data);
        dispatch(setUser(data))
        localStorage.setItem('tokens', JSON.stringify(data))
        navigate('/superadmin')
      })
      .catch(()=>{
        console.log('Unable to Login');
      });
  } 

    return(
  <div className="Login ">
    <form method='post'>
      <input type="text" name="username" className='mx-auto d-block' onChange={(event)=>handleChange(event)}/>
      <input type="password" name="password" className='mx-auto d-block' onChange={(event)=>handleChange(event)}/>
      <input type="submit" value="Login" onClick={(event)=>handleSubmit(event)}className='login d-block mx-auto'/>
    </form>
  </div>
    );

}

export default Login;
