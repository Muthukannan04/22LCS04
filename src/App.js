import React, { useState } from 'react';
import { fetchNumbers } from './Api';
import MyComponent from './MyComponents';

function App() {
  const [numberId, setNumberId] = useState('');
  const [response, setResponse] = useState(null);

  const handleFetchNumbers = async () => {
    try {
      const data = await fetchNumbers(numberId);
      setResponse(data);
    } catch (error) {
      console.error('Error fetching numbers:', error);
    }
  };

  return (
    <div className="App">
      <h1>Average Calculator App</h1>
      <div>
        <label htmlFor="numberIdInput">Enter Number ID: </label>
        <input
          type="text"
          id="numberIdInput"
          value={numberId}
          onChange={(e) => setNumberId(e.target.value)}
        />
        <button onClick={handleFetchNumbers}>Fetch Numbers</button>
      </div>
      {response && (
        <div>
          <h2>Response</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
