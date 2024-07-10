import { useParams } from "react-router-dom";
import NewProject from "./NewProject";
import { useEffect,useState } from "react";
import Axios  from "axios";

function EditProject(){



    const {id} = useParams();
    const [initialValue,setInitialValue] = useState({name:"",due:"",priority:"",desc:"",members:""});

    const [newData,setNewData] = useState([])

    useEffect(()=>{
        Axios.get("https://project-management-backend-1.onrender.com/projectRoute/updateProject/"+id)
        .then((res)=>{
            if(res.status===200){
                const {name,due,priority,desc,members}=res.data;
                setInitialValue({name,due,priority,desc,members});
                
            }
            else    
                Promise.reject();
        })
        .catch((err)=>alert(err));
        
    },[id])

    const getState=(childData)=>{
        setNewData(childData);
    }

        const handleSubmit = (event) =>{
            event.preventDefault();
            const data = {name :newData[0],due :newData[1],priority:newData[2],desc:newData[3],members:newData[4]};
            Axios.put("https://project-management-backend-1.onrender.com/proJectRoute/updateProject/"+id,data)
            .then((res)=>{
                if(res.status===200)
                    alert("Updated Successfully")
                else    
                    Promise.reject();
            })
            .catch((err)=>alert(err));
            event.target.reset();
        }

    return(
        <form onSubmit={handleSubmit}>
            <NewProject getState = {getState}
                        nameValue = {initialValue.name }
                        dueValue = {initialValue.due}
                        priorityValue = {initialValue.priority}
                        descValue = {initialValue.desc} 
                        membersValue = {initialValue.members}    >
                            Update Student
            </NewProject>
        </form>
    )

}
export default EditProject; 
