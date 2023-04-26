import React , {Component} from 'react';

class Form extends Component{
    constructor(props){
        super(props);
        this.props=props;
        this.state = {
            name : null,
            country : null,
        };
    }

    // nameChangeHandler = (event) =>{
    //     console.log("Name" , event.target.value);
    // };

    // nameChangeHandler = (event) =>{
    //     console.log("Select" , event.target.value);
    // };

    submitHandler = (event)=>{
        event.preventDefault();
        console.log(this.state);
        const name = event.target.name.value;
        const country = event.target.country.value;
        this.setState({name , country} , ()=>{
            console.log(this.state);
        })
        event.target.name.value = "";
        event.target.country.value = 1;

    }

    render(){
        return(
            <div>
                <h1>Form</h1>
                <form onSubmit={this.submitHandler}>
                    <label htmlFor=''>Name</label>
                    <input type="text" name='name' /*onKeyUp={this.nameChangeHandler}*/></input>
                    <br/>
                    <label>Country</label>
                    <select /*onChange={this.nameChangeHandler}*/ name="country">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <br/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}
export default Form;