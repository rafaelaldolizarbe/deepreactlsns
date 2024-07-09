import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'

const Hello = (args) => {  
  return (    
  <div>      
    <p>Hello {args.nome} are {args.age}</p>    
  </div>  
  )
}
const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
    </div>
  )
}

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  const nome = 'Peter'
  const age = 10
  console.log(now, a+b)

  return (
   <div>
      <h1>Greetings</h1>
      <Hello nome="Sony" age = {age}/>
      <Hello nome={nome} age={age}/>    
      <Footer />
    </div>
  )
  
  // return React.createElement(
  //   'div',
  //   null,
  //   React.createElement(
  //     'p', null, 'Hello world, it is ', now.toString()
  //   ),
  //   React.createElement(
  //     'p', null, a, ' plus ', b, ' is ', a + b
  //   ),
  //   React.createElement(Hello)
  //   )
}




// function App() {
  
//   const [count, setCount] = useState(0)

  // return (
  //   <>
  //     {/* <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p> */}
  //   </>
  // )
// }

export default App
