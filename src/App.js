import React , {Component} from 'react';
import './App.css';
import Person from './Components/Person/Person';
import ArrayMap from './Components/ArrayMap/ArrayMap';
import Form from './Components/Form';
import Functional from './Components/Functional';
import {Demo} from './Components/Demo';
import ControledComponent from './Components/ControledComponent';
import Index from "./Components/FigmaToHtml/Index"
import MicrosoftClone from './Components/TalwindCss/MicrosoftClone';

class App extends Component {
  constructor(props){
    super(props);
    this.props=props;
    console.log(`[app] constructor`);
    this.state = {
      person : [
        {
        // id : 1,
        name : "Mudassir",
        age : 12,
      },
      {
        // id : 2,
        name : "Mudassir Arif",
        age : 2,
      },
      {
        // id : 3,
        name : "Muhammad Mudassir",
        age : 121,
      },
      {
        // id : 4,
        name : "Muhammad Mudassir Qureshi",
        age : 191,
      },
    ],
    isShown : true,
    }
    this.toggleHandler = this.toggleHandler.bind(this);
  }
  toggleHandler (){
    // alert();
    // console.log(this.state);
    this.setState({isShown : !this.state.isShown})
  }
  removeHandler=(personIndex)=>{
      // alert(personIndex);
      const personCopy = this.state.person;
      // console.log(personCopy[personIndex]);
      // console.log(personCopy);
      personCopy.splice(personIndex , 1);
      // console.log(personCopy);
      this.setState({person : personCopy});
      // console.log("hello");
  }
 
  render(){
    let person;
    if(this.state.isShown){
      person = this.state.person.map((p , index)=>{
        return <ArrayMap remove={()=> this.removeHandler(index)} /*key={p.id}*/ key={index} /*id={p.id}*/ name={p.name} age={p.age}/>
      });
    }
    else{
      person = "";
    }
    return (
      <div >
        {/* <h1>Hello World</h1> */}
        {/* <Person name="Mudassir" age="22"/> */}
        {/* <button onClick={this.toggleHandler}>Toggle</button> */}
        {/* {person} */}
        {/* Example of ternary Opeartor */}
        {/* {this.state.isShown === true ? person : ""} */}


        {/* <label className='label'>Testing</label> */}
        {/* 1. When You have a knowledge about the size of data */}
        {/* <ArrayMap name={this.state.person[0].name} age={this.state.person[0].age}/>
        <ArrayMap name={this.state.person[1].name} age={this.state.person[1].age}/>
        <ArrayMap name={this.state.person[2].name} age={this.state.person[2].age}/>
         */}
        {/* <Functional name="Arif" age="42"/> */}
        {/* <Demo/> */}
        {/* <Form/> */}

        {/* <ControledComponent/> */}
        {/* <Index/> */}
        <MicrosoftClone/>
      </div>
    );
  }
}

export default App;
