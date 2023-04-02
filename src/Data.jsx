import React from 'react'

function Data() {
    return(
        <div className='generator'>
            <h1><span className='number'>1</span>Insert data</h1>
            <form className='form'>
                <input type='text' className='form--input' placeholder='Company name'></input>
                <input type='text' className='form--input' placeholder='Company field'></input>
                <input type='text' className='form--input' placeholder='Company address'></input>
                <input type='text' className='form--input' placeholder='Name and surname'></input>
                <input type='text' className='form--input' placeholder='Phone number'></input>
                <input type='text' className='form--input' placeholder='Email'></input>
            </form>
        </div>
    )
}

export default Data