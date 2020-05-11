import _ from 'lodash';
import './style/style.scss';
import image from './assets/person.jpg';
import xmlData from './data/data.xml';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const myImage = new Image();
  myImage.src = image;

  element.appendChild(myImage);

  console.log('xml', xmlData);

  return element;
}

document.body.appendChild(component());
