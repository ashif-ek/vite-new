import {useState} from 'react';

function Theme(){
const [dark, setDark]=useState(false);

    // const mode=()=>{
    //     setDark(!dark);
    //     // setDark(prev =>!prev);

    // }

    function mode(){
        setDark(!dark)
       
    }

    return (
       
        <div style={{backgroundColor:dark?'black':'white',
           color: dark? 'white':'black',
           width: '100%',
           minHeight: '100vh',
           padding: '50px'

        }}> 
        <button onClick={mode}>theme</button>
        </div>
        
        
    )
}


export default Theme