const servicesDropdown: JQuery<HTMLElement> = $('#services-dropdown');
const upArrowSrc: string = '../images/icon/arrow/up_arrow.svg';
const downArrowSrc: string = '../images/icon/arrow/down_arrow.svg';
const backArrowSrc: string = '../images/icon/arrow/back_arrow.svg';
const forwardArrowSrc: string = '../images/icon/arrow/forward_arrow.svg';
const hamburgerMenuSrc: string = '../images/icon/hamburger_menu.svg';
const navBarTexts: string[] = ['Home', 'Services', 'Projects', 'About', 'Contact'];
const servicesTexts: string[] = ['Crypto Trader', 'Sigwarth Home Tools', 'AI Baby Name Generator', 'Dota Data Hub', 'See All Services'];
let navBarItemTexts: JQuery<HTMLElement> = $('.nav-bar-item-text');
let navServicesDropdown: JQuery<HTMLElement> = $('#nav-services-dropdown');
let servicesArrowIcon: JQuery<HTMLElement> = $('#services-arrow-icon');
let hamburgerIcon: JQuery<HTMLElement> = $('#hamburger-menu-icon');
// Disable all img from being dragged
const images: HTMLCollectionOf<HTMLImageElement> = document.getElementsByTagName('img');
for (let image of Array.from(images)) {
    image.draggable = false;
}
let hamburgerListItems: JQuery<HTMLElement> = $('.hamburger-list-items');
let experienceSection: JQuery<HTMLElement> = $('#experience-section');
let body: JQuery<HTMLElement> = $('body');
function fullScreenNavFadeIn(): void {
    experienceSection.hide();
    $(this).addClass('full-screen-nav').fadeIn(400);
}
function fullScreenNavFadeOut(): void {
    experienceSection.show();
    $(this).removeClass('full-screen-nav').fadeIn(400);
}
function buttonIsHamburgerMenu() {
    return hamburgerIcon.attr('src') === hamburgerMenuSrc;
}
function toggleNavBarItems(): void {
    if (buttonIsHamburgerMenu()) {
        if (window.innerWidth >= 1300) {
            setServicesArrowDownIcon();
            if (hamburgerListItems.css('display') === 'none') {
                hamburgerListItems.fadeIn().css('display', 'flex');
            } else {
                hamburgerListItems.fadeOut(function(): void {
                    $(this).css('display', 'none');
                });
            }
        } else {
            setServicesArrowForwardIcon();
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
function setServicesArrowUpIcon(): void {
    servicesArrowIcon.attr('src', upArrowSrc);
}
function setServicesArrowDownIcon(): void {
    servicesArrowIcon.attr('src', downArrowSrc);
}
function fadeServicesArrowUpIcon(): void {
    servicesArrowIcon.fadeOut('fast', function(): void {
        $(this).attr('src', upArrowSrc).fadeIn('slow');
    });
}
function fadeServicesArrowDownIcon(): void {
    servicesArrowIcon.fadeOut('fast', function(): void {
        $(this).attr('src', downArrowSrc).fadeIn('slow');
    });
}
function setServicesArrowForwardIcon(): void {
    servicesArrowIcon.attr('src', forwardArrowSrc);
}
function hamburgerToBackArrow(): void {
    hamburgerIcon.fadeOut('slow', function(): void {
        $(this).attr('src', backArrowSrc).fadeIn('slow');
    });
}
function fadeOutServicesArrow() {
    servicesArrowIcon.fadeOut('slow');
}
function fadeInServicesArrow() {
    servicesArrowIcon.fadeIn('slow');
}
function routeDisplayServices(): void {
    let servicesDropdownVisible: boolean = servicesDropdown.is(':visible');
    if (window.innerWidth >= 1300) {
        if (servicesDropdownVisible) {
            hideServices();
        } else {
            displayServices();
        }
    } else {
        // Mobile configuration
        if (servicesDropdownVisible && !buttonIsHamburgerMenu()) {
            hideServices();
        } else if (!servicesDropdownVisible && buttonIsHamburgerMenu()){
            displayServices();
        }
    }
}
function displayServices(): void {
    if (window.innerWidth >= 1300) {
        fadeServicesArrowUpIcon();
        servicesDropdown.fadeIn('fast');
    } else {
        fadeOutServicesArrow();
        hamburgerToBackArrow();
        navBarItemTexts.fadeOut('slow', function(): void {
            navBarItemTexts.each(function (index: number): void {
                if (index < servicesTexts.length) {
                    if (servicesTexts[index] === 'See All Services') {
                        $(this).css('text-decoration', 'underline');
                    }
                    $(this).text(servicesTexts[index]).fadeIn('slow');

                }
            }).promise().done(function (): void {
                navServicesDropdown.css('margin-left', '0');
            });
        });
    }
}
function backArrowToHamburger(): void {
    hamburgerIcon.fadeOut('slow', function(): void {
        $(this).attr('src', hamburgerMenuSrc).fadeIn('slow');
    });
}
function hideServices(): void {
    if (window.innerWidth >= 1300) {
        fadeServicesArrowDownIcon();
        servicesDropdown.fadeOut('fast');
    } else {
        backArrowToHamburger();
        navBarItemTexts.fadeOut('slow', function(): void {
            navBarItemTexts.each(function (index: number): void {
                if (servicesTexts[index] === 'Contact') {
                    $(this).css('text-decoration', 'none');
                }
                if (index < navBarTexts.length) {
                    $(this).text(navBarTexts[index]).fadeIn('slow');
                }
            }).promise().done(function (): void {
                navServicesDropdown.css('margin-left', 'calc((0.5vw + 0.5vh) / 2 + 0.25em)');
                fadeInServicesArrow();
            });
        });
    }
}

hamburgerIcon.on('click', toggleNavBarItems);
navServicesDropdown.on('click', routeDisplayServices);