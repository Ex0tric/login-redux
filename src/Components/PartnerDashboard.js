import './PartnerDashboard.css';
import Button from './LogeOut';
import { useSelector, useDispatch } from 'react-redux';


function Partner() {

  const myState = useSelector((state)=>state);
  
    return (<>
      {
        myState.user ? (<div className='main'><h1 className='text-center'>Welcome, {myState.user.username} </h1><Button></Button></div>) : null
      }
    </>)
}

export default Partner;
