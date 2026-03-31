import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

function About(){
    const {name}=useContext(AppContext)
    return (
    <div className="container page">
        <h1>About page</h1>
        <h2>Name is :{name}</h2>
    </div>
)
}

export default About;