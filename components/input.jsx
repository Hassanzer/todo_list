import React from 'react';
import { useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';

function Input({ handleForm = () => { } }) {
    const [todo, setTodo] = useState('');

    return (
        <div className="flex mb-4">
            <input
                type="text"
                className="text-3xl border-3 border-black w-full mb-5 placeholder:text-gray-500 text-black rounded-lg drop-shadow-md mr-2 "
                placeholder="Add Todo"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />

            <button
                onClick={() => {
                    handleForm(todo);
                }}
                className="bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0] py-3 px-5 rounded-lg"
            >
                <AiOutlinePlusCircle size={30} />
            </button>
        </div>
    );
}

export default Input;
