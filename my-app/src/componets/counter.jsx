import { useState } from 'react';

function Couter(){
    const [count, setCount]= useState(0)
    let increse = () =>{
        if(count<25)
            setCount(prev => prev+1)}
 

    return(
       <>
        <h1>im the couter</h1>
        <p>count {count}</p>
        <button onClick={increse} disabled={count === 25}>+increese</button>
        </>
    )
}

export default Couter