import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import 'antd/dist/antd.css'; 
// import store from './Store'
// import { Provider } from 'react-redux'

ReactDOM.render(
    <BrowserRouter>
      {/* <Provider store={store}>  */}
        <App />
    {/* </Provider> */}
   </BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();
