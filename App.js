import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Item from './Item'
import { getLocalStorge } from './utils';



// const getLocalStorge = () => {
//     return JSON.parse(localStorage.getItem('items')) || []
// }



export default function App() {
    const [name, setName] = useState("");
    const [items, setItems] = useState(getLocalStorge());
    const [isEdit, setIsEdit] = useState(false);
    const [ID, setID] = useState(null);


    const handleSubmit = (e) => {
        e.preventDefault()

        if (name && ID) {
            const list = items.map(item => {
                if (item.id === ID) {
                    return { ...item, name }
                }
                return item
            })
            setItems(list)
            setIsEdit(false)
            setName('')

        } else {
            const newItem = { id: new Date().getTime().toString(), name }
            setItems([...items, newItem])
            setName("")
        }



    }

    const removeItem = (id) => {
        const item = items.filter(item => item.id !== id)
        setItems(item)
    }

    const editItem = (id) => {
        const item = items.find(item => item.id === id)
        setName(item.name)
        setIsEdit(true)
        setID(id)
    }

    const clearAll = () => {
        setItems([])
    }

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items))
    }, [items]);

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit} >
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
                    <button type='submit'>{isEdit ? "edit" : "add"}</button>
                </form>

                <div className="list">
                    <Item items={items} remove={removeItem} edit={editItem} />
                    <button className="clear" onClick={clearAll} >Clear all</button>
                </div>
            </div>

        </>
    )
}
