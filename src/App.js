import { useState } from "react";
import { DropDown, DynamicElement, Navbar } from "./Components";

function App() {
  const [isDropDownActive, setIsDropDownActive] = useState(false);
  const [appValue, setAppValue] = useState('');

  const toggleDropDown = () => setIsDropDownActive(!isDropDownActive);

  const getApp = (value) => setAppValue(value);

  const resetAppValue = () => setAppValue('');

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
