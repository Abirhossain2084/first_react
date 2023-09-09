import React, { useState } from 'react';  // aautomitic come after decla re usesattes

export default function Count() {

    
  const [count, setCount] = useState(0); // budeafult function


  // function to add
  const handleAddClick = () => {
    setCount(count + 1);
  };
  // function to reduce
  const handleAddClick2 = () => {
    setCount(count - 1);
  };


  // return and event handle
  return (
    <div style={{ border: '4px solid green' }}>
      <h3>Counter: {count}</h3>
      <button onClick={handleAddClick}>ADD</button>
      <button onClick={handleAddClick2}>REDUCE</button>
    </div>
  );
}
