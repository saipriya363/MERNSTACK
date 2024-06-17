//rafce

import React, { useState } from "react";


const Signup = () => {

   // const [name, setName] = useState("saipriya");
  //  console.log("saipriya");
    //const [age, setAge] = useState("");
   // console.log("19");
   // const [place, setPlace] = useState("");
   // console.log("baghuabol");
   // const [city, setCity] = useState("");
    //console.log("talcher");
   // const [pincode, setPincode] = useState("");
    //console.log("759100");
    //const [postoffice, setPostoffice] = useState("");
   // console.log("hatatota");
   // const [ward, setWard] = useState("");
    //console.log("19");
   // const [dist, setDist] = useState("");
   // console.log("angul");
   // const [country, setCountry] = useState("");
    //console.log("india");
   // const [state, setState] = useState("");
   // console.log("odisha");
  //  const [block,setBlock] = useState("");
   // console.log("hatatota");
    const [policestation,setPolicestation] = useState("");
    console.log(talcher);

  return (
    <div>
        <form>
           <label>Username:</label>
           <br />
            <input type="text" placeholder="Add username" /> 
            
           <label>Useremail:</label>
           <br />
            <input type="text" placeholder="Add useremail" /> 
            
           <label>Userpassword:</label>
           <br />
            <input type="text" placeholder="Add userpassword" /> 
            <button>Sign Up</button>
        </form>
    </div>
  )
}

export default Signup