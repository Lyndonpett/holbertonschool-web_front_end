const setCookies = () => {
  let date = new Date();
  date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000);
  date = date.toUTCString();

  const firstName = document.getElementById('firstname').value;
  document.cookie = `firstname=${firstName}; expires=${date}`;
  const email = document.getElementById('email').value;
  document.cookie = `email=${email}; expires=${date}`;
  document.getElementById('firstname').value = '';
  document.getElementById('email').value = '';
};

const showCookies = () => {
  const unhide = document.createElement('p');
  unhide.innerHTML = `<p>Cookies: ${document.cookie}</p>`;
  document.body.appendChild(unhide);
};
