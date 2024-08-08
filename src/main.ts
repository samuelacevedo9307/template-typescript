import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import "@picocss/pico";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/`
  <div class="container">
    <h1>HOLA</h1>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
