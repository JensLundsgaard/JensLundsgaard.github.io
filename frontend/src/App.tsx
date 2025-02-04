import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
          <p>You click button {count} time </p>
      </div>
      <button onClick={() => {setCount(count + 1)}}></button>
    </>
  )
}

export default App
