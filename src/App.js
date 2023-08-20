import React, {useState} from 'react';
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [alert, setAlert] = useState(false);
  const [mode, setMode] = useState('light');
  const showAlert = (message, type) => {
    setAlert(
      {
        msg: message,
        type: type
      }
    );
    setTimeout(() => {
      setAlert(false);
    }, 1500);

  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.color = 'white';
      document.body.style.backgroundColor = '#042743';
      showAlert('Night mode enabled!', 'success');
    }
    else {
      setMode('light');
      document.body.style.color = 'black';
      document.body.style.backgroundColor = 'white';
      showAlert('Night mode disabled', 'success');
    }
  }
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <div className="container-fluid">
      <Alert alert={alert}/>
    </div>
    <TextForm heading="Enter text here to analyze:" mode={mode} showAlert={showAlert} />
    </>
  );
}

export default App;
