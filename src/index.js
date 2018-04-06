import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'jquery';
import small from '../assets/medium.jpg';

document.body.innerHTML = 'Hola Mundo';

const myButton = document.createElement('button');
myButton.className = 'btn btn-primary';
myButton.innerHTML = 'My Button';

const theImage = document.createElement('img');
theImage.src = small;
theImage.width = 100;
theImage.height = 100;

const dropDownCont = document.createElement('div');
dropDownCont.innerHTML = `<div class="dropdown">
<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
    aria-expanded="false">
    Dropdown button
</button>
<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
</div>
</div>`;

document.body.appendChild(myButton);
document.body.appendChild(theImage);
document.body.appendChild(dropDownCont);

