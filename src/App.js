import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState();

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    const htmlElement = document.documentElement;
    if (htmlElement.hasAttribute("data-bs-theme")) {
      htmlElement.removeAttribute("data-bs-theme");
    } else {
      htmlElement.setAttribute("data-bs-theme", "dark");
      showAlert("Dark mode has been enabled", "success");
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar title="Text Utils" toggleMode={toggleMode} />
        <div className="container my-3">
          <Alert alert={alert} />
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Try Text Utils - Word Counter, Character Counter, Remove Extra Spaces"
                />
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
