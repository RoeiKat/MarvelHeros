import SearchForm from "../Components/Search/SearchForm";

const MainPage = function () {
  return (
    <div className="mt-5 d-flex flex-column align-items-center ">
      <h1>Marvel Heros,</h1>
      <p>The place where you can find data about your favorite Marvel Heros!</p>
      <div className="col-12 mb-3 mt-3">
        <SearchForm />
      </div>
      <img
        src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/d8d80a51766659.58f8feb30d642.jpg"
        alt="All marvel series"
        style={{ width: "50%" }}
      />
    </div>
  );
};

export default MainPage;
