const changeMode = (size, weight, transform, background, color) => {
  return () => {
    document.body.style.fontSize = size;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
};

const main = () => {
  /* create variables for button attr */
  let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  let darkMode = changeMode(12, 'bold', 'capitalized', 'black', 'white');
  let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  /* create paragraph element */
  let paragraph = document.createElement('p');

  /* create buttons for each mode */
  let spookyButton = document.createElement('button');
  let darkButton = document.createElement('button');
  let screamButton = document.createElement('button');

  /* add text to our buttons/paragraph */
  paragraph.innerHTML = 'Welcome Holberton!';
  spookyButton.innerHTML = 'Spooky';
  darkButton.innerHTML = 'Dark mode';
  screamButton.innerHTML = 'Scream mode';

  /* append to doc */
  document.body.append(paragraph);
  document.body.append(spookyButton);
  document.body.append(darkButton);
  document.body.append(screamButton);

  /* set events for click */
  spookyButton.addEventListener('click', spooky);
  darkButton.addEventListener('click', darkMode);
  screamButton.addEventListener('click', screamMode);
};

main();
