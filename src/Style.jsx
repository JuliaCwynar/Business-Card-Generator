import React, { useState } from 'react';
import Fonts from './fonts';

function Style(props) {
  const { onFontChange } = props;
  const { onColorChange} = props;
  const [selectedFont, setSelectedFont] = useState('');
  const [selectedColor, setSelectedColor] = useState('')

  const handleChange = (event) => {
    const selectedFont = Fonts.Fonts.find((font) => font.family === event.target.value);
    setSelectedFont(event.target.value);
    onFontChange(selectedFont);
  };

  const pickColor = (event) => {
    setSelectedColor(event.target.value);
    onColorChange(selectedColor);
    console.log(selectedBackground);
  }

  const FontStyles = Fonts.Fonts.map((font) => (
    <div className='font' key={font.id}>
      <input
        type="checkbox"
        id={font.family}
        name="fontStyle"
        value={font.family}
        checked={selectedFont === font.family}
        onChange={handleChange}
      />
      <label htmlFor={font.family} style={{ fontFamily: font.family }}>
        {font.family}
      </label>
    </div>
  ));

  return (
    <div className="generator">
      <h1>
        <span className="number">4</span>Choose styling
      </h1>
      <form className="font--style">{FontStyles}</form>
      <div className="font--color">
          <input 
          type="color" 
          checked={selectedColor}
          onChange={pickColor}/>
          <p>Font color </p>
        </div>
    </div>
  );
}

export default Style;