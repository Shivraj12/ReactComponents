import React, { useState } from "react";

function Dropdownp() {
  const [isOpen, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Select");

  const options = ["op1", "op2", "op3"];

  const toggleDropDown = () => setOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedItem(option);
    setOpen(false);
  };

  return (
    <>
      <button onClick={toggleDropDown}>{selectedItem}</button>

      {isOpen && (
        <ul>
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Dropdownp;
