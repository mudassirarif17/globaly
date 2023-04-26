import React , {Component} from 'react'

 class ControledComponent extends Component{
    constructor(props) {
      super(props);
    
      this.state = {
         name : "Dj Scienec",
      }
    }
    changeHandler = (event) =>{
       const name = event.target.value;
       console.log("old",this.state);
       this.setState({name},()=>{
        console.log("new",this.state);
       })
    }
    render(){
        return (
            <div>
              <form>
                <h1>Controled Component</h1>
                <label>Name : </label>
                <input type='text' name='user-name' value={this.state.name} onChange={this.changeHandler}></input>
              </form>
            </div>
          )
    }
}
export default ControledComponent;