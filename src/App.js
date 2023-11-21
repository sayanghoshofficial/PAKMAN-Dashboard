import { useState, useEffect } from "react";
import { DropDown, DynamicElement, Navbar } from "./Components";

function App() {
  const [isDropDownActive, setIsDropDownActive] = useState(false);
  const [appValue, setAppValue] = useState('');

  const toggleDropDown = () => setIsDropDownActive(!isDropDownActive);

  const getApp = (value) => setAppValue(value);

  const resetAppValue = () => setAppValue('');

  useEffect(() => {
    const handleBodyOverflow = () => {
      document.body.style.overflow = isDropDownActive ? 'hidden' : 'visible';
    };

    handleBodyOverflow();

    return () => {
      document.body.style.overflow = 'visible'; // Reset overflow when the component unmounts
    };
  }, [isDropDownActive]);

  return (

    <div className="app">

      <Navbar />
      <DynamicElement
        toggleDropDown={toggleDropDown}
        appValue={appValue}
        resetAppValue={resetAppValue}
      />
      {
        isDropDownActive ?
          <DropDown
            toggleDropDown={toggleDropDown}
            getApp={getApp}
          />
          : null
      }
    </div>

  );
}

export default App;
