let cartItems = [];

function addItem(item) {
  cartItems.push(item);
  displayCartItems();
}

function removeItem(index) {
  cartItems.splice(index, 1);
  displayCartItems();
}

function displayCartItems() {
  const itemList = document.getElementById('item-list');
  itemList.innerHTML = '';

  for (let i = 0; i < cartItems.length; i++) {
    const listItem = document.createElement('li');
    listItem.innerText = cartItems[i];
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.setAttribute('onclick', `removeItem(${i})`);

    listItem.appendChild(removeButton);
    itemList.appendChild(listItem);
  }
}
