import {useState} from 'react';
const Textform = (props) => {


const onClic=()=>{
  // console.log('jsajdka')
  let newtext= text.toUpperCase();
  console.log(newtext);
  setText(newtext);
  props.showAlert('success','now  all letters are Uppercased');

};
  let lower = () => {
    let newText1 = text.toLowerCase();
    setText(newText1);
    props.showAlert('success','now  all letters are Lowercased');
   
  };
const changeText=(event)=>{
  setText(event.target.value);
};
  


const[text,setText]=useState('');


  return (
    <>
      <div className="Container my-3">
        <div className="mb-3">
          <h3 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h3>
          <textarea
          style={{backgroundColor:props.mode==='light'?'white':'#042743' ,color:props.mode==='dark'?'white':'black'}}
            className="form-control"
             value={text}
             onChange={changeText}
            id="mybox"
            rows="8"
          ></textarea>
          {/* <p></p> */}
          <button className="btn btn-primary mx-1 my-2" 
          onClick={onClic}
          >
            Convert to uppercase
          </button>
          {/* <p></p> */}
          <button className="btn btn-primary mx-1" onClick={lower} >
            Convert to lowercase
          </button>
        </div>
      </div>

      <div className="Container my-3">
        <h3 style={{color:props.mode==='dark'?'white':'black'}}>Your Text summary</h3>

        <p style={{color:props.mode==='dark'?'white':'black'}}>
          There are {text.split(" ").length} words and {text.length} characters
        </p>
        <p style={{color:props.mode==='dark'?'white':'black'}}>
          {0.08 * text.split(" ").length} minutes would require to read the text
        </p>

        <h4 style={{color:props.mode==='dark'?'white':'black'}}>Preview</h4>
        <p style={{color:props.mode==='dark'?'white':'black'}}>
        {text.length>0?text:'Write something first'}
        </p>
      </div>
    </>
  );
};

export default Textform;

// import { useState } from "react";

//   let onclicking = () => {
//     console.log("You clicked here");
//     let newtext = text.toUpperCase();
//     setText(newtext);
//   };
//   let lower = () => {
//     let newText1 = text.toLowerCase();
//     setText(newText1);
//   };
//   let handleOnClick = (event) => {
//     console.log("heyyy");
//     setText(event.target.value);
//   };

//   const [text, setText] = useState("enter ");
//   // setText("You can enter your text here");









//alert
  // props.showAlert('success','changed to uppercase '); 
  // props.showAlert('success','changed to lowercase'); 