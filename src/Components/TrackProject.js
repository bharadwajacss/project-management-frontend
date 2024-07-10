import Axios from "axios";
import { useEffect, useState } from "react";
import ProjectRow from "./ProjectRow";
import Nav from "./Nav";

function TrackProject() {
    const [arr, setArr] = useState([]);

    useEffect(() => {
        Axios.get("https://project-management-backend-1.onrender.com/projectRoute")
            .then((res) => {
                if (res.status === 200) {
                    setArr(res.data);
                } else {
                    return Promise.reject();
                }
            })
            .catch((err) => alert(err));
    }, []);

    const ListItems = () => {
        return arr.map((val, ind) => {
            return <ProjectRow key={ind} obj={val} />; 
        });
    };

    return (
        <div>
            <Nav></Nav>
                <table  className="table table-bordered-stripped table-success">
                    <thead>
                        <tr>
                            <th className="text-left">Name</th>
                            <th className="text-left">Due yyyy-mm-dd</th>
                            <th className="text-left">Priority</th>
                          
                            <th className="text-left">Edit</th>
                            <th className="text-left">View</th>

                            <th className="text-left">MarkDone</th>
                            
                            

                        </tr>
                    </thead>
                    <tbody>
                        {ListItems()}
                    </tbody>
                </table>
        </div>
    );
}

export default TrackProject;
