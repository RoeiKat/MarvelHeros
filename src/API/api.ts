import MD5 from "crypto-js/md5";
const URL = process.env.REACT_APP_BASE_URL!;
const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY!;
const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY!;

const hashKeys = function (ts: string, privateKey: string, publicKey: string) {
  return MD5(ts + privateKey + publicKey).toString();
};

export const getHero = function (heroName: string) {
  const baseUrl = `${URL}/v1/public/characters`;
  const ts = Date.now().toString();
  const hash = hashKeys(ts, privateKey, publicKey);
  return fetch(
    `${baseUrl}?ts=${ts}&hash=${hash}&apikey=${publicKey}&nameStartsWith=${heroName}`
  )
    .then((results) => {
      if (!results.ok) throw Error("Something went wrong");
      return results.json();
    })
    .catch((error) => {
      console.log(error);
    });
};
