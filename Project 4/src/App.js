import React, { useState } from "react";
import './App.css';
const App=()=>{
  const [detail,setDetail] = useState({
    firstname : '',
    lastname : '',
    email : '',
    mobilenumber : ''
  });
  const inputEvent=(event)=>{
    const value = event.target.value;
    const detail = event.target.name;
    // console.log(value);
    // console.log(detail);   
    setDetail((preValue)=>{ //Prevalue has 4 attributes, firstname,lastname,email and mobilenumber.
      // console.log(preValue);
      if(detail=="firstname"){
        return{
          firstname : value,
          lastname : preValue.lastname,
          email : preValue.email,
          mobilenumber : preValue.mobilenumber
        };
      }
      else if(detail=="lastname"){
        return{
          firstname : preValue.firstname,
          lastname : value,
          email : preValue.email,
          mobilenumber : preValue.mobilenumber
        };
      }
      else if(detail=="email"){
        return{
          firstname : preValue.firstname,
          lastname : preValue.lastname,
          email : value,
          mobilenumber : preValue.mobilenumber
        };
      }
      else if(detail=="mobilenumber"){
        return{
          firstname : preValue.firstname,
          lastname : preValue.lastname,
          email : preValue.email,
          mobilenumber : value
        };
      }
    });
  };
  const onSubmitEvent=(event)=>{
    event.preventDefault();    
  };
  return (
    <>
    <form onSubmit={onSubmitEvent}>
    <div>
      <h1>Hello {detail.firstname} {detail.lastname}</h1>
      <h3>{detail.email}</h3>
      <h4>{detail.mobilenumber}</h4>
      <input type="text" placeholder='Enter your first name' name = "firstname" onChange={inputEvent}/>
      <input type="text" placeholder='Enter your last name' name = "lastname" onChange={inputEvent}/>
      <input type="email" placeholder='Enter your email' name = "email" onChange={inputEvent}/>
      <input type="number" placeholder='Enter your mobile number' name = "mobilenumber" onChange={inputEvent}/>
      <button type='submit'>Click Here</button>
    </div>
    </form>
    </>
  );
}

export default App;
