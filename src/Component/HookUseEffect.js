import React from 'react'
import { useState, useEffect } from 'react'

function HookUseEffect() {

    let [x, setX] = useState(0);
    let [y, setY] = useState(0);

    let logMouseMove = e => {
        console.log('Mouse Move');
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        console.log('useEffect Called');
        window.addEventListener('mousemove', logMouseMove);
    }, [])



    return (
        <div>
            Hook X - {x} , Y - {y}
        </div>
    )
}

export default HookUseEffect