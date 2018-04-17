import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import mainStore from "./Store/mainStore";

ReactDOM.render(
    <Provider store ={mainStore}>
      <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
