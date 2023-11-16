
import { Provider } from 'react-redux';
import './App.css';
import Instagram from './Instagram';
import appStore from './utils/appStore';

function App() {
  return (
    <div>
    <Provider store={appStore}>
      <Instagram/>
     </Provider>
    </div>
  );
}

export default App;
