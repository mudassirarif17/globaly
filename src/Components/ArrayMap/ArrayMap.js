import React , {Component} from "react";
import ArrayMapStyle from"../ArrayMap/ArrayMap.module.css"
class ArrayMap extends Component{
    constructor(props){
        super(props);
        this.props=props;
    }
    render(){
        return(
            <div onClick={this.props.remove} className={ArrayMapStyle.boxStyle}>
                {/* <label>{this.props.id}</label> */}
                <br/>
                <label>My name is {this.props.name}</label>
                <br/>
                <label className={ArrayMapStyle.label}>My age is {this.props.age}</label>
            </div>
        )
    }
}

export default ArrayMap;