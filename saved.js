const currList = JSON.parse(localStorage.getItem('savedList'));
const template = document.getElementById('list-item-template');
const listDiv = document.querySelector('.list-items');

// Only show the empty cart msg when there are no items
function emptyListMsg() {
    let x = document.getElementsByClassName("list-msg")[0];
    if (currList.length == 0) {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

// Display each message in cart in the format of templates
function showMsg() {
    for (let i = 0; i < currList.length; i++) {
        message = currList[i];
        const clone = template.content.cloneNode(true);
        clone.querySelector('.card-text').innerHTML = message.content;

        // Add event listener to the remove button for removing items from
        const removeBtn = clone.querySelector('.remove-button');

        removeBtn.addEventListener('click', function() {
            // Remove the item graphically & logically and updated all properties
            let itemContainer = this.parentNode.parentNode;
            currList.splice(0, 1);
            itemContainer.parentNode.removeChild(itemContainer);
            localStorage.setItem('savedList', JSON.stringify(currList));
            emptyListMsg()
        });
        listDiv.appendChild(clone);
    }
}

showMsg()
emptyListMsg()