
import React from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';

const Item = ({ items, remove, edit }) => {

    return (
        <>
            {
                items.map(item => {
                    const { id, name } = item
                    return (
                        <div className="items" key={id}>
                            <p>{name}</p>
                            <div className="btns">
                                <button type='button' className='edit' onClick={() => edit(id)} > <MdEdit /></button>
                                <button type='button' className='delete' onClick={() => remove(id)} > <MdDelete /> </button>
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
}

export default Item;
