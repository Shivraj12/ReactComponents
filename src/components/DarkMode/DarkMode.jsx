import react, { useState } from "react";
import Toggle from "react-toggle";

function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <div className={darkMode ? "lightmode" : "darkmode"}>
        <button onClick={toggleDarkMode}>
          {darkMode ? "Switch to Dark Mode" : "Switch to Light Mode"}
        </button>

        {/* using a toggle button */}
        <Toggle
          checked={darkMode}
          onChange={({ target }) => setDarkMode(target.checked)}
          icons={{ checked: "🌙", unchecked: "🔆" }}
          aria-label="dark Mode Toggle"
        />
      </div>
    </>
  );
}

export default DarkMode;
