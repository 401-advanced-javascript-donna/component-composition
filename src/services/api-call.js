const apiCall = (url, charCount, page) => {
  console.log('char', charCount)
  const apifetch = `${url}?perPage=${charCount}&page=${page}`;
  console.log(apifetch);
  return fetch(`${url}?perPage=${charCount}&page=${page}`)
    .then(res => res.json())
    .then(result => result);
};

export default apiCall;
