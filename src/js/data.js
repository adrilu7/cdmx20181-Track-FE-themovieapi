let api = 'e5d69193';

window.getMovies = (api, str) => {
  let url = 'https://www.omdbapi.com/?apikey=' + api + '&s=' + str;
  return fetch(url).then((respon) => {
    return respon.json();
  }).then((respon) => {
    console.log(respon);
    return respon;
  }).catch((err) => {
    console.log(err.message);
  });
};
