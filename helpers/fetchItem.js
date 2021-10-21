const fetchItem = (param) => {
  // seu código aqui
  const url = `https://api.mercadolibre.com/items/${param}`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data);
};
// fetchItem('MLB1615760527');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
