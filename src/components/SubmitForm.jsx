import React from "react";


  function SubmitForm (props){
    return(
      <div> 
    {
      props.users.map((j)=>{

        return(
          <p>
          {`Name : ${j.userName} | Department : ${j.depertmentName} | Rating : ${j.giveRating}`}
          </p>

        )
      })
    }
   
    </div> 
    )
    

  }
  export default SubmitForm;