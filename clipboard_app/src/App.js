import './App.css';
import React, { createElement, useState } from "react";

function ClipBoardPaste() {
  const [stateList, setStateList] = useState([])
  // const [pasteText, setPasteText] = useState("");
  return (
    <div className="ClipBoard">
      <button onClick={() => navigator.clipboard
        .readText()
        .then((clipText) => {
          // setPasteText(clipText);
          // const newPasteText = clipText;
          createElement(<PasteArea text={clipText}/>);
          const newStateList = [...stateList,clipText];
          setStateList(newStateList);
          })
        }>
        Paste       
      </button>
      <div> {stateList.map((item, index) => (
        <PasteArea text={item} />
      ))}
      </div>
    </div>);
}

function PasteArea({text}) {
  return (
    <div className="PasteArea">
      <p>{text}</p>
    </div>
  );
}

export default ClipBoardPaste;
