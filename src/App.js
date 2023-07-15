import "./App.css";
import { useState } from "react";
import { names } from "./names";
import NameCard from "./components/NameCard";

const App = () => {
  const [namesList, setNamesList] = useState(names)
  return ( 
  <div className = "App">
    <div className = "container">

  <div className = "name-container">
    {namesList.map((name) => {
      return (
        <NameCard key={name.id} data={name} />
        )
      })}
      </div>
      </div>
  </div>
   );
}
 
export default App;
