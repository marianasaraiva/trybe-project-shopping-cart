function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function cartItemClickListener(event) {
  const ol = document.querySelector('.cart__items');
    ol.removeChild(event.target);
  // ol.innerHTML = '';
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function createCartItemElement({ id: sku, title: name, price: salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

async function itemCarrinho(event) {
  const buscaSKU = getSkuFromProductItem(event.target.parentNode);
  const arrayBruto = await fetchItem(buscaSKU);
  const ol = document.querySelector('.cart__items');
  const carrinho = createCartItemElement(arrayBruto);
  ol.appendChild(carrinho);
}

function createProductItemElement({ id: sku, title: name, thumbnail: image }) {
  const section = document.createElement('section');
  section.className = 'item';
  const button = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  button.addEventListener('click', itemCarrinho);
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(button);

  return section;
}

const fetchObjeto = async () => {
  const arrayBruto = await fetchProducts('computador');
  arrayBruto.results.forEach((arr) => {
    const section = document.querySelector('.items');
    const result = createProductItemElement(arr);
    section.appendChild(result);
  });
};

window.onload = () => {
  fetchObjeto();
  cartItemClickListener();
};

// //lógica do todo List para criar seleção da tarefa por cor ao clicar uma vez
// olTarefa.addEventListener('click', function (event) {
//   for (let index = 0; index < liList.length; index += 1) {
//     liList[index].classList.remove('selected');
//     event.target.classList.add('selected');
//   }
// });

//   //lógica do to do list para apagar elemento clicado
//   buttonRemoveSinalizados.addEventListener('click', () => {
//     const tarefaSelecionada = document.querySelectorAll('.selected');
//     for (let index = 0; index < tarefaSelecionada.length; index += 1) {
//       olTarefa.removeChild(tarefaSelecionada[index]);
//     }
//   });