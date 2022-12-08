import {useEffect, useState} from 'react';
import React from 'react';
import jwt_decode from 'jwt-decode';



function Gbutton(){


const [user,setUser]=useState({});

function callBackResponse(response){
    var userObject=jwt_decode(response.credential);
    setUser(userObject);
    document.getElementById("Google").hidden=true;

}
useEffect(()=>{
window.google.accounts.id.initialize({
client_id:"421616050048-vtv4grn27qr7icqaiksb1cep633qmnr8.apps.googleusercontent.com",
 callback: callBackResponse,
});
window.google.accounts.id.renderButton(
document.getElementById("Google"),
 {
    theme:"outline", size:"medium"
 }
)
},[]); 

return(
    <div>
        <div id='Google' ></div>
        {
            user&&
            <div>
             <img src={user.picture} alt=""/>
             <h3>{user.name}</h3>
            </div>
        }
       
    </div>
    
)
}
export default Gbutton;