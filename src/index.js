import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
const LazyApp = React.lazy(() => import("./App"))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <React.Suspense>
      <LazyApp />
    </React.Suspense>
  </React.StrictMode>
);

