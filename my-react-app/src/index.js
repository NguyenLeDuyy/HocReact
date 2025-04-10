import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Car from './w3school/Car';
import reportWebVitals from './reportWebVitals';

function Garage() {
  const carInfo = { name: "Audi", model: "Premium" };
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car brand={carInfo} />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Garage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
