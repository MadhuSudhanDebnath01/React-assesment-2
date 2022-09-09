import React from "react";
import { useState } from "react";
import "./mystyle.css";


function FormShow() {
const [udpuserName, setuserName] = useState();
const [udpuserDpt , setuserDpt] = useState();
const [udpgiveratintg ,setgiveRating] = useState();
const [itemState, setitem] =useState([]);
const [showInfo, setInfo] = useState(false);

const getuserName =(e) =>{
    setuserName(e.target.value);
}
const getuserDpt =(e) =>{
    setuserDpt(e.target.value);
}
const getgiveratintg =(e) =>{
    setgiveRating(e.target.value);
}
const submitForm = (e) =>{
    e.preventDefault();
    setitem((preitems)=>{
        return[...preitems,["Username : ",udpuserName, "|" ,"Department : ",udpuserDpt,"|","Rating : ",udpgiveratintg]]
    })
    setuserName("");
    setuserDpt("");
    setgiveRating("");
    setInfo("true");
}


return(
    <>
    {showInfo ? null :
    <div className="dcontainer">
        <p className="dheader"> Employee Feedback Form</p>
        <form onSubmit ={submitForm}>
            <label >Username :<input type={"text"} value={udpuserName} onChange ={getuserName} className="input"/></label><br/>
            <label >Department :<input type={"text"} value={udpuserDpt} onChange ={getuserDpt} className="input"/></label><br/>
            <label >Rating :<input type={"number"} value={udpgiveratintg} onChange ={getgiveratintg} className="input"/></label><br/>
            <button className="sbutton" type="submit">Submit</button>
        </form>
    </div> }
    {(showInfo? <div className="dcontainer">
    <div className="box2">{
        itemState.map((showdata)=>{
            return <div>{showdata}</div>
        })

        }</div>
    <button className="sbutton" onClick={()=>{setInfo(!setInfo)}}>Back</button>
    </div> : null)}
    </>
)
    }

    export default FormShow;