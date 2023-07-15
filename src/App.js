import "./App.css";
import { useState } from "react";
import { names } from "./names";
import NameCard from "./components/NameCard";
import SearchInput from "./components/searchInput";

const App = () => {
  const [namesList, setNamesList] = useState(names);
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (searchQuery) => {
    setSearchInput(searchQuery);
    const babyFilter = names.filter((baby) => {
      return baby.name.toLowerCase().match(searchQuery.toLowerCase())
    })
    setNamesList(babyFilter)
  }

  return ( 
  <div className = "App">
    <div className = "container">
    <SearchInput searchInput = {searchInput} handleSearch={handleSearch} />

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
