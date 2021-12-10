import './App.css';
import Contador from './components/counter';
import store from './store/store';
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
        <Contador />
    </Provider>
  );
}

export default App;
