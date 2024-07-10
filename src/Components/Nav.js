import {Link} from "react-router-dom";


function Nav(){
    return(
        <nav s style={{backgroundColor:"#a6e4e7",borderRadius:"15px",marginTop:"10px",marginBottom:"10px"}}  class = "navbar ">
            <Link style={{ fontFamily:"Playwrite CU"}} to = "/login/userHome" class = "navbar-brand mx-3">Brand Name</Link>
        <div class="nav">
            
            <Link style={{color:"black",fontWeight:"500"}} to = "/createProject" class = "nav-link"> Create Project</Link>
            <Link style={{color:"black",fontWeight:"500"}} to = "/trackProject" class = "nav-link"> Track Project</Link>
            <Link style={{color:"black",fontWeight:"500"}} to ="/" class = "nav-link"> Logout</Link>

        </div>
        
        </nav>
    )
}
export default Nav;