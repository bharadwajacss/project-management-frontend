import { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios"

function Signup() {
  const [username,setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
 
    const arr=[username,email,password];


    const handleSubmit =(event)=>{
            const data ={username:arr[0],email:arr[1],password:arr[2]};        
            Axios.post("https://project-management-backend-1.onrender.com/userRoute/signup",data)
        .then((res)=>{
            if(res.status === 200){
                console.log(arr);
                console.log(data);
                alert("new user added")
            }
            else
                Promise.reject();
        })
        .catch((err)=>{
            alert(err);
        })
            event.target.reset();
    }
    

    return(
       
       <div >

            <nav style={{backgroundColor:"#a6e4e7",borderRadius:"15px",marginTop:"10px",marginBottom:"10px"}} class = "navbar ">
                <Link to = "/" class = "navbar-brand mx-3">Brand Name</Link>
                <div class="nav">
                    <Link  style={{color:"black",fontWeight:"500"}} to ="/login" class = "nav-link">Login</Link>
                    <Link  style={{color:"black",fontWeight:"500"}} to = "/signup" class = "nav-link">Signup</Link>

                </div>
               
            </nav>
            <h5>Signup</h5>
            <div  style={{maxWidth:"40%", margin:"0px auto"}}>
                
              <form class = "form-control" onSubmit = {handleSubmit}>
                  <label for ="username" >Username :</label>
                  <input id="username" onChange={(event)=>setusername(event.target.value)} class="form-control my-3" placeholder="Enter username" />
                    <label for="email" >Email :</label>
                  <input id="email"  onChange={(event)=>setEmail(event.target.value)} class="form-control my-3" placeholder="Enter Email" />
                  
                  <label for="password" >Password :</label>
                  <input id="password" onChange={(event)=>setPassword(event.target.value)} type="text" class="form-control my-3" placeholder="Enter Password" />
                  <button  type="submit" class="btn btn-primary d-block mx-auto my-3">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Signup;