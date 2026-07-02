document.addEventListener('DOMContentLoaded', function() {
  console.log('Webcore website is now running!');

  const button = document.getElementById('demoButton');
  const messageArea = document.getElementById('messageDisplay');

  button.addEventListener('click', function() {
    console.log('Button was clicked!');

    const currentTime = new Date().toLocaleTimeString();

    const message = 'Hello there! This is Mere. You have entered my tiny Webcore archive at ' + currentTime + '.';

    messageArea.textContent = message;

    button.textContent = 'message received';

    setTimeout(function() {
      button.textContent = 'Click Me!';
    }, 2000);
  });
});
