import { useState } from "react";
import NewProject from "./NewProject";
import Axios from "axios"


export default function CreateProject(){
    const[arr,setArr]=useState([])


    const getState =(childData)=>{
        setArr(childData);
    }


    const handleSubmit = (event)=>{
            event.preventDefault();
        	const data ={name:arr[0],due:arr[1],priority:arr[2],desc : arr[3],members :arr[4]};        
            Axios.post("https://project-management-backend-1.onrender.com/projectRoute/createProject",data)
        .then((res)=>{
            if(res.status === 200)
                alert("new record added")
            else
                Promise.reject();
        })
        .catch((err)=>{
            alert(err);
        })
	   event.target.reset();
    }


    return(
        
        <form onSubmit={handleSubmit}>
            <NewProject getState={getState} 
                nameValue=""
                dueValue=""
                priorityValue=""
                descValue=""
                membersValue=""
            
                                        >
                
                
                
                Create Project
                </NewProject>

        </form>
    )
}
