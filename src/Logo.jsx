import React, { useState } from "react";

function Logo(props) {

  const { setLogoImage } = props;
  const [selectedImage, setSelectedImage] = useState();

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
    setLogoImage(event.target.files[0]);
  };

  return (
    <div className='generator'>
      <h1><span className='number'>2</span>Insert logo</h1>
      <div className='upload--area'>
      <label for="image--uploads">Choose a logo image to upload (PNG, JPG)</label>
    <input
      type="file"
      id="image_uploads"
      name="image_uploads"
      onChange={handleImageChange}
      accept=".jpg, .jpeg, .png"/>

      { selectedImage && <img className='uploaded--img' src={URL.createObjectURL(selectedImage)} /> }
    </div>
    </div>
  );
};

export default Logo;

