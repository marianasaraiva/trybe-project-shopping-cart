const fetchProducts = (param = 'computador') => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${param}`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.results);
};

if (typeof module !== 'undefined') {  
  module.exports = {
    fetchProducts,
  };
}

  // const result = await fetch(url);
  // const data = await result.json();
  // return data.results;

// async function teste(){
//   const hero = await heroName(url);
//   console.log(hero);
// }