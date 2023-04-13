import React from 'react';

function Generated(props) {
  const { companyName, companyField, companyAddress, nameSurname, phoneNumber, email, logo, background, font } = props;

  return (
    <div className='generated--space'>
      <div className='card--front' style={{ backgroundImage: `url(${background})`, fontFamily: font ? font.family : 'sans-serif' }}>
        <h2>{companyName}</h2>
        <img src={logo} alt="logo" />
      </div>

      <div className='card--back' style={{ backgroundImage: `url(${background})`, fontFamily: font ? font.family : 'sans-serif' }}>
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
    </div>
  )
}

export default Generated;
