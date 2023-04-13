import React, { useState } from "react";

function Logo(props) {

  const { setLogoImage } = props;
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const image = event.target.files[0];
    setLogoImage(image);
    setSelectedImage(image);
  };

  const handleRemoveClick = () => {
    setLogoImage(null);
    setSelectedImage(null);
  };

  return (
    <div className='generator'>
      <h1><span className='number'>2</span>Insert logo</h1>

      {selectedImage && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={handleRemoveClick}>Remove</button>
        </div>
      )}

      <br />
      <br />
      
      <input
        type="file"
        name="myImage"
        onChange={handleImageChange}
      />
    </div>
  );
};

export default Logo;