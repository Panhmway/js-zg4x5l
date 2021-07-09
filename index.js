// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
let request = new XMLHttpRequest();
request.addEventListener('readystatechange', () => {
  if(request.readyState===4 && request.status===200){
    console.log(request.responseText);
  }else if(request.status===404){
console.log("Url not sure")
  }

});
request.open('get', 'https://jsonplaceholder.typicode.com/todosq');
request.send();
