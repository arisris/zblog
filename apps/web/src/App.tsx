import { useState } from "react";

export default function App() {
  const [counter, setcounter] = useState(0);
  return (
    <div>
      <h3>Current counter: {counter}</h3>
      <div>
        <button type="button" onClick={() => setcounter(counter + 1)}>
          Increment
        </button>
      </div>
    </div>
  );
}
