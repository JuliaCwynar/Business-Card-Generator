import React, {useState} from 'react'
import data from './Backgrounds'
import insertedData from './insertedData.js'


function Background() {

    const [selectedBackground, setSelectedBackground] = useState('');

    const handleChange = (event) => {
        setSelectedBackground(event.target.value);
        insertedData.insertedData.background = data.data.backgrounds.find((background) => background.id === event.target.value).url;
    };

    const backgrounds = data.data.backgrounds.map((background) => (
        <div className='background--choice'>
        <img
        key={background.id}
        className='backgrounds'
        src={background.url}
        alt={`Background ${background.id}`}
      />
      <input
        type="radio"
        className="background--button"
        name="background"
        value={background.id}
        checked={selectedBackground === background.id}
        onChange={handleChange}
      />
      <label htmlFor={`background-${background.id}`}>Tło nr {background.id}</label>
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