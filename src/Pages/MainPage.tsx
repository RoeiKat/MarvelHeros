import SearchForm from "../Components/Search/SearchForm";

const MainPage = function () {
  return (
    <div className="border mt-5 d-flex flex-column align-items-center ">
      <h1>Marvel Heros,</h1>
      <img
        src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/d8d80a51766659.58f8feb30d642.jpg"
        alt="All marvel series"
        style={{ width: "50rem", height: "30rem" }}
      />
      <div className="col-12">
        <SearchForm />
      </div>
    </div>
  );
};

export default MainPage;
