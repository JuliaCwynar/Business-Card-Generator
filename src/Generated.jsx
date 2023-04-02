import React from 'react'
import insertedData from './insertedData'


function Generated() {

    const { name, field, address, namesurname, phonenumber, email, logo, background, font } = insertedData.insertedData;

    return (
    <div className='genertated--space'>
            <div className='generated--card' style={{ backgroundImage: `url(${background})`, fontFamily: font }}>
                <h2>{name}</h2>
                <p>{field}</p>
                <p>{address}</p>
                <p>{namesurname}</p>
                <p>{phonenumber}</p>
                <p>{email}</p>
                <img src={logo} alt="logo" />
            </div>
    </div>
  )
}

export default Generated

