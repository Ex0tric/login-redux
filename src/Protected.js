import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Protected({Component}){

  const myState = useSelector((state)=>state);
  
  let navigate = useNavigate();

  useEffect(()=>{
    if(!myState.user){
      navigate('/')
    }
  })

  return(
    <>
      <Component/>
    </>
  )
} 

export default Protected;