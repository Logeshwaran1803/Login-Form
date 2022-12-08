import React  from 'react';
import{ useNavigate} from 'react-router-dom';
// import jwt_decode from 'jwt-decode';
// import Main from './home'
import Gbutton from './google';


function Login() {

  const navigate=useNavigate();
  const Submit=()=>{
    navigate('/home');
  }
 return (
  <div className='container'>
    <h2>Login</h2>
    <form onSubmit={Submit}>        
        <input type="email" placeholder="Username"/>
        <input type="password" placeholder='Password'/>
        <button type='submit' >Login</button>
        <div id='or'>OR</div>
         <Gbutton/>  
    </form>   
     
  </div>         
  )
}

export default Login;