import { createResource, createSignal, Match, Switch } from 'solid-js'
import solidLogo from './assets/solid.svg'
import viteLogo from '/vite.svg'
import './App.css'

const fetchMessage = async () => {
  const response = await fetch('http://localhost:8080/hello');
    return response.text();
}

function App() {
  const [count, setCount] = createSignal(0)
  const [message] = createResource(fetchMessage)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://solidjs.com" target="_blank">
          <img src={solidLogo} class="logo solid" alt="Solid logo" />
        </a>
      </div>
      <h1>Vite + Solid + Azure Static Web Apps</h1>
      <h2>Some Changes</h2>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count()}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Solid logos to learn more
      </p>
      <div>
        <Switch>
          <Match when={message.error}>
            <div>Nada!</div>
          </Match>
          <Match when={message}>
            <div>{message()}</div>
          </Match>
        </Switch>
      </div>
    </>
  )
}

export default App
