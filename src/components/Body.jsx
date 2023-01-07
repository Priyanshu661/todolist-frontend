import React ,{useState} from "react";


function Body(props){

    const [item, setItem] = useState("");

    function handleChange(event) {
        const { value } = event.target;
    
        setItem(value);
      }



      function handleDelete(item){

        // console.log(item)
        // console.log(props.token)
        const requestOptions = {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
          id:props.token,
          name:item
          })
          };
      
      
         fetch('https://todo-backend-cx73.onrender.com/delete', requestOptions)
          .then(response => response.json())
          .then(data =>{
           console.log(data)
           
           
        });
      }
    

return(

    <div className="body" >
<div className="containor">


<div className="heading">
  <h1>To-Do List</h1>
</div>
<div className="form">
  <input onChange={handleChange} value={item} type="text" />
  <button className="button" onClick={()=>{
  props.handleSubmit(item)
  setItem("")
  }}>
    <span>Add</span>
  </button>
</div>
<div>
  <ul>
    {props.itemList.map((todoItem,index) =>{
      return(
        <div key={index} >
      <li key={index}>{todoItem} <button onClick={()=>(handleDelete(todoItem))} className="deleteButton">X</button></li>
      
      </div>
    )})}



  </ul>
</div>
</div>
<br></br>
<button onClick={()=>(props.handleDeleteAccount())} className="button Delbtn"><span>Delete Account</span></button>
<button onClick={()=>(props.handleLogout())} className="button"> <span>Logout</span></button>

</div>
)

}

export default Body;