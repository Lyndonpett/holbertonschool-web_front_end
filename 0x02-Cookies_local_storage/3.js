const setCookies = () => {
  let date = new Date();
  date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000);
  date = date.toUTCString();

  const firstName = document.getElementById('firstname').value;
  document.cookie = `firstname=${firstName}; expires=${date}`;
  const email = document.getElementById('email').value;
  document.cookie = `email=${email}; expires=${date}`;
  if (firstName !== '' && email !== '') {
    showWelcomeMessageOrForm();
  }
};

const showCookies = () => {
  const unhide = document.createElement('p');
  unhide.innerHTML = `Email: ${getCookie('email')} -
  Firstname: ${getCookie('firstname')}`;
  document.body.appendChild(unhide);
};

const getCookie = (name) => {
  if (name) {
    return document.getElementById(name).value;
  } else {
    return '';
  }
};

const showForm = () => {
  const welcome = document.getElementById('welcome');

  if (welcome) {
    welcome.innerHTML = '';
  }
  document.getElementById('form').style.display = 'block';
};

const hideForm = () => {
  document.getElementById('form').style.display = 'none';
};

const deleteCookiesAndShowForm = () => {
  document.cookie = 'firstname=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  document.cookie = 'email=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  showForm();
};

const showWelcomeMessageOrForm = () => {
  if (!document.cookie) {
    showForm();
  } else {
    hideForm();

    const h1 = document.createElement('h1');
    h1.innerHTML = `Welcome ${getCookie('firstname')}
	<a style="font-weight: normal; font-style: italic; margin-left: 10px;"
	onclick="deleteCookiesAndShowForm(); showForm();">
	(logout)</a>`;

    const welcome = document.getElementById('welcome');
    welcome.appendChild(h1);
  }
};
