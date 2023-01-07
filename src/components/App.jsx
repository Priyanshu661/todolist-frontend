import React, { useEffect, useState } from "react";
import Login from "./Login";
import Body from "./Body";
import SignUp from "./signUp";
import useToken from "./useToken";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {


const [itemList, setItems] = useState([]);

const {token,setToken}=useToken()
// localStorage.setItem('token',JSON.stringify(""))

useEffect(()=>{
  const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
        id:token
        })
        };
  const fetchData=async()=>{
    const response=await fetch('https://todo-backend-cx73.onrender.com/data',options);
    const newData=await response.json();
     setItems(newData.todos)
   
  }

  if(token){
    fetchData()
  }
 
},[itemList,token])


 function handleDeleteAccount(){

  const requestOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
    id:token
    })
    };
    

   fetch('https://todo-backend-cx73.onrender.com/deleteaccount', requestOptions)
    .then(localStorage.setItem('token', JSON.stringify("")), setToken(""))

 }
 



function handleSubmit(item) {
  const requestOptions = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
    id:token,
    item:item
    })
    };
    

   fetch('https://todo-backend-cx73.onrender.com/add', requestOptions)
    .then(response => response.json())
  .then(data =>{
  console.log(data)
   setItems(data[0].todos)
     
     
   });

   
}

function handleLogout(){
  localStorage.setItem('token', JSON.stringify(""));
  setToken("")
}






 

if(token){

  return (
    
    <div>
     
    
        <Router>
    
        <div>
    
        {/* <Navigate to="/" ></Navigate> */}
    
    
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
         
    
          </ul> */}
        <Routes>
          <Route exact path='/' element={< Body handleLogout={handleLogout} handleSubmit={handleSubmit} itemList={itemList} token={token} handleDeleteAccount={handleDeleteAccount}/>}></Route>
          
         <Route exact path="/signup" element={<SignUp setToken={setToken}/>}></Route>
          {/* <Route exact path="/signup" element={<SignUp/>}></Route> */}
          {/* <Route exact path='/' element={< Login setItems={setItems}  />}></Route> */}
        </Routes>
      
         </div>
        </Router>
    
    
    </div>
      );
    


}



  return (<div>
  {/* <Login setItems={setItems} setToken={setToken}/> */}
  <Router>
  <div>
  <Routes>
     
     <Route exact path="/" element={<Login setItems={setItems} setToken={setToken}/>}></Route>
    <Route exact path="/signup" element={<SignUp setToken={setToken}/>}></Route>

    </Routes>

  </div>

    


  </Router>
  
  </div>)





  

}



export default App;
