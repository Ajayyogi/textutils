import React, { useState } from "react";

export default function TextForm(props) {
const handleUpClick=()=>{
    // console.log("Uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success");
}

const handleLoClick=()=>{
    // console.log("Uppercase was clicked: " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success");
}

const handleClearClick=()=>{
    // console.log("Uppercase was clicked: " + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared","success");

}

const copyToClipboard = (text) => {
    let copyText = document.getElementById("myBox");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, text.length); // For mobile devices
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    
    // Alert the copied text
    // alert("Copied the text: " + copyText.value);
    props.showAlert("Copy to clipboard","success");
  }

 const handleExtraSpaces=()=>{
let newText = text.split(/[ ]+/)
setText(newText.join(" "));
props.showAlert("Extra space has been removed","success");
 }

 const handleFirstLetterCapital=()=>{
let newText = text.toLowerCase();
let newText1 = newText.charAt(0).toUpperCase() + text
setText(newText1);
props.showAlert("First letter has been changed into Uppercase","success");
 }


const handleOnChange=(event)=>{
    // console.log("On change");
    setText(event.target.value);
}

  const [text, setText] = useState("");
//   setText("new text")
  return (
    <>
    <div className="container" style={{color:props.mode==="dark"? "white":"#04183c"}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="dark"? "grey":"white",color:props.mode==="dark"? "white":"#04183c" }} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick} >Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick} >Clear text</button>
      <button className="btn btn-primary mx-1" onClick={copyToClipboard} >Copy text</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces} >Remove extra spaces</button>
      <button className="btn btn-primary mx-1" onClick={handleFirstLetterCapital} >Capitalize First Letter</button>
    </div>

    <div className="container my-3" style={{color:props.mode==="dark"? "white":"#04183c"}} >
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0? text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  );
}
