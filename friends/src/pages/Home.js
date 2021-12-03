import { useReducer } from "react";
import Header from "./Componenets/Header";
import './Form.css'



const Home =() =>{
    
    return(

        <>
        <Header />

        <div className="user_info">
            <div className="user_profile"></div>
            <p className="user_info_adjust"><b>Name:</b></p>
            <p className="user_info_adjust"><b>Bio:</b></p>

        </div>
        </>


    )
}

export default Home;