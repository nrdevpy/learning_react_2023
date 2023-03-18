import { useState } from "react";
import "./App.css";
export default function App() {
  const [count, setCount] = useState(0);

  function incrementCount () {
    setCount(count + 1)
  }
  
  function decrementCount () {
    setCount(count - 1)
  }
  
  return (
    <>
      <main>
        <header>
          <h1>Starting React with Vite</h1>
        </header>
        <section>
          <div className="flex">
            <div>
              <h2>Learning useState</h2>
              <button type="button" onClick={incrementCount}>Increment</button>
              <button type="button" onClick={decrementCount}>Decrement</button>
            </div>
            <div>
              <p>Counter:</p>
              <p style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                textAlign: 'center',
                color: 'lightcoral',
              }}>{count}</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
