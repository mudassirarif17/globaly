import react, { Component } from "react";
// External css
import "../Person/Person.css"
class Person extends Component {
    constructor(props) {
        super(props)
        // this.props=props;
        // class based component me state constructor me lkhte hain
        this.state = {
            name : "john",
            age : 22,
        };
        console.log(`Person constructor`);
        // this.buttonHandler = this.buttonHandler.bind(this);
    }
    // Simple func Bind nh kre ga data yani (this) ko . use bind method use krne pre ge bind krne k liye
    // Simple func component k bd lkna hota hai 
    // buttonHandler(){
    //     console.log(this.props);
    // }

     // Component mounting process
  componentDidMount(){
    console.log("[person] componentDidMount");
  }

  // Component unmonting life cycle method
  componentWillUnmount(){
    console.log("[person] componentWillUnmount");
  }
    render() {
        // Internal CSS
        const styles = {
            fontSize: "50px",
            backgroundColor: "purple",
        }
        // Arrow func render k under write ho skta hai
        // arrow function bind krta hai data pr simple func nh krta 
        const buttonHandler = () =>{
            // alert("Hello");
            // console.log("Hello");
            // console.log(this.props);
            console.log(this.state);
            this.setState({
                name : "Robot",
                age : 50} , ()=>{
                    console.log(this.state)
                })
        };

        return (
            <div className="text" style={{ width: "500px", margin: "auto" }}>
                <div>
                    <h1>Hello I am {this.state.name} and my age is {this.state.age}</h1>
                </div>

                {/* <h1>Hello I am class based component and my name is {Math.random()}</h1> */}
                {/*1. Example of props in class based component with Inline CSS */}
                {/* <h1 className="bg-text cl-text" style={{ border: "2px solid black" }}><i>Hello I am class based component</i></h1>
                <h1 className="cl-text" style={styles}><i>my name is {this.props.name} and my age is {this.props.age}</i></h1> */}

                {/* Ye arrow func k liye hai */}
                {/* <button onClick={buttonHandler} style={{ backgroundColor: "red", color: "white", padding: "2px 4px", fontSize: "20px", cursor: "pointer" }}>Click Me</button> */}

                {/* 1. ye arrow operator use kr k hai  */}
                {/* <button onClick={()=>this.buttonHandler()} style={{ backgroundColor: "red", color: "white", padding: "2px 4px", fontSize: "20px", cursor: "pointer" }}>Click Me</button>
                 */}

                {/*2. ye bind method use krna ka way hai */}
                {/* <button onClick={this.buttonHandler.bind(this)} style={{ backgroundColor: "red", color: "white", padding: "2px 4px", fontSize: "20px", cursor: "pointer" }}>Click Me</button>
                 */}

                {/* 3. Ye constructor me bind krne k way hai */}
                {/* <button onClick={this.buttonHandler} style={{ backgroundColor: "red", color: "white", padding: "2px 4px", fontSize: "20px", cursor: "pointer" }}>Click Me</button>
                 */}
            </div>
        )
    }
}

export default Person;