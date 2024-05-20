// Disable all img from being dragged
const images: HTMLCollectionOf<HTMLImageElement> = document.getElementsByTagName('img');
for (let image of Array.from(images)) {
    image.draggable = false;
}

const hamburgerListItems: HTMLCollectionOf<Element> = document.getElementsByClassName('hamburger-list-items');
const hamburgerButton: HTMLElement = document.getElementById('hamburger-menu-icon');

function toggleListItemsView(): void {
    Array.from(hamburgerListItems).forEach((element: Element) => {
        if ((<HTMLElement>element).style.display === 'none') {
            (<HTMLElement>element).style.display = 'block';
        } else {
            (<HTMLElement>element).style.display = 'none';
        }
    });
}

hamburgerButton.addEventListener('click', toggleListItemsView);
