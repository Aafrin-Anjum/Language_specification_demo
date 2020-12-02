import React,{Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import i18n from './i18nextConf';
import './i18nextConf';


ReactDOM.render(
  <Suspense fallback="...">
   <React.StrictMode>
    <App title = "Relevent Persons" 
    // t = {i18n}
    />
   </React.StrictMode>
   </Suspense>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
