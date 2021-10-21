const fetchSimulator = require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

window.fetch = jest.fn(fetchSimulator);

describe('1 - Teste a função fecthProducts', () => {
  // implemente seus testes aqui
  it('1- Verifica se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toEqual('function');
  });
  it('2. Testa se a função com argumento e se fetch foi chamada', async () => {
    expect.assertions(1);
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
  it('3. Teste se, ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador"', async () => {
  fail('Teste vazio');
  });
  it('4. Teste se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch', () => {
    fail('Teste vazio');
  });
  it('5. Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url', () => {
    fail('Teste vazio');
  });

});
