import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from '@/store';
import Setting from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Setting />
  </Provider>
)