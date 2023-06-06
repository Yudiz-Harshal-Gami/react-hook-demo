import React, { useState } from 'react'

function HookWithArray() {

    let [Items, setItems] = useState([]);

    let addItems = () => {
        setItems([...Items, {
            id: Items.length,
            value: Math.floor(Math.random() * 100)
        }])
    }

    return (
        <div>
            <button onClick={addItems}>Add items</button>
            <ul>
                {
                    Items.map(Items => (
                        <li key={Items.id}>{Items.value}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default HookWithArray