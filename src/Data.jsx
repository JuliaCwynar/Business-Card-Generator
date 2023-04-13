import React from 'react';

function Data(props) {
  



  return (
    <div className="generator">
      <h1>
        <span className="number">1</span>Insert data
      </h1>
      <div className='input--data'>
        <div className='form--data'>

        <input
          type="text"
          className="form--input"
          placeholder="Company name"
          value={props.companyName}
          onChange={(event) => props.setCompanyName(event.target.value)}
        />
        </div>

        <div className='form--data'>
        <input
          type="text"
          className="form--input"
          placeholder="Company field"
          value={props.companyField}
          onChange={(event) => props.setCompanyField(event.target.value)}
        />
        </div>

        <div className='form--data'>
        <input
          type="text"
          className="form--input"
          placeholder="Company address"
          value={props.companyAddress}
          onChange={(event) => props.setCompanyAddress(event.target.value)}
        />
        </div>

        <div className='form--data'>
        <input
          type="text"
          className="form--input"
          placeholder="Name and surname"
          value={props.nameSurname}
          onChange={(event) => props.setNameSurname(event.target.value)}
        />
        </div>

        <div className='form--data'>
        <input
          type="text"
          className="form--input"
          placeholder="Phone number"
          value={props.phoneNumber}
          onChange={(event) => props.setPhoneNumber(event.target.value)}
        />
        </div>

        <div className='form--data'>
        <input
          type="text"
          className="form--input"
          placeholder="Email"
          value={props.email}
          onChange={(event) => props.setEmail(event.target.value)}
        />
        </div>
    </div>
    </div>
  );
}

export default Data;