import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <main className="min-h-screen grid place-content-center bg-teal-300">
        <h1 className="text-4xl py-6">React x Tailwind with Vite</h1>
        <div className="border-2 border-black p-6 flex flex-col align-middle items-center">
          <div>
            <button
              className="border-2 border-black py-1 px-4 mx-4"
              type="button"
              onClick={incrementCounter}
            >
              Increment
            </button>
            <button
              className="border-2 border-black py-1 px-4 mx-4"
              type="button"
              onClick={decrementCounter}
            >
              Decrement
            </button>
          </div>
          <p>{counter}</p>
        </div>
      </main>
    </>
  );
}

export default App;
