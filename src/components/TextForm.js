import React, { useState } from 'react'


export default function TextForm(props) {
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleRmSpacesClick = () => {
        let newText = text.replace(/\s+/g, ' ').trim()
        setText(newText);
        props.showAlert("Removed extra spaces", "success");
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text coppied", "success");
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text changed lower case", "success");
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text changed upper case", "success");
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-outline-primary mx-1 my-1" onClick={handleUpClick}>To Uppercase</button>
                <button className="btn btn-outline-secondary mx-1 my-1" onClick={handleLoClick}>To Lowercase</button>
                <button className="btn btn-outline-danger mx-1 my-1" onClick={handleClearClick}>Clear</button>
                <button className="btn btn-outline-success mx-1 my-1" onClick={handleCopyClick}>Copy</button>
                <button className="btn btn-outline-info mx-1 my-1" onClick={handleRmSpacesClick}>Remove Extra Spaces</button>
            </div>
            <div className="container my-5">
                <h2>Your text summary</h2>
                <p>{text.split(" ").length - 1} words and {text.length} characters</p>
                <p>{0.008 * (text.split(" ").length - 1)} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length>0? text:"Enter something in the text box to preview it"}</p>
            </div>
        </>
    );
}
