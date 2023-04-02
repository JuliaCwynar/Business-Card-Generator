import React, {useState} from 'react'

function Data() {

    const [companyName, setCompanyName] = useState('');
    const [companyField, setCompanyField] = useState('');
    const [companyAddress, setCompanyAddress] = useState('');
    const [nameSurname, setNameSurname] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');


    return(
        <div className='generator'>
            <h1><span className='number'>1</span>Insert data</h1>
            <form className="form">
        <input
          type="text"
          className="form--input"
          placeholder="Company name"
          value={companyName}
          onChange={(event) => setCompanyName(event.target.value)}
        />
        <input
          type="text"
          className="form--input"
          placeholder="Company field"
          value={companyField}
          onChange={(event) => setCompanyField(event.target.value)}
        />
        <input
          type="text"
          className="form--input"
          placeholder="Company address"
          value={companyAddress}
          onChange={(event) => setCompanyAddress(event.target.value)}
        />
        <input
          type="text"
          className="form--input"
          placeholder="Name and surname"
          value={nameSurname}
          onChange={(event) => setNameSurname(event.target.value)}
        />
        <input
          type="text"
          className="form--input"
          placeholder="Phone number"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
        <input
          type="text"
          className="form--input"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </form>
    </div>
  );
}

export default Data