import { useState } from 'react';
import '../styles/Counter.css';

/**
 * Counter Component
 * 
 * This functional component demonstrates:
 * - useState hook for state management
 * - Event handling for button clicks
 * - Dynamic UI updates based on state changes
 * 
 * Possible Improvements:
 * - Add a Reset button to set counter to 0
 * - Add validation for minimum/maximum values
 * - Create separate components for buttons to make them reusable
 * - Add local storage to persist counter value
 */
export default function Counter() {
  // useState hook: creates a state variable 'count' and a function 'setCount' to update it
  // Initial value is 0
  const [count, setCount] = useState(0);

  // Event handler to increment the counter
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Event handler to decrement the counter
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-container">
      <h1>Counter App</h1>
      
      {/* Display the current counter value */}
      <div className="counter-display">
        <p className="counter-value">{count}</p>
      </div>

      {/* Button controls */}
      <div className="button-group">
        {/* Decrement button - reduces count by 1 */}
        <button 
          className="btn btn-decrease" 
          onClick={handleDecrement}
        >
          Decrement
        </button>

        {/* Increment button - increases count by 1 */}
        <button 
          className="btn btn-increase" 
          onClick={handleIncrement}
        >
          Increment
        </button>
      </div>

      {/* Display current count status */}
      <p className="counter-status">Current Count: {count}</p>
    </div>
  );
}
