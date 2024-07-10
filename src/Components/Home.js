import { Link } from "react-router-dom";


function Home(){
    return(
        <div >
            
            <nav  style={{backgroundColor:"#a6e4e7",borderRadius:"15px",marginTop:"10px",marginBottom:"10px"}}  class = "navbar ">
                <Link style={{fontFamily:"Playwrite CU"}} to = "/" class = "navbar-brand mx-3">Brand Name</Link>
                <div class="nav">
                    <Link style={{color:"black",fontWeight:"500"}} to ="/login" class = "nav-link">Login</Link>
                    <Link style={{color:"black",fontWeight:"500"}} to = "/signup" class = "nav-link">Signup</Link>

                </div>
               
            </nav>

             <h4>Tell me who you are...??</h4>
                <p> Login or Sign up </p>
        </div>
    )
}
export default Home;