import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from "./router";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}></RouterProvider>,
)

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})
