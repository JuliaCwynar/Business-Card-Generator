import React, { useState } from 'react';
import data from './Backgrounds';




function Background(props) {
  const { onBackgroundChange } = props;
  const [selectedBackground, setSelectedBackground] = useState('');

  const handleChange = (event) => {
    setSelectedBackground(event.target.value);
    const selectedBackgroundUrl = data.data.backgrounds.find(
      (background) => background.id === event.target.value
    ).url;
    onBackgroundChange(selectedBackgroundUrl);
    console.log(selectedBackground);
  };

  const pickColor = (event) => {
    setSelectedBackground(event.target.value);
    onBackgroundChange(selectedBackground);
    console.log(selectedBackground);
  }



  const backgrounds = data.data.backgrounds.map((background) => (
    <div className="background--choice" key={background.id}
     >
    <input
      
      type="checkbox"
      id={`background-${background.id}`}
      className="background--button"
      name="background"
      value={background.id}
      checked={selectedBackground === background.id}
      onChange={handleChange}
    />
    <label style={{backgroundImage: `url(${background.url})`}} htmlFor={`background-${background.id}`}/>
  </div>
  ));

  
  return (
    <div className="generator">
      <h1>
        <span className="number">3</span>Choose background
      </h1>
      <section 
      className="background-list">
        {backgrounds}
        <div className="background--choice">
          
          <input 
          type="color" 
          checked={selectedBackground}
          onChange={pickColor}/>
          <p>Or choose color </p>
        </div>
      </section>
    </div>
  );
}

export default Background;