import './App.css';
import React, { useState} from 'react';

function App() {
  // const [loc, setLoc] = useState('Rawalpindi')
  const [data, setData] = useState({});
  const [isShown, setIsShown] = useState(false)
  console.log(data);
  const apiFetch = () =>
  {
    var loc1 = prompt('Enter location');
    // var loc2 = setLoc(loc1);
    if(loc1 === null)
    {
      loc1 = 'Rawalpindi';

    }
    fetch(`https://api.weatherapi.com/v1/current.json?key=39da29e9742d4a4f8db53832221012&q=${loc1}`)
    .then(res => res.json())
    .then(result => {
      setData(result)
      console.log(result)})
      
    }

    const result = () =>
    {
      setIsShown(true)
    }
  
 
  return (

      <>
    <div className="App">
      {/* <input type="text" onChange={(e)=>setLoc(e.target.value) } value={loc} /> */}

      <h1>Check Temperature</h1>

      <button onClick={apiFetch}>Click Me to set location</button>
      <br />
      <br />

      <button onClick={result}>Show Temperature</button>
      {
        isShown === true ? 
        <>
        <p>{data.location.name}</p>
        <p id='para1'>{data.location.country}</p>
        <img src={data.current.condition.icon} alt="Loading Error" />
        <p>{data.current.condition.text}</p>
        <p>{data.current.temp_c}  </p> 
        </>
        : null
      }
    </div>
      </>
  );
}

export default App;