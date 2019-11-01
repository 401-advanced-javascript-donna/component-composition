const apiCall = (url, count, page) => {
  let apiUrl;
  if(url.match(/[gif]/g)) {
    apiUrl = `${url}/random?count=${count}`;
  } else {
    apiUrl = `${url}?perPage=${count}&page=${page}`;
  }
  return fetch(apiUrl)
    .then(res => res.json())
    .then(result => result);
};

export default apiCall;
