const ol = document.querySelector('.cart__items');

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
  ol.removeChild(event.target);
  saveCartItems(ol.innerHTML);
}

const addEvent = () => {
  ol.innerHTML = getSavedCartItems();
  // tratando a localStorageLi
  const localStorageLi = document.querySelectorAll('.cart__item');
  localStorageLi.forEach((val) => val.addEventListener('click', cartItemClickListener));
};

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
  const carrinho = createCartItemElement(arrayBruto);
  ol.appendChild(carrinho);
  // forma de salvar o 
  saveCartItems(ol.innerHTML);
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
  addEvent();
};
