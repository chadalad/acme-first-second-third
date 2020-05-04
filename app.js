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

// original
const createButtons = (user, slot) => {
    // if slot matches first slot, disable shift left
    // if slot matches last slot, disable shift right

    const createClickHandler = '';
    //check to see if this is for the first, second, third, deactivate if at end

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


//original
/*
const createNameCard = (name) => {
    const nameCardContainer = createNode('div');
    nameCardContainer.classList.add('tile');
    
    nameCardContainer.innerText = name;


    return nameCardContainer;
}
*/

//refactored
const createNameCard = (user) => {
    const createClickHandler = (user) => {
        return (ev) => {
            ev.stopPropagation();
            user.selected = !user.selected;
            
            render();
        }
    }

    const nameCard = createNode('div');
    nameCard.classList.add('tile');
    nameCard.innerText = user.name;
    nameCard.addEventListener('click',createClickHandler(user));
    
    if(user.selected) {
        nameCard.classList.add('active');
    } else {
        nameCard.classList.remove('active');
    }

    return nameCard;
}

const createList = (users, text) => {
    const list = createNode('div');
    list.classList.add('list');

    const buttons = createButtons();
    list.append(buttons);

    const listText = createNode('h2');
    listText.innerText = text.toUpperCase();
    list.append(listText);

    
    users.forEach(element => {
        console.log(element, element.slot, element.name);
        //const nameCard = createNameCard(element.name);
        
        if (element.slot === text) {
            const nameCard = createNameCard(element);
            list.append(nameCard);
        }
        
    });
    

    return list;
}





//where the magic happens
const createListContainer = () => {
    const listContainer = createNode('div');
    listContainer.setAttribute('id', 'lists');

   for (let i = 0; i < slots.length; i ++) {
       const listToAdd = createList(users, slots[i]);
       listContainer.append(listToAdd);
   }

    return listContainer;
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
