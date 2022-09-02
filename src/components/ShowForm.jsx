import React from "react";
import './mystyle.css';



class ShowForm extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        userName:'', depertmentName:'', giveRating:''
    };
    
   }
   handelSubmit = (e) =>{
    e.preventDefault();
    // alert(+this.state.userName + this.state.depertmentName  +this.state.giveRating );
    console.log(e.target[2].value)
    this.setState({
      userName: e.target[0].value,
      depertmentName: e.target[1].value,
      giveRating: e.target[2].value,
  });
     
  }
  handelChange =(e) =>{
//     const userName =e.target.name;
//     this.setState({
//       userName: e.target.value
     
//   });
  
//     const depertmentName =e.target.dpertmentName;
//     this.setState({
//       depertmentName: e.target.value
//   });
//   const giveRating =e.target. giveRating;
//   this.setState({
//      giveRating: e.target.value
// });
  }
  render(){
    return (
      <div className="dcontainer">
        <div>
        <form onSubmit={this.handelSubmit}>
        <h1 className='dheader'>Employee Feedback Form</h1>
        
        <label>  Name :<input  className="input" type={"text"}/> </label><br/>
        <label> Department :<input className="input"  type={"text"} /> </label><br/>
        <label> Rating :<input  className="input" type={"number"}/> </label><br/>
        
  
      <input type="submit" className="sbutton" />
           </form>
        </div>
        <div className='box2'>
          User Name: {this.state.userName} <br/>
          Depertment Name{this.state.depertmentName}  <br/>
          Rating: {this.state.giveRating}  <br/>
          </div>
      </div>
    );
  }
  }

export default ShowForm;
