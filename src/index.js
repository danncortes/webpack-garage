import 'bootstrap/dist/css/bootstrap.css';
document.body.innerHTML = 'Hola Mundo';

const myButton = document.createElement('button');
myButton.className = 'btn btn-primary';
myButton.innerHTML = 'My Button';

document.body.appendChild(myButton);