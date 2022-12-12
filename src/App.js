import React ,{useState}from "react";
import "./style.css";
import Header from "./components/Header"


// let a ={name:"as",email:"sadsadsa"}
// console.log({})

let a =[1,2,3]
console.log(a);
let b=[...a,4]
console.log(b)
console.log(a);

export default function App() {
  let [name,setName] =useState({
    username:"",
    email:"",
    password:""
  })
  console.log(name,"this is our name")

  function handleClick(event){
 
  }
  function handleChange(e){

 
   setName((prev)=>{
     return {
       ...prev,
       [e.target.name]:e.target.value
     }
   })
  }
  return (
    <div>
      <form>
        <input type="text" onChange={handleChange} name="username" />
        <input type="text" onChange={handleChange} name="email" />
        <input type="text" onChange={handleChange} name="password" />

        <h3></h3>

       <button onClick={handleClick}>submit</button>
      </form>
    </div>
  );
}




