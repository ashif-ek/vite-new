import {useState} from 'react';

function Theme(){
const [dark, setDark]=useState(false);

    const mode=()=>{
        setDark(!dark);

    }
    return (
       
        <div style={{backgroundColor:dark?'black':'white',
           color: dark? 'white':'black',
           width: '100%',
           Height: '100%',
           padding: '50px'

        }}> 
        <button onClick={mode}>theme</button>
        </div>
        
        
    )
}


export default Theme