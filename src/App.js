
import './App.css';
import Body from './components/Body';
import { Provider } from "react-redux"
import appStore from './utils/appStore';

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Provider store={appStore}>

        <Body />
      </Provider>


    </div>
  );
}

export default App;
