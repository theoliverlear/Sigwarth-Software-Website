// Disable all img from being dragged
const images: HTMLCollectionOf<HTMLImageElement> = document.getElementsByTagName('img');
for (let image of Array.from(images)) {
    image.draggable = false;
}
let hamburgerListItems: JQuery<HTMLElement> = $('.hamburger-list-items');
let body: JQuery<HTMLElement> = $('body');
function fullScreenNavFadeIn(): void {
    $(this).addClass('full-screen-nav').fadeIn(400);
}
function fullScreenNavFadeOut(): void {
    $(this).removeClass('full-screen-nav').fadeIn(400);
}
function toggleNavBarItems(): void {
    if (hamburgerIcon.attr('src') === hamburgerMenuSrc) {
        if (window.innerWidth > 920) {
            hamburgerListItems.fadeToggle();
        } else {
            if (body.hasClass('full-screen-nav')) {
                body.fadeOut(200, fullScreenNavFadeOut);
            } else {
                body.fadeOut(200, fullScreenNavFadeIn);
            }
        }
    } else {
        hideServices();
    }
}
function hamburgerToBackArrow() {
    hamburgerIcon.fadeOut('slow', function (): void {
        $(this).attr('src', backArrowSrc).fadeIn('slow');
    });
}
function fadeOutServicesArrow() {
    servicesArrowIcon.fadeOut('slow');
}
function fadeInServicesArrow() {
    servicesArrowIcon.fadeIn('slow');
}
function displayServices(): void {
    fadeOutServicesArrow();
    hamburgerToBackArrow();
    navBarItemTexts.fadeOut('slow', function(): void {
        navBarItemTexts.each(function(index: number): void {
            if (index < servicesTexts.length) {
                $(this).text(servicesTexts[index]).fadeIn('slow');
            }
        }).promise().done(function() {
            navServicesDropdown.css('margin-left', '0');
        });
    });
}
function backArrowToHamburger(): void {
    hamburgerIcon.fadeOut('slow', function(): void {
        $(this).attr('src', hamburgerMenuSrc).fadeIn('slow');
    });
}
function hideServices(): void {
    backArrowToHamburger();
    navBarItemTexts.fadeOut('slow', function(): void {
        navBarItemTexts.each(function(index: number): void {
            if (index < navBarTexts.length) {
                $(this).text(navBarTexts[index]).fadeIn('slow');
            }
        }).promise().done(function () {
            navServicesDropdown.css('margin-left', 'calc((0.5vw + 0.5vh) / 2 + 0.25em)');
            fadeInServicesArrow();
        });
    });
}
const backArrowSrc: string = '../static/images/icon/arrow/back_arrow.svg';
const hamburgerMenuSrc: string = '../static/images/icon/hamburger_menu.svg';
const navBarTexts: string[] = ['Home', 'Services', 'Projects', 'About', 'Contact'];
const servicesTexts: string[] = ['Crypto Trader', 'Sigwarth Home Tools', 'AI Baby Name Generator', 'Dota Data Hub', 'See All Services'];
let navBarItemTexts: JQuery<HTMLElement> = $('.nav-bar-item-text');
let navServicesDropdown: JQuery<HTMLElement> = $('#nav-services-dropdown');
let servicesArrowIcon: JQuery<HTMLElement> = $('#services-arrow-icon');
let hamburgerIcon: JQuery<HTMLElement> = $('#hamburger-menu-icon');
hamburgerIcon.on('click', toggleNavBarItems);
navServicesDropdown.on('click', displayServices);