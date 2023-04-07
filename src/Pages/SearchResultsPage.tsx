import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import { getHero } from "../API/api";
import { Hero } from "../interfaces/hero.interface";

import SearchForm from "../Components/Search/SearchForm";
import Spinner from "../Components/UI/Spinner";
import HeroCard from "../Components/Heros/HeroCard";
import HeroModal from "../Components/Heros/HeroModal";

const SearchResultsPage = function () {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentHero, setCurrentHero] = useState<Hero | null>(null);
  const [searchResults, setSearchResults] = useState<Hero[]>([]);
  const heroName = searchParams.get("heroName");

  useEffect(() => {
    setLoading(true);
    if (!heroName) {
      navigate("/MarvelHeros", {
        replace: true,
      });
      setLoading(false);
      return;
    }
    getHero(heroName)
      .then((results) => {
        const heros: Hero[] = results.data.results;
        setSearchResults(heros);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [heroName]);

  if (loading) {
    return (
      <div className="mt-5">
        <SearchForm />
        <div className="mt-5 p-5 d-flex align-items-center justify-content-center">
          <Spinner />
        </div>
      </div>
    );
  } else {
    return (
      <div className="mt-5">
        <SearchForm />
        <div className="mt-5 p-1 border row">
          {searchResults.length ? (
            searchResults.map((hero) => {
              return (
                <div
                  className="mt-3 mb-3 col-12 col-sm-4 col-md-3"
                  key={hero.id}
                >
                  <HeroCard
                    hero={hero}
                    onClick={() => {
                      setShowModal(true);
                      setCurrentHero(hero);
                    }}
                  />
                </div>
              );
            })
          ) : (
            <h5 className="text-center m-2">No hero found by this name.</h5>
          )}
          <HeroModal
            show={showModal}
            hero={currentHero}
            closeModal={() => {
              setShowModal(false);
            }}
          />
        </div>
      </div>
    );
  }
};

export default SearchResultsPage;
