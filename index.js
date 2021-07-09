// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
let request = new XMLHttpRequest();
request.addEventListener('readystatechange', () => {
  console.log(request.responseText);
});
request.open('get', 'https://jsonplaceholder.typicode.com/todos');
request.send();
