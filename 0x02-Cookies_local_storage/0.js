const setCookies = () => {
  let firstName = document.getElementById('firstname').value;
  document.cookie = `firstname=${firstName}`;
  let email = document.getElementById('email').value;
  document.cookie = `email=${email}`;
};

const showCookies = () => {
  const unhide = document.createElement('p');
  unhide.innerHTML = `<p>Cookies: ${document.cookie}</p>`;
  document.body.appendChild(unhide);
};
