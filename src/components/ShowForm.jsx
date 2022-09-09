import React from "react";
import './mystyle.css';
import "./SubmitForm";



class ShowForm extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        userName:'', depertmentName:'', giveRating:'',
        users : [],
        divHandler : true ,
    };
    
   }
   handleChange = (u) => {
    const { name , value } = u.target;
    this.setState({[name] : value });
}

   handelSubmit = (e) =>{
    
    const updateUser = this.state.users;
    updateUser.push({
      userName: this.state.userName,
      depertmentName : this.state.depertmentName,
      giveRating : this.state.giveRating,
    })
    
    this.setState({
      users :updateUser,
      userName: '',
      depertmentName: '',
      giveRating: '',
  });
  // this.setState(style={display : "none"});
  e.preventDefault();
     
  }

  render(){
    return (
      <>
      {
          
          this.state.divHandler   ?
      <div className="dcontainer">
        <div>
        <form onSubmit={this.handelSubmit}>
        <h1 className='dheader'>Employee Feedback Form</h1>
        
        <label>  Name :<input  className="input" type={"text"}  name='userName' value={this.state.userName} onChange={this.handleChange}/> </label><br/>
        <label> Department :<input className="input"  type={"text"}  name=' depertmentName' value={this.state.depertmentName} onChange={this.handleChange}/> </label><br/>
        <label> Rating :<input  className="input" type={"number"} name='giveRating' value={this.state.giveRating} onChange={this.handleChange}/> </label><br/>
        
  
      <input type="submit" className="sbutton" onClick={this.handleSubmit}/>
           </form>
        </div>
       
      </div>
      :
       <div className=''>
        <ShowForm users = {this.state.users}/>
          </div>
  
  }
  </>
    );
  } 
} 
export default ShowForm;
