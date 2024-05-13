import React from 'react';

import './App.css';
// import Body from './components/Body';
import { Provider } from "react-redux"
import appStore from './utils/appStore';
const LazyBody = React.lazy(() => import("./components/Body"))

function App() {
  return (
    <div className="App">
      <Provider store={appStore}>
        <React.Suspense>
          <LazyBody />
        </React.Suspense>
      </Provider>
    </div>
  );
}

export default App;
