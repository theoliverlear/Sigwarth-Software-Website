// Disable all img from being dragged
const images = document.getElementsByTagName('img');
for (let image of images) {
    image.draggable = false;
}


const hamburgerListItems = document.getElementsByClassName('hamburger-list-items');
const hamburgerButton = document.getElementById('hamburger-menu-icon');
function toggleListItemsView() {
    for (let i = 0; i < hamburgerListItems.length; i++) {
        if (hamburgerListItems[i].style.display === 'none') {
            hamburgerListItems[i].style.display = 'block';
        } else {
            hamburgerListItems[i].style.display = 'none';
        }
    }
}
hamburgerButton.addEventListener('click', toggleListItemsView);
