import './style.css'
import "@picocss/pico";
import "toastify-js/src/toastify.css";
import { Router } from './router';

function App() {
  const $root = document.getElementById('root') as HTMLDivElement | null;
  if (!$root) throw new Error("Root element not found");

  Router()

}

App();

