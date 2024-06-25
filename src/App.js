
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const[data,setData] = useState();
  const[name, setName] = useState();
  const[weight, setWeight] = useState();
  const [number, setNumber] = useState(1);
  const [height, setHeight] = useState();

  const URL = `https://pokeapi.co/api/v2/pokemon/${name}`;

  useEffect(() => {
    if (number)
      axios
        .get(URL)
        .then((response) => {
          console.log(response.data)
          setData(response.data);
          setName(response.data.name)
          setWeight(response.data.weight)
          setHeight(response.data.height)
        }).catch((err) =>{
          window.alert(err);
        })
  },[URL]);
  
  
    
  

  return (
    <div className="App">
      <h1>Pokemon</h1>
      <input className="inst" id="input1" type={"text"} placeholder="Find your Pokemon by number" onChange={(e) => {setNumber(e.target.value)}}></input>
      
      <h2>Name: { name }</h2>
      
      <h3>Weight: { weight }</h3>

      <h3>Height: {height}</h3>
      <img  src={data ? data.sprites.front_default : "<p>Loading</p>"}></img>

      <p>My abilities are:</p>
      {data ? data.abilities.map((value,key) =>{
        return(
          <div key = {key}>
            {value.ability.name}
          </div>
        )
      }):""}
    </div>
  );
}

export default App;
