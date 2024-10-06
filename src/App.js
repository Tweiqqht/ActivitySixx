import React, { useState } from 'react';
import './App.css';

function App() {
  // Initialize the stack as an empty array
  const [stack, setStack] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [placeholder, setPlaceholder] = useState('Type here');

  // Function to push a value onto the stack
  const handlePush = () => {
    if (inputValue.length > 10) return alert("Maximum of 10 characters");
    if (inputValue) {
      if (stack.length < 10) { // Check if stack has less than 10 items
        setStack([...stack, inputValue]); // Add the input value to the stack
        setInputValue(''); // Clear the input field
      } else {
        alert('Stack is full'); // Alert if stack is full
      }
    } else {
      alert("Input is empty");
    }
  };

  // Function to pop a value from the stack
  const handlePop = () => {
    if (stack.length > 0) {
      setStack(stack.slice(0, -1)); // Remove the last item from the stack
    } else {
      alert("Stack is empty");
    }
  };

  // Create an array of 10 elements for visualization
  const maxStackSize = 10;
  const displayStack = new Array(maxStackSize).fill(null).map((_, index) => {
    // Get the value from the stack, shifted so that the latest input appears at the bottom
    return stack[maxStackSize - 1 - index] || ''; // Return the corresponding stack value or an empty string
  });

  return (
    <div className='container'>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // Update input value
        placeholder={placeholder} // Dynamically set placeholder
        onClick={() => setPlaceholder('')} // Clear placeholder on click
      />
      <div className='btn'>
        <button onClick={handlePop}>Pop</button>
        <button onClick={handlePush}>Push</button>
      </div>
      <div className='stack'>
        {displayStack.map((item, index) => (
          <span key={index}>{item}</span> // Display each item in the stack
        ))}
      </div>
    </div>
  );
}

export default App;
