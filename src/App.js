import React, { useState, useEffect } from "react";
import "./style.css";

export default function App() {
  const [fieldChar, setFieldChar] = useState('');
  const [charCount, setCharCount] = useState({
    key : '',
    keyCount : 0
  });

  useEffect(() => {
    let count = {};
    let maxCount = 0;
    fieldChar.toLowerCase().split('').forEach(val => {
      if(val !== ' '){
        count[val] = count[val] ? count[val] + 1 : 1;
      }
    });

    for(let key in count){
      if (count[key] > maxCount){
        maxCount = count[key];
      }
    }

    setCharCount({
      key : Object.keys(count)[Object.values(count).indexOf(maxCount)] || '',
      keyCount : maxCount
    });
  },[fieldChar]);


  return (
    <div>
      <h1>Find the most repeated character in the input string !!</h1>
      <input type="text" name='fieldCharacter' value={fieldChar} onChange={(e) => setFieldChar(e.target.value)} />
      <p>{
          charCount.key  ? (`Key : ${charCount.key} Key Count : ${charCount.keyCount}` ) : 'Please type anything in input field'
        }</p>
    </div>
  );
}
