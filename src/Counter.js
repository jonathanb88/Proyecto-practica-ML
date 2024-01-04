import React, { useState } from "react";

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrease = () => {
    setCount((prev) => prev - 1);
  };

  const restart = () => {
    setCount((prev) => (prev = 0));
  };

  const switchSigns = () => {
    setCount((prev) => prev * -1);
  };

  return (
    <div>
      <h1>
        Count: <h3 data-testid="count">{count}</h3>
      </h1>
      <div>
        <button onClick={increment}>Incrementar</button>
        <button onClick={decrease}>Disminuir</button>
        <button onClick={restart}>Reiniciar contador</button>
        <button onClick={switchSigns}>Reiniciar signos</button>
      </div>
    </div>
  );
}

export default Counter;
