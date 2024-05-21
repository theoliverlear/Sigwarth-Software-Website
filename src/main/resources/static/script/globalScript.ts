// Disable all img from being dragged
const images: HTMLCollectionOf<HTMLImageElement> = document.getElementsByTagName('img');
for (let image of Array.from(images)) {
    image.draggable = false;
}
let hamburgerListItems: JQuery<HTMLElement> = $('.hamburger-list-items');
let body: JQuery<HTMLElement> = $('body');
function toggleNavBarItems(): void {
    if (window.innerWidth > 920) {
        hamburgerListItems.fadeToggle();
    } else {
        if (body.hasClass('full-screen-nav')) {
            body.fadeOut(200, function () {
                $(this).removeClass('full-screen-nav').fadeIn(400);
            });
        } else {
            body.fadeOut(200, function () {
                $(this).addClass('full-screen-nav').fadeIn(400);
            });
        }
    }
}

let hamburgerIcon: JQuery<HTMLElement> = $('#hamburger-menu-icon');
hamburgerIcon.on('click', toggleNavBarItems);
