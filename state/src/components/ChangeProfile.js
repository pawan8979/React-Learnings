import {useState} from "react";
import {useContext} from "react";
import {AppContext} from "../../../reactquery/src/App"; 


export const ChangeProfile=(props)=>{
    const {setUsername}= useContext(AppContext);
    const [newUsername, setNewUsername]= useState("");
    return(
        <div>
        <input onChange={(event)=>{
            setNewUsername(event.target.value);
        }}/>
        <button onClick={()=>{
            setUsername(newUsername);
            }}> Change Username
        </button>
    </div>
    );
};