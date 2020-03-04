// Make a div

const myDiv = document.createElement('div');

// add a class of wrapper to it

myDiv.classList.add('wrapper');

// put it into the body

const myBody = document.querySelector('body');

myBody.insertAdjacentElement( "afterbegin" , myDiv);

// make an unordered list

let myUl = document.createElement('ul');

// add three list items with the words "one, two three" in them
for (let index = 1; index <= 3; index++) {
    const myLi = document.createElement('li');
    myLi.textContent = index;

    myUl.insertAdjacentElement("beforeend" ,  myLi);
}

// put that list into the above wrapper

myDiv.insertAdjacentElement("afterbegin" , myUl);

// create an image

myImage = document.createElement('img');

// set the source to an image
myImage.src = 'https://picsum.photos/200/300';

// set the width to 250

myImage.width = '250';
// add a class of cute

myImage.classList.add('cute');
// add an alt of Cute Puppy
myImage.alt = 'Cute Puppy';

// Append that image to the wrapper

myDiv.insertAdjacentElement('beforeend' , myImage);

// with HTML string, make a div, with two paragraphs inside of it

const myHtml = `
    <div class="myNewDiv">
        <p>Ey bro</p>
        <p>Ey sis</p>
    </div>
`;

// put this div before the unordered list from above
myUl = document.querySelector('ul');

myUl.insertAdjacentHTML('beforebegin' , myHtml);

// add a class to the second paragraph called warning
let myNewDiv = document.querySelector('.myNewDiv');
myNewDiv.children[1].classList.add('warning');
// remove the first paragraph

myNewDiv.firstElementChild.remove();



// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

function generatePlayerCard (name,age,height){
    let myHtml = `
    <div class="playerCard">
        <h2>${name} - ${age} </h2>
        <p>They are ${height} and ${age} years old. In Dog years this person would be ${age*7}. That would be a tall dog!</p>
        <button class="delete">Delete</button>
    </div>
    `
    return myHtml;
}

// make a new div with a class of cards
let newDiv = document.createElement('div');
newDiv.classList.add('cards');
// Have that function make 4 cards

let card1 = generatePlayerCard('Franklins' , 21 , 1,70);
let card2 = generatePlayerCard('Tute' , 21 , 1,80);
let card3 = generatePlayerCard('Iara' , 21 , 1,70);
let card4 = generatePlayerCard('Vero' , 47 , 1,50);

// append those cards to the div

newDiv.insertAdjacentHTML("beforeend",card1);
newDiv.insertAdjacentHTML("beforeend",card2);
newDiv.insertAdjacentHTML("beforeend",card3);
newDiv.insertAdjacentHTML("beforeend",card4);

// put the div into the DOM just before the wrapper element
let div  = document.querySelector('.wrapper');
div.insertAdjacentElement('beforebegin' ,  newDiv);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// select all the buttons!
const buttons = document.querySelectorAll('.delete');
// make out delete function
function deleteCard(event){
    const buttonClicked = event.currentTarget;
    buttonClicked.closest('.playerCard').remove();
}
// loop over them and attach a listener

buttons.forEach(button => button.addEventListener('click', deleteCard));
