import React from 'react'
import data from './Backgrounds'


function Background(props) {
    const backgrounds = data.data.backgrounds.map((background) => (
        <div className='background--choice'>
        <img
        key={background.id}
        className='backgrounds'
        src={background.url}
        alt={`Background ${background.id}`}
      />
      <button className='background--button'>Tło nr {background.id}</button>
      </div>
    )
    )

    return (
        <div className='generator'>
            <h1><span className='number'>2</span>Choose background</h1>
                <section className='background-list'>
                    {backgrounds}
                </section>
      </div>
    )
}


export default Background