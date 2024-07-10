import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";
import Nav from "./Nav";
import TrackProject from "./TrackProject";
import { Link } from "react-router-dom";

function ViewProject() {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        Axios.get(`https://project-management-backend-1.onrender.com/projectRoute/viewProject/${id}`)
            .then((res) => {
                if (res.status === 200) {
                    setData(res.data);
                } else {
                    Promise.reject();
                }
            })
            .catch((err) => {
                setError(err.message);
                alert(err);
            });
    }, [id]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div><Nav /></div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                    
                    <div style={{ textAlign: 'center', maxWidth: '600px', width: '100%', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9', boxShadow: '0 0 30px rgba(0, 0, 0, 0.1)' }}>
                        <h1 style={{ textDecoration:"underline", fontSize: '24px', color: '#333', marginBottom: '10px' }}>Project Details</h1>
                        <p><strong>ID:</strong> {data._id}</p>
                        <p><strong>Name:</strong> {data.name}</p>
                        <p><strong>Duedate :</strong> {data.due}</p>
                        <p><strong>Priority:</strong> {data.priority}</p>
                        <p><strong>Description:</strong> {data.desc}</p>
                        <p><strong>Members:</strong> {data.members}</p>
                        {/* Render other project fields as needed */}
                        <button style={{margin:"5px"}} class="btn btn-primary"> <Link style={{color:"white",textDecoration:"none"}}  to="/trackProject">Back</Link></button>
                        <button style={{margin:"5px"}} class="btn btn-warning"> <Link style={{color:"white",textDecoration:"none"}}  to="/trackProject">Assign Tasks</Link></button>

                    </div>
            
                    </div>

        </div>
    );
}

export default ViewProject;
