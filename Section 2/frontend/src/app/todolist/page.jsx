'use client';
import React, { useState } from 'react'

const TodoList = () => {

    const [taskArray, setTaskArray] = useState([]);

    const addNewTask = (e) => {
        // console.log(e.code);
        if (e.code === 'Enter') {
            console.log(e.target.value);

            const obj = { text : e.target.value, completed: false };

            setTaskArray( [ obj, ...taskArray ] );

            e.target.value = '';
        }
    }

    return (
        <div className='vh-100 bg-primary-subtle'>

            <div className='container py-3'>

                <h1 className='display-2 text-center my-3'>ToDo List - {taskArray.length} </h1>

                <div className='card shadow'>
                    <div className='card-header'>

                        <input onKeyDown={addNewTask} type="text" className='form-control border-3 border-primary' />

                    </div>
                    <div className='card-body'>

                        {
                            taskArray.map((task, index) => {
                                return <div key={index} className='d-flex justify-content-between p-3'>
                                    <p className='m-0 h5'>{task.text}</p>
                                    <button className='btn btn-danger'>Delete</button>
                                </div>
                            })
                        }

                    </div>
                </div>

            </div>

        </div>
    )
}

export default TodoList;