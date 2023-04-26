import react from 'react';

function Functional(props){
    return(
        <div className='text'>
            <h1>I am a Functional Component and my name is {props.name} my age is {props.age}</h1>
            </div>
    );
}

export default Functional;