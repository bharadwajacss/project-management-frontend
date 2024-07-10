import { useEffect, useState } from "react"
import Nav from "./Nav"
;
export default function NewProject(props){
    const [name,setName] =useState(props.nameValue)
    const [due,setDue] =useState(props.dueValue)
    const [priority,setPriority] =useState(props.priorityValue)
    const [desc,setDesc] =useState(props.descValue)
    const [members,setMembers] =useState(props.membersValue)
    
   
    useEffect(()=>{
        setName(props.nameValue);
        setDue(props.dueValue);
        setPriority(props.priorityValue);
        setDesc(props.descValue);
        setMembers(props.membersValue);
    },[props.nameValue,props.dueValue,props.priorityValue,props.descValue,props.membersValue]);

    const arr=[name,due,priority,desc,members];


    const handleClick =()=>{
        console.log(arr);
        props.getState(arr);
    }

    return(
        <div>
            <Nav />
            <div style={{maxWidth:"40%", margin:"0px auto"}}>

                <label for="projectName">Project Name :</label>
                <input id="projectName" defaultValue={props.nameValue} onChange={(event)=>setName(event.target.value)} class="form-control" placeholder="Enter Name" />
                <label for="due">Due Date :</label>
                <input id="due" defaultValue={props.dueValue} onChange={(event)=>setDue(event.target.value)} class="form-control" placeholder="Enter Due date(mm/dd/yyyy)" />
                <label for= "priority">Priority :</label>
                <input id="priority" defaultValue={props.priorityValue} onChange= {(event)=>setPriority(event.target.value)} class="form-control" placeholder="High/Medium/Low" />
                <label for= "desc">Descrption :</label>
                <input id="desc" defaultValue={props.descValue} onChange= {(event)=>setDesc(event.target.value)} class="form-control" placeholder="Enter Description" />
                <label for= "members">Members :</label>
                <input id="members" defaultValue={props.membersValue} onChange= {(event)=>setMembers(event.target.value)} class="form-control" placeholder="Add members" />
                
                
                <button onClick={handleClick} type="submit" class="btn btn-primary d-block mx-auto my-3">{props.children}</button>
            </div>
        </div>
    )
}
