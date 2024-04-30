import { useState } from "react"

function App() {
  const [count, setState] = useState(0);
  return (
    <div>
      <div>
        App
      </div>
      <div className="text-red-700">
        <button onClick={() => setState(count + 1)}>
          {count}
        </button>
      </div>
    </div>
  )
}

export default App