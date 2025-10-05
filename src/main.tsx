import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.tsx'
// import Title from './Title.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* <Title title='learn world' text='lorem' user="Elmira"/> */}
  </StrictMode>,
)
