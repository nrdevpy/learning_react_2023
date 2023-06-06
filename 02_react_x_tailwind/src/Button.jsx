import { useState } from "react";

export default function Button(props) {
    const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };
    const type = props.type;
    return (
        <button
        className="border-2 border-black py-1 px-4 mx-4"
        type="button"
        onClick={type === 'increment' ? { incrementCounter } : { decrementCounter }}
        >
        {type === 'increment' ? "Increment" : "Decrement"}
        </button>
    );
}