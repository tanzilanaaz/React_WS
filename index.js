//1. import React and ReactDOM Librarires
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; //This step is when you put jsx function component in separate file
import 'bootstrap/dist/css/bootstrap.min.css'

//Tell React to take control of that element
const root = ReactDOM.createRoot(document.getElementById('root'));

//create component
//function App(){
//  return <h1>Hello, Welcome to my Employee React App</h1>
//}

//Show the component on screen
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
