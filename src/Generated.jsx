import React, { useState} from 'react';
import PDF from './PDF';
import BusinessCard from './BusinessCard';

function Generated(props) {
  const { companyName, companyField, companyAddress, nameSurname, phoneNumber, email, logo, background, font } = props;
  console.log(background);
  const componentRef = React.useRef();

  const reset = () => {
    window.location.reload(false);
  };

  const [isGenerated, setIsGenerated] = useState(false);

  const handleGenerateClick = (e) => {
    e.preventDefault();
    setIsGenerated(true);
    const pdfDataUri = componentRef.current.toDataURL();
    const link = document.createElement('a');
    link.href = pdfDataUri;
    link.download = 'business-card.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='generated--space' ref={componentRef}>
      <BusinessCard {...props} /> 
      <div className='export--pdf'>
     {/*   <button onClick={handleGenerateClick}>Export card to PDF</button>
      </div>
  <div className='regenerate--button'> */}
        <button onClick={reset}>REGENERATE BUSINESS CARD</button>
      </div>
    </div>
  );
}

export default Generated;