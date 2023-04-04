const SearchInput = function (props: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errState: boolean;
}) {
  const { errState } = props;
  return (
    <input
      type="text"
      className={`form-control ${errState ? "is-invalid" : ""}`}
      id="searchbar"
      placeholder={`Iron Man`}
      aria-describedby="searchHelp"
      onChange={props.onChange}
    />
  );
};
export default SearchInput;
