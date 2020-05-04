// containers
const slots = ['first', 'second', 'third'];

// state
const users = [
    {id: 1, name: 'moe', slot: 'first'},
    {id: 2, name: 'larry', slot: 'second'},
    {id: 3, name: 'curly', slot: 'third'},
    {id: 4, name: 'lucy', slot: 'third', selected: true},
];

// next steps:
// pass in the state to the different functions,
// disable funcitons
// do funcitonality

// create app
const app = document.querySelector('#app');
console.log(app);

// helper functions
const createNode = (type) => document.createElement(type);

// create elements
const createHeader = () => {
    const headerContainer = createNode('div');
    const headerText = createNode('h1');
    headerText.innerText = 'Acme First, Second, Third';
    headerContainer.append(headerText);
    return headerContainer;
}

const createButtons = () => {
    const createClickHandler = '';

    const buttonContainer = createNode('div');

    const shiftLeft = createNode('button');
    shiftLeft.innerText = '<';
    shiftLeft.classList.add('button');
    shiftLeft.classList.add('active');

    const shiftRight = createNode('button');
    shiftRight.innerText = '>';
    shiftRight.classList.add('button');
    shiftRight.classList.add('active');

    buttonContainer.append(shiftLeft);
    buttonContainer.append(shiftRight);

    return buttonContainer;
}

const createList = (text) => {
    const list = createNode('div');
    list.classList.add('list');

    const leftButton = createButtons();
    list.append(leftButton);

    const listText = createNode('h2');
    listText.innerText = text.toUpperCase();
    list.append(listText);
    return list;
}





//where the magic happens
const createListContainer = () => {
    const listContainer = createNode('div');
    listContainer.setAttribute('id', 'lists');

   for (let i = 0; i < slots.length; i ++) {
       const listToAdd = createList(slots[i]);
       listContainer.append(listToAdd);
   }

    return listContainer;
}


const createNameCard = () => {
    const nameCardContainer = createNode('div');

}

// create buttons, create name cards

// add elements to the app
//app.append(createHeader())

//app.append(createListContainer());

const render = () => {
    app.innerHTML = '';
    app.append(createHeader())
    app.append(createListContainer());

    /*
    const listContainer = createListContainer();
    slots.forEach((text) => {
        const list = createList(text);
        listContainer.append(list);
    })
    return listContainer;
    */



}

render();

/*
const createLists = () => {
    const listContainer = createNode('div');
    listContainer.setAttribute('id', 'lists');

    const firstList = createNode('div');
    firstList.classList.add('list')
    const firstListText = createNode('h2');
    firstListText.innerText = 'FIRST';
    firstList.append(firstListText);

    const secondList = createNode('div');
    secondList.classList.add('list');
    const secondListText = createNode('h2');
    secondListText.innerText = 'SECOND';
    secondList.append(secondListText);

    const third = createNode('div');
    third.classList.add('list');
    const thirdText = createNode('h2');
    thirdText.innerText = 'THIRD';
    third.append(thirdText);

    listContainer.append(firstList);
    listContainer.append(secondList);
    listContainer.append(third);
    return listContainer;

}

//app.append(createLists())
*/
