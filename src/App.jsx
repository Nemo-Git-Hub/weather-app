import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[#ea6666] text-white">
      <button
        className="border-2"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        count is {count}
      </button>
    </div>
  );
}

export default App;
