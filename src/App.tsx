import { useEffect } from "react";
import { getHero } from "./API/api";
import SearchForm from "./Components/Search/SearchForm";

getHero("hulk");

const baseURL = "https://gateway.marvel.com/";
function App() {
  return (
    <div className="container">
      <div>
        <h1 className="text-center">Welcome to Marvel Heros,</h1>
        <SearchForm />
      </div>
    </div>
  );
}

export default App;
