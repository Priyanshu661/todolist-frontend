import React, { useState } from "react";
import propTypes from "prop-types"
import {Navigate} from "react-router-dom";




function SignUp(props){
    const [user,setUser]=useState({
        email:"",
        password:""
    })


    const [redirect,setRedirect]=useState(false);
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

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            email:user.email,
            password:user.password
            })
            };
          fetch('https://todo-backend-cx73.onrender.com/signup', options)
          .then(response => response.json())
          .then(data =>{

            if(data.err){
             
              setErr(data.err)
            }

            else{
              props.setToken(data)
               setRedirect(true)
            }
            
          

          
           
          });



    }

    if(redirect){
return(
 
     <Navigate to="/"/>

 
)
    
      
    }

    


    return (
    <div>
    
    <section  className="vh-100 bg-image"
  style={{backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')"}}>
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">

      <div className="row d-flex justify-content-center align-items-center h-100">
        <div>
          <div className="card" style={{borderRadius: "15px"}}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">Create an account</h2>

              <p style={{color:"blue"}}>{err}</p>

              <form>

                {/* <div className="form-outline mb-4">
                  <input type="text" id="form3Example1cg" className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example1cg">Your Name</label>
                </div> */}

                <div className="form-outline mb-4">
                  <input onChange={handleChange} name="email" type="email" id="form3Example3cg" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                </div>

                <div className="form-outline mb-4">
                  <input onChange={handleChange} name="password"   type="password" id="form3Example4cg" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form3Example4cg">Password</label>
                </div>

                {/* <div className="form-outline mb-4">
                  <input type="password" id="form3Example4cdg" className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example4cdg">Repeat your password</label>
                </div> */}

                {/* <div className="form-check d-flex justify-content-center mb-5">
                  <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                  <label className="form-check-label" for="form2Example3g">
                    I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                  </label>
                </div> */}

                <div className="d-flex justify-content-center">
                  <button type="button" onClick={handleSubmit}
                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                </div>

                <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="/"
                    className="fw-bold text-body"><u>Login here</u></a></p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
    
        )

       
          
}
SignUp.propTypes={
    setToken:propTypes.func.isRequired
  }

export default SignUp;