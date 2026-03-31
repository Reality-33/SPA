import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

function Home(){
    const {name,setName} = useContext(AppContext)
    return (
    <div className="container page">
        <h1>Home page</h1>
        <h2>Welcome {name}</h2>

        <button onClick={()=>{
            setName("Frontend Dev")
        }}>
            change name
        </button>
    </div>
)
}

export default Home;