import React from 'react'
import Fonts from './fonts'

function Style() {

    const FontStyles = Fonts.Fonts.map((font) => (
        <div className={font.id}>
                    <input type="checkbox" id={font.family} name={font.family} value={font.family}></input>
                    <label for="horns" style={{ fontFamily: font.family }}>{font.family}</label>
                </div>
    )
    )
    return(
        <div className='generator'>
            <h1><span className='number'>1</span>Choose font</h1>
            <form className='form'>
                {FontStyles}
            </form>
        </div>
    )
}

export default Style