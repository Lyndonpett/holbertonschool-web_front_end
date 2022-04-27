let availableItems = ['Shampoo', 'Soap', 'Sponge', 'Water'];

if (!sessionStorage) {
  alert(
    'Sorry, your browser does not support Web storage. Try again with a better one'
  );
} else {
  createStore();
  displayCart();
}

function getCartFromStorage() {
  if (sessionStorage.cart) {
    return JSON.parse(sessionStorage.cart);
  } else {
    return {};
  }
}

function addItemToCart(item) {
  const cart = getCartFromStorage();

  if (cart[item]) {
    cart[item] += 1;
  } else {
    cart[item] = 1;
  }

  sessionStorage.setItem('cart', JSON.stringify(cart));
  displayCart();
}

function removeItemFromCart(item) {
  const cart = getCartFromStorage();

  cart[item].remove();

  sessionStorage.setItem('cart', JSON.stringify(cart));
  displayCart();
}

function clearCart() {
  sessionStorage.clear();
  displayCart();
}

function createStore() {
  const h2 = document.createElement('h2');
  h2.innerHTML = 'Available products:';
  document.body.appendChild(h2);

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
  const div = document.getElementById('div');

  if (div == null) {
    const div = document.createElement('div');
    div.setAttribute('id', 'cart');
    document.body.appendChild(div);

    const h2 = document.createElement('h2');
    h2.innerHTML = 'Your cart:';
    div.appendChild(h2);
  }
  updateCart();
}

/*
It should add a list to the div tag created previously
If the cart is empty, it should add an item Your cart is empty
If the cart is not empty, it should add the list of items within the cart with the following format: ITEM_NAME x QUANTITY (remove)
When the user clicks on remove, it should call the function removeItemfromCart
At the top of the cart, add an item named Clear my cart. When the user clicks on it, it should call the function clearCart
*/
function updateCart() {
  const div = document.getElementById('div');
  const ul = document.getElementById('ul');
  if (ul == null) {
    const ul = document.createElement('ul');
    ul.setAttribute('id', 'ul');
    div.appendChild(ul);
  } else {
    ul.innerHTML = '';
  }

  const list = document.getElementById('ul');
  if (sessionStorage.cart == null) {
    const li = document.createElement('li');
    li.innerHTML = 'Your cart is empty';
    list.appendChild(li);
  } else {
    const clear = document.createElement('li');
    clear.innerHTML = '<a onclick="clearCart()">Clear my cart</a>';
    list.appendChild(clear);

    const cart = getCartFromStorage();
    for (let item in cart) {
      const li = document.createElement('li');
      li.innerHTML = `${item} x ${cart[item]} <a onclick="removeItemFromCart('${item}')">remove</a>`;
      list.appendChild(li);
    }
  }
}
