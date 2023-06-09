import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Data from './Data'
import Background from './Background'
import Style from './Style'
import Logo from './Logo'
import Generated from './Generated'




function GenerateButton(props) {

  const { onClick} = props;
  return (
    <div>
    <button type="button" className='form--button' onClick={(e) => {
      e.preventDefault();
      onClick();
    }}>Generate business card</button>
</div>
  )
}

function App() {
  const [companyName, setCompanyName] = useState('');
  const [companyField, setCompanyField] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');
  const [nameSurname, setNameSurname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [logo, setLogoImage] = useState('');
  const [background, setBackground] = useState('');
  const [font, setFont] = useState('');
  const [isGenerated, setIsGenerated] = useState(false); 
  const [fontColor, setFontColor] = useState('');
  
  const handleGenerateClick = () => {
    setIsGenerated(true);
  };
  
  return (
    <div className="App">
      <Navbar />
      {isGenerated ? (
        <Generated 
          companyName={companyName}
          companyField={companyField}
          companyAddress={companyAddress}
          nameSurname={nameSurname}
          phoneNumber={phoneNumber}
          email={email}
          logo={logo}
          background={background}
          font={font}
          fontColor={fontColor}
        />
      ) : (
        <>
          <form>
            <Data 
              setCompanyName={setCompanyName}
              setCompanyField={setCompanyField}
              setCompanyAddress={setCompanyAddress}
              setNameSurname={setNameSurname}
              setPhoneNumber={setPhoneNumber}
              setEmail={setEmail}
            />
            <Logo setLogoImage={setLogoImage} />
            <Background onBackgroundChange={setBackground} />
            <Style 
            onFontChange={setFont}
            onColorChange={setFontColor}/>
            <GenerateButton onClick={handleGenerateClick} />
          </form>
        </>
      )}
      </div>
  );
      }

export default App;
