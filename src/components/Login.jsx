import React, { useState } from "react";
import propTypes from "prop-types"



function Login(props){

    const [user,setUser]=useState({
        email:"",
        password:""
    })

    const [err,setErr]=useState("")






    function handleChange(event){
var {name,value}=event.target;
  

setUser((pre)=>{
   return {
     ...pre,
    [name]:value
   }

})

    }

    
  function handleSubmit(){

    
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
       email:user.email,  
       password:user.password
      })
      };

      if(user.email.length !==0 && user.password.length !==0){
        fetch('https://todo-backend-cx73.onrender.com/', requestOptions)
        .then(response => response.json())
        .then(data =>{
         
          if(data.length!==0){
            props.setToken(data[0])
          }
          else{
                 setErr("Invalid Email or Password!")
          }
          
         
      });

      }
     else{
      setErr("Enter email and password")
     }
  
  

     
     
  }



// className="col-12 col-md-8 col-lg-6 col-xl-5"
return (



<section className="vh-100 gradient-custom">
  <div className="container py-5 h-100" >
    <div className="row d-flex justify-content-center align-items-center h-100" >
      <div >
        <div className="card bg-dark text-white" style={{borderRadius: "1rem"}}>
          <div className="card-body p-5 text-center" >

            <div className="mb-md-5 mt-md-4 pb-5">

              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">Please enter your email and password!</p>
              <p style={{color:"red"}}>{err}</p>

              <div className="form-outline form-white mb-4">
              <label className="form-label" htmlFor="typeEmailX">Email</label>
                <input name="email" onChange={handleChange} type="email" id="typeEmailX" className="form-control form-control-lg" />
                
              </div>

              <div className="form-outline form-white mb-4">
              <label className="form-label" htmlFor="typePasswordX">Password</label>
                <input name="password" onChange={handleChange} type="password" id="typePasswordX" className="form-control form-control-lg" />
                
              </div>
             <br></br>
              {/* <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p> */}

              <button className="btn btn-outline-light btn-lg px-5" type="submit" onClick={handleSubmit}>Login</button>

              <div className="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
              </div>

            </div>

            <div>
              <p className="mb-0">Don't have an account? <a href="/signup" className="text-white-50 fw-bold">Sign Up</a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>



)

}

Login.propTypes={
  setToken:propTypes.func.isRequired,
  setItems:propTypes.func
}

export default Login;

