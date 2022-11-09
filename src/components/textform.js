
import React, {useState} from 'react';



export default function Textform(props) {
    const handleClick = (e) => {
        e.preventDefault();
        //console.log("UPPERCASE was cicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success");
    }

    const handleOnchange = (e) => {
        //console.log("On change");
        setText(e.target.value);
    }
    const [text, setText] = useState("");
    //setText("new Text");

    const clear = (e) => {
      let newText = ("");
      setText(newText);
      props.showAlert("Everything is deleted", "success");
    }

    const copyHandle = () => {
        navigator.clipboard.writeText(text);;
        props.showAlert("Text copied to clipboard", 'success');

    }
  return (
    <>
      <div>
      <form>
  <div className="container " style={{color: props.mode ==='light'?'dark':'white'}}>
    <h1>{props.heading}</h1>
    <textarea className="form-control" value={text} onChange={handleOnchange} 
    style={{backgroundColor: props.mode ==='light'?'white':'#5e5e5e', color: props.mode ==='light'?'dark':'white'}} id="myBox" rows="10"/>
    <button disabled={text.length === 0 } className="btn btn-primary my-4" onClick={handleClick}>Convert to UPPER CASE</button>
    <button disabled={text.length === 0 } className="btn btn-primary mx-4" onClick={clear}>Delete</button>
    <button disabled={text.length === 0 } className="btn btn-primary " onClick={copyHandle}>Copy Text</button>
  </div>
  <div className="container" style={{color: props.mode ==='light'?'dark':'light'}}>
    <h4>Text summary:</h4>
    <p>{text.split(/\s+/).filter((elm) => {return elm.length !== 0 }).length} - word   {text.length} - characters</p>
    <p>{0.008 * text.split(" ").filter((elm) => {return elm.length !== 0 }).length} - minutes read</p>
  </div>
</form>
    </div>
    </>
  
  )
}
