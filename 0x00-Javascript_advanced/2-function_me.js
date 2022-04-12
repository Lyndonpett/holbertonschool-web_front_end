function welcomeMessage(fullName) {
  return () => alert('Weclome ' + fullName);
}

const guillaume = welcomeMessage('Guillaume');
const alex = welcomeMessage('Alex');
const fred = welcomeMessage('Fred');
