import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleupClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Uppercase', 'success');
    }
    const handleonChange = (event) => {
        setText(event.target.value);
    }
    const handleloClick = () => {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert('Converted to Lowercase', 'success');
    }

    const handleClear = () => {
      setText('');
    }

    const handleCopy = () => {
      document.getElementById('myText').select();
      navigator.clipboard.writeText(text);
      props.showAlert('Text copied to clipboard!', 'success');
    }

    const handleRemoveExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(' '));
      props.showAlert('Removed Extra spaces!', 'success');
    }
    
    function calculateReadingTime (text, readingSpeed = 200) {
      // Remove extra white spaces and split the text into words
      const words = text.trim().split(/\s+/);
      
      // Calculate the total number of words
      const totalWords = words.length;
      
      // Calculate the time in minutes and seconds
      const timeInMinutes = totalWords / readingSpeed;
      const minutes = Math.floor(timeInMinutes);
      const seconds = Math.round((timeInMinutes - minutes) * 60);
      
      return { minutes, seconds };
    }

  return (
    <>
    <div className='container my-3'>
        <h1 className=''>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}} id="myText" rows="8"></textarea>
        <button className='btn btn-primary my-2 mx-1' onClick={handleupClick} disabled={text.trim() === ''}>UpperCase</button>
        <button className='btn btn-primary my-2 mx-1' onClick={handleloClick} disabled={text.trim() === ''}>LowerCase</button>
        <button className='btn btn-primary my-2 mx-1' onClick={handleClear} disabled={text.trim() === ''}>Clear Text</button>
        <button className='btn btn-primary my-2 mx-1' onClick={handleCopy} disabled={text.trim() === ''}>Copy Text</button>
        <button className='btn btn-primary my-2 mx-1' onClick={handleRemoveExtraSpaces} disabled={text.trim() === ''}>Remove Extra Spaces</button>
    </div>
    <div className='container'>
      <h5>Your Text Summary</h5>
      <p>{text === ""? 0: text.trim().split(/\s+/).length} words and {text.length} charactors!</p>
      <p>You can read this in {calculateReadingTime(text).minutes} minutes, {calculateReadingTime(text).seconds} seconds </p>
      <h3>Preview</h3>
      <p>{ (text.length > 0) ? text : "Enter something to preview it!"}</p>
    </div>
    </>
  );
}
