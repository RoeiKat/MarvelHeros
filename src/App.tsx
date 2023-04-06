import { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import CustomNavbar from "./Components/UI/Navbar";
import MainPage from "./Pages/MainPage";
import SearchResultsPage from "./Pages/SearchResultsPage";

function App() {
  return (
    <Fragment>
      <CustomNavbar />
      <div className="container">
        <Routes>
          <Route path="/MarvelHeros/" element={<MainPage />} />
          <Route path="/MarvelHeros/heros/*" element={<SearchResultsPage />} />
          <Route path="*" element={<Navigate to={"/MarvelHeros/"} />} />
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
