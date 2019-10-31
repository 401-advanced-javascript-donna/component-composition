const apiCall = (url, charCount, page) => {
  return fetch(`${url}?perPage=${charCount}?page=${page}`)
    .then(res => res.json);
};

export default apiCall;
