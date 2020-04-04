// import the react and react-dom libraries 
import React from 'react';
import ReactDOM from 'react-dom';


// create react componate 
const App = () => {
  const buttonText = {text: 'Click Me'};
  return (
  <div>
    <label className="label" htmlFor="name">enter name</label>
    <input id="name" type="text"></input>
    <button style={{backgroundColor: 'blue', color: 'white'}}>{buttonText.text}</button>
  </div>
  )
};



// take react componate and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);