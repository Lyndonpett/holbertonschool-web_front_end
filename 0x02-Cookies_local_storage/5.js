let availableItems = ['Shampoo', 'Soap', 'Sponge', 'Water'];

if (!localStorage) {
  alert(
    'Sorry, your browser does not support Web storage. Try again with a better one.'
  );
} else {
  createStore();
  displayCart();
}

function addItemToCart(item) {
  localStorage.setItem(item, true);
}

function createStore() {
  const ul = document.createElement('ul');
  document.body.appendChild(ul);

  availableItems.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = item;
    li.addEventListener('click', () => {
      addItemToCart(li.innerHTML);
    });
    ul.appendChild(li);
  });
}

function displayCart() {
  if (localStorage) {
    const p = document.createElement('p');
    p.innerHTML = `You previously had ${localStorage.length} items in your cart`;
    document.body.appendChild(p);
  }
}
