import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getHero } from "../../API/api";

import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
const SearchForm = function () {
  const navigate = useNavigate();
  const [errState, setErrState] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<null | string>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm) {
      setErrState(true);
      return;
    }
    navigate(`/MarvelHeros/heros/?heroName=${searchTerm}`, {
      replace: true,
    });
  };

  return (
    <form
      noValidate
      className="d-flex flex-row justify-content-center"
      onSubmit={submitHandler}
    >
      <div className="col-9 col-md-6">
        <SearchInput
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setErrState(false);
            setSearchTerm(e.target.value);
          }}
          errState={errState}
        />
      </div>
      <div className="text-center col-3 col-sm-1">
        <SearchButton />
      </div>
    </form>
  );
};

export default SearchForm;
