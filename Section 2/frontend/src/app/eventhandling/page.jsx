'use client';
import React from 'react'

const EventHandling = () => {

    const num = 345;
    const num2 = 456;

    const getProd = (a, b) => {
        return a * b;
    }

    return (
        <div>
            <div className='container py-5'>

                <h1 className="text-center">Event Handling</h1>
                <hr />

                <button className='btn btn-primary' onClick={ () => { alert('Button was clicked') } } >Click Me</button>

                <input type="text" className='form-control my-3'
                    onChange={ (event) => { console.log(event.target.value) } }
                />

                <input type="color" onChange={ (e) => { document.body.style.background = e.target.value } }  />
                
                <h1>{num}</h1>

                <h3>{num + num2}</h3>
                <p>{getProd(34, 45)}</p>
                
            </div>
        </div>
    )
}

export default EventHandling;