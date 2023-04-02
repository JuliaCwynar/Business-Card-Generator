import React from 'react'
import logo from './assets/bcg.png'


export default function Navbar() {
    return (
        <div className='header'>
            <img src={logo} />
            <h1>Business Card Generator</h1>
            <h2>Julia Cwynar</h2>
        </div>
    )
}
