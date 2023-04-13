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
  };

  const backgrounds = data.data.backgrounds.map((background) => (
    <div className="background--choice" key={background.id}>
      <img
        className="backgrounds"
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
  ));

  return (
    <div className="generator">
      <h1>
        <span className="number">2</span>Choose background
      </h1>
      <section className="background-list">{backgrounds}</section>
    </div>
  );
}

export default Background;