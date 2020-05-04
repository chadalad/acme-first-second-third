// containers
const slots = ['first', 'second', 'third'];

// state
const users = [
    {id: 1, name: 'moe', slot: 'first'},
    {id: 2, name: 'larry', slot: 'second'},
    {id: 3, name: 'curly', slot: 'third'},
    {id: 4, name: 'lucy', slot: 'third', selected: true},
];

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
const createButtons = (users, slot) => {
    // if slot matches first slot, disable shift left
    // if slot matches last slot, disable shift right

    const buttonContainer = createNode('div');

    const shiftLeft = createNode('button');
    shiftLeft.innerText = '<';
    shiftLeft.classList.add('button');
    shiftLeft.classList.add('active');
    if (slot === slots[0]) {
        shiftLeft.setAttribute('disabled', 'disabled');
        shiftLeft.classList.remove('active');
    }

    const shiftRight = createNode('button');
    shiftRight.innerText = '>';
    shiftRight.classList.add('button');
    shiftRight.classList.add('active');
    if (slot === slots[slots.length - 1]) {
        shiftRight.setAttribute('disabled', 'disabled');
        shiftRight.classList.remove('active');
    }

    // determine which users have the slot, deal with accordingly:
    // use indexOf(slot) to determine the current slot, set slot to -- or ++
    const createClickHandler = (users, slot, direction) => {
        return (ev) => {
            ev.stopPropagation();

            users.forEach((user) => {
                // make sure user is in current slot
                if (user.slot === slot) {
                    //make sure user is selected
                    if (user.selected) {
                        let idx = slots.indexOf(user.slot);
                        //now check direction
                        if (direction === 'right') {
                            idx = idx + 1;
                            user.slot = slots[idx];
                            render();
                        } else {
                            idx = idx - 1;
                            user.slot = slots[idx];
                            render();
                        }
                    }
                }
            })
        }
    };
    shiftLeft.addEventListener('click', createClickHandler(users, slot, 'left'));
    shiftRight.addEventListener('click', createClickHandler(users, slot, 'right'));

    buttonContainer.append(shiftLeft);
    buttonContainer.append(shiftRight);

    return buttonContainer;
}

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

const createList = (users, slot) => {
    const list = createNode('div');
    list.classList.add('list');

    const buttons = createButtons(users, slot);
    list.append(buttons);

    const listText = createNode('h2');
    listText.innerText = slot.toUpperCase();
    list.append(listText);

    
    users.forEach(element => {
        //console.log(element, element.slot, element.name);
        
        if (element.slot === slot) {
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

const render = () => {
    app.innerHTML = '';
    app.append(createHeader())
    app.append(createListContainer());
}

render();
