import React, { useState } from 'react';
import Fonts from './fonts';

function Style() {
  const [selectedFont, setSelectedFont] = useState('');

  const handleChange = (event) => {
    setSelectedFont(event.target.value);
  };

  const FontStyles = Fonts.Fonts.map((font) => (
    <div className={font.id} key={font.id}>
      <input
        type="radio"
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
        <span className="number">3</span>Choose font
      </h1>
      <form className="form">{FontStyles}</form>
    </div>
  );
}

export default Style;