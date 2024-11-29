import React, { useState } from "react";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle dropdown
  const [selectedItem, setSelectedItem] = useState("Select an option"); // State for the selected item

  const options = ["Option 1", "Option 2", "Option 3"]; // Dropdown options

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedItem(option);
    setIsOpen(false); // Close dropdown after selecting
  };

  return (
    <div style={{ position: "relative", width: "200px" }}>
      {/* Dropdown Trigger */}
      <button
        onClick={toggleDropdown}
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        {selectedItem}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul
          style={{
            position: "absolute",
            top: "100%",
            left: "0",
            width: "100%",
            listStyle: "none",
            margin: "0",
            padding: "0",
            border: "1px solid #ccc",
            backgroundColor: "#fff",
            zIndex: 1000,
          }}
        >
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              style={{
                padding: "10px",
                cursor: "pointer",
                borderBottom: index !== options.length - 1 ? "1px solid #eee" : "none",
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
