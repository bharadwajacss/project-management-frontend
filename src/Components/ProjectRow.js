import Axios from "axios";
import {Link} from "react-router-dom";


function ProjectRow(props) {
    const { _id,name, due, priority } = props.obj;
    
    
    const handleClick = ()=>{
        Axios.delete("https://project-management-backend-1.onrender.com/projectRoute/deleteProject/"+_id)
        .then((res)=>{
            if(res.status ===200){
                alert("record deleted succefully");
                window.location.reload();
            }
            else
                Promise.reject();

        })
        .catch((err)=>alert(err));
    }
    
    return (
        <tr>
            <td>{name}</td>
            <td>{due}</td>
            <td>{priority}</td>
           
            <td>
                <button class = "btn btn-danger"><Link style={{color:"white"}}class = "text-decoration-none" to={"/editProject/"+_id}>Edit</Link></button>
               
            </td>

            <td>
                <button class = "btn btn-primary"><Link style={{color:"white"}}class = "text-decoration-none" to={"/viewProject/"+_id}>View</Link></button>
               
            </td>

            <td>
            <button onClick={handleClick} class = "btn btn-success">Done </button>
            </td>
            
            
        </tr>
    );
}

export default ProjectRow;
