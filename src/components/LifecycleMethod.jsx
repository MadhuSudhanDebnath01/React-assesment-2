import React from "react";
import './mystyle.css';


class ShowForm extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        userName:'', depertmentName:'', giveRating:''
    };
    
   }
   

   updateUserName = (e) =>{
    this.setState({userName : e.target.value})
   }
   updateDepertmentName = (e) =>{
    this.setState({depertmentName : e.target.value})
   }
   updateGiveRating = (e) =>{
    this.setState({giveRating : e.target.value})
   }

     
  render(){
    return (
      <div className="dcontainer">
        <div>
        <form >
        <h1 className='dheader'>Employee Feedback Form</h1>
        
        <label>  Name :<input  className="input" type={"text"} value={this.state.userName} onChange={this.updateUserName}/> </label><br/>
        <label> Department :<input className="input"  type={"text"} value={this.state.depertmentName} onChange={this.updateDepertmentName}/> </label><br/>
        <label> Rating :<input  className="input" type={"number"} value={this.giveRating}  onChange={this.updateGiveRating}/> </label><br/>
        
  
        <button className='sbutton' onClick ={ () =>this.setState({userName : this.state.userName},
           {depertmentName :this.state.depertmentName},{giveRating : this.state.giveRating})}>Submit</button>
           </form>
        </div>
        <div className='box2'>{this.state.userName} | {this.state.depertmentName}|{this.state.giveRating}</div>
      </div>
    );
  }
  }

export default ShowForm;
