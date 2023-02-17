import { useState } from "react";

import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-100 p-4">
      <div>
        <h1>Vite + React</h1>
        <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
      </div>
    </div>
  );
}

export default App;
