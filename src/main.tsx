import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from "./router";
import { Provider } from 'react-redux'
import store from "./store";
import './style/base.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router}>
    </RouterProvider>
  </Provider>
)
