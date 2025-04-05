import './App.css';
import React, { useState } from "react";

function ClipBoardPaste() {

  const [pasteText, setPasteText] = useState("");
  return (
    <div className="ClipBoardPaste">
      <button onClick={() => navigator.clipboard
        .readText()
        .then((clipText) => (setPasteText(clipText)))}>
        Paste
      </button>
      <p>{pasteText}</p>
    </div>
  );
}

export default ClipBoardPaste;
