import "./App.css";
import { useState } from "react";
import { names } from "./names";
import NameCard from "./components/NameCard";
import SearchInput from "./components/searchInput";
import FavPicker from "./components/FavouritePicker";

const App = () => {
  const [namesList, setNamesList] = useState(names);
  const [searchInput, setSearchInput] = useState("");
  const [favourites, setFavourites] = useState([]);

  const handleSearch = (searchQuery) => {
    setSearchInput(searchQuery);
    const babyFilter = names.filter((baby) => {
      return baby.name.toLowerCase().match(searchQuery.toLowerCase())
    })
    setNamesList(babyFilter)
  }

  const addToFavs = (name) => {
    if (favourites.map((name) => name.name).includes(name.name)) return;
    setFavourites([...favourites, name]);
  }

const removeFavs = (toRemove) => {
  setFavourites(favourites.filter((name) => name.id !== toRemove.id))
}

  return ( 
  <div className = "App">
    <div className = "container">
    <SearchInput searchInput = {searchInput} handleSearch={handleSearch} />
    <FavPicker favourites={favourites} removeFavs={removeFavs}/>

  <div className = "name-container">
    {namesList
    .sort((a,b) => a.name.localeCompare(b.name))
    .map((name) => {
      return (
        <NameCard key={name.id} data={name} handleClick={addToFavs}/>
        )
      })}
      </div>
      </div>
  </div>
   );
}
 
export default App;
