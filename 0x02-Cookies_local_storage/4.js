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
  unhide.innerHTML = `Email: ${Cookies.get('email')} -
  Firstname: ${Cookies.get('firstname')}`;
  document.body.appendChild(unhide);
  console.log(Cookies.get('email'), Cookies.get('firstname'));
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
  Cookies.remove('firstname');
  Cookies.remove('email');
  showForm();
};

const showWelcomeMessageOrForm = () => {
  if (!document.cookie) {
    showForm();
  } else {
    hideForm();

    const h1 = document.createElement('h1');
    h1.innerHTML = `Welcome ${Cookies.get('firstname')}
	<a style="font-weight: normal; font-style: italic; margin-left: 10px;"
	onclick="deleteCookiesAndShowForm(); showForm();">
	(logout)</a>`;

    const welcome = document.getElementById('welcome');
    welcome.appendChild(h1);
  }
};

const setCookiesAndShowWelcomeMessage = () => {
  const firstName = document.getElementById('firstname').value;
  const email = document.getElementById('email').value;

  Cookies.set('firstname', firstName, { expires: 10 });
  Cookies.set('email', email, { expires: 10 });
  showWelcomeMessageOrForm();
};
