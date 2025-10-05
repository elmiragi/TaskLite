// import { useState } from 'react'
// import Button from './buttons';

import {ThemeProvider} from '@emotion/react';
import {TaskPage} from './task-page';
import { TasksOutput } from './task-outputter';
import {GlobalStyles} from './styles/global';
import {theme} from './styles/theme';


export function App() {
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <TaskPage />
        <TasksOutput/>
    </ThemeProvider>
  )
  
  
}














// import Title from './Title';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

  // const [count, setCount] = useState(0);

    // <button onClick={decrement}>-</button>
    // <h2>Счетчик {count}</h2>
    // <button onClick={increment}>+</button>
    // <h1></h1>
    // <h2>{username}</h2>
// return <Title title='learn react' text='lorem' user="Elmira"/>;
   
    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  // )


  
  // function increment() {
  //   setCount(count => count + 1)
  // };
  // function decrement() {
  //   setCount(count => count - 1)
  // };
  
  // function setCart() {
  //   return <h2>Товар выбран</h2>;
  // };
  // function setForm() {
  //   setInCart(true);
  //   return <h2>Товар добавлен в корзину</h2>;
  // };
  // function data() {
  // };

  