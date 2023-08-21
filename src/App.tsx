import React, { useState } from "react";

import "./App.css";
import Toast from "./Toast";

function App() {
  const [showToast, setShowToast] = useState(false);

  const handleButtonClick = () => {
    setShowToast(true);
  };

  const handleToastConfirm = () => {
    console.log("Toast confirmed.");
    setShowToast(false);
  };

  return (
    <div>
      <div className="container">
        <div>
          <h1>Toast</h1>
          <p>
            Notification message or a piece of information displayed above the
            page content.
          </p>
        </div>
      </div>
      <div className="button">
        <button onClick={handleButtonClick}>Click Me</button>
      </div>
      {showToast && (
        <Toast
          message="This is a Toast message!"
          onConfirm={handleToastConfirm}
        />
      )}
    </div>
  );
}

export default App;
