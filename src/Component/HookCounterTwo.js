import React, { useState } from 'react'

function HookCounterTwo() {

    let initialCount = 0;
    let [count, setCount] = useState(initialCount);

    let incrementFive = () => {
        setCount(prevCount => prevCount + 5);
    }

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>+ 1</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>- 1</button>
            <button onClick={incrementFive}>Increment 5 </button>
        </div>
    )
}

export default HookCounterTwo