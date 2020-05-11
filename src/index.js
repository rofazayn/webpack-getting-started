import _ from 'lodash';
import './style/style.scss';
import image from './assets/person.jpg';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const myImage = new Image();
  myImage.src = image;

  element.appendChild(myImage);

  return element;
}

document.body.appendChild(component());
