import React from 'react';

function Generated(props) {
  const { companyName, companyField, companyAddress, nameSurname, phoneNumber, email, logo, background, font } = props;
  console.log(background);
  const componentRef = React.useRef();
  return (
    <div className='generated--space' ref={componentRef}>
      <div className='card--front' style={{ 
        backgroundColor: background.startsWith('#') ? background : `none`,
        backgroundImage: background.startsWith('#') ? 'none' : `url(${background})`, 
        fontFamily: font ? font.family : 'sans-serif' }}>
        <h2>{companyName}</h2>
        <div className='generated--logo'><img  src={URL.createObjectURL(logo)} alt="logo" /></div>
      </div>

      <div className='card--back' style={{ 
        backgroundColor: background.startsWith('#') ? background : `none`,
        backgroundImage: background.startsWith('#') ? 'none' : `url(${background})`, 
        fontFamily: font ? font.family : 'sans-serif' }}>
        <div className='card--inf'>
          <div className="left">
            <p>{nameSurname}</p>
            <p>{companyField}</p>
          </div>
          <div className='right'>
            <p>{}</p>
            <p>{phoneNumber}</p>
            <p>{email}</p>
          </div>
        </div>
        <p className='address'>{companyAddress}</p>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Generated;
