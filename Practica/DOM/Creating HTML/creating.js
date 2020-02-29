console.log('Works');

const myList = document.createElement('ul');

let li = document.createElement('li');
li.textContent = 'first';
myList.appendChild(li);

li = document.createElement('li');
li.textContent = 'second';
myList.appendChild(li);

li = document.createElement('li');
li.textContent = 'three';
myList.appendChild(li);

li = document.createElement('li');
li.textContent = 'four';
myList.appendChild(li);

document.body.appendChild(myList);
