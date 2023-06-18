import React from 'react';
import { AiFillDelete } from 'react-icons/ai';

function Delete({ deleteValue, onDelete = () => { } }) {
    return (
        <span
            onClick={() => onDelete(deleteValue)}
            className="cursor-pointer bg-red-500 rounded-lg px-3 py-2 "
        >
            <AiFillDelete size={20}/>
        </span>
    );
}

export default Delete;
