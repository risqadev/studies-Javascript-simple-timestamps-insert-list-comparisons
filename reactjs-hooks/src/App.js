import React, { useState, useEffect } from 'react';
import { getNewTimestamp } from './helpers/dateTimeHelpers';

export default function App() {
  const [clickArray, setClickArray] = useState([]);

  const handleClick = () => {
    const now = getNewTimestamp();

    setClickArray([...clickArray, now]);
  }

  useEffect(() => {
    document.title = clickArray.length;
  }, [clickArray])

  return (
    <div className="container">
      <h1>React <em>Hooks</em></h1>

      <button onClick={handleClick}>Insert timestamp</button>

      <ul>
        {clickArray.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}
