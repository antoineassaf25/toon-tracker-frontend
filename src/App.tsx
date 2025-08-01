import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './FirstComponent'

function App() {
  return (
    <div className="App">
      <ul>
        <li key={1}>
          Hello
        </li>
        <li key={2}>
          Hello2
        </li>
        <li key={3}>
          Hello3
        </li>
      </ul>
    </div>
  )
}



// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//         <Welcome name="Neil"/>
//         <WelcomeButton name="Ant" startCount = {10} increment = {2.5}/>
        
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

export default App
