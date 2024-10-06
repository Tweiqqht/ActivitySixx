import React, { useState } from 'react';
import './App.css';

function App() {
  const [stack, setStack] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [placeholder, setPlaceholder] = useState('Type here');

  const handlePush = () => {
    if (inputValue.length > 10) return alert("Maximum of 10 characters");
    if (inputValue) {
      if (stack.length < 10) {
        setStack([...stack, inputValue]);
        setInputValue('');
      } else {
        alert('Stack is full');
      }
    } else {
      alert("Input is empty");
    }
  };

  const handlePop = () => {
    if (stack.length > 0) {
      setStack(stack.slice(0, -1));
    } else {
      alert("Stack is empty");
    }
  };

  const maxStackSize = 10;
  const displayStack = new Array(maxStackSize).fill(null).map((_, index) => {
    return stack[maxStackSize - 1 - index] || '';
  });

  return (
    <div className='firstPage'>
      <div className='container'>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={placeholder}
          onClick={() => setPlaceholder('')}
        />
        <div className='btn'>
          <button onClick={handlePop}>Pop</button>
          <button onClick={handlePush}>Push</button>
        </div>
        <div className='stack'>
          {displayStack.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </div>
      <div className='Submitter'>Cejie Refamonte</div>
    </div>
  );
}

export default App;
