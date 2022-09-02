import logo from './logo.svg';
import './App.css';
import ShowForm from './components/ShowForm'

function App() {
  return (
    <>
    <ShowForm />
    </>
  );
}

export default App;



// import React from "react";
// import './App.css';


// class App extends React.Component{
//     constructor(props){
//       super(props);
//       this.state = {
//         userName:'', depertmentName:'', giveRating:''
//     }
//    }
//    updateUserName = (e) =>{
//     this.setState({userName : e.target.id})
//    }
//    updateDepertmentName = (e) =>{
//     this.setState({depertmentName : e.target.id})
//    }
//    updateGiveRating = (e) =>{
//     this.setState({giveRating : e.target.id})
//    }
     
//   render(){
//     return (
//       <div className="dcontainer">
//         <div>
//         <form>
//         <h1 className='dheader'>Employee Feedback Form</h1>
        
//         <label>  Name :<input  className="input" type={"text"} id={this.state.userName} onChange={this.updateUserName}/> </label><br/>
//         <label> Department :<input className="input"  type={"text"} id={this.state.depertmentName} onChange={this.updateDepertmentName}/> </label><br/>
//         <label> Rating :<input  className="input" type={"number"} id={this.giveRating}  onChange={this.updateGiveRating}/> </label><br/>
        
  
//         <button className='sbutton' onClick ={ () =>this.setState({userName : this.state.userName},
//            {depertmentName :this.state.depertmentName},{giveRating : this.state.giveRating})}>Submit</button>
//            </form>
//         </div>
//         <div className='box2'>{this.state.userName} | {this.state.depertmentName}|{this.state.giveRating}</div>
//       </div>
//     );
//   }
//   }

// export default App;
