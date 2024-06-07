import './homeCarouselScript';
import {loadPage} from "./globalScript";
let body = $('body');
const screenWindow: JQuery<Window> = $(window);
const softwareDevelopmentText: string = "Software Development";
const softwareDevelopmentTyped: JQuery<HTMLElement> = $('#software-development-typed');
const webDevelopmentText: string = "Web Development";
const leadershipText: string = "Leadership";
const leadershipTyped: JQuery<HTMLElement> = $('#leadership-typed');
const webDevelopmentTyped: JQuery<HTMLElement> = $('#web-development-typed');

function typeText(textToType: string, elementToType: JQuery<HTMLElement>): Promise<void> {
    let currentCharIndex: number = 0; // Moved local index to function scope.
    function typeChar(): Promise<void> {
        return new Promise((resolve) => {
            if (currentCharIndex < textToType.length) {
                elementToType.append(textToType.charAt(currentCharIndex));
                currentCharIndex++;
                setTimeout(() => resolve(typeChar()), 150);
            } else {
                resolve(); // Resolves when typing is done.
            }
        });
    }
    return typeChar(); // Kick off recursive typing and return promise.
}
function typeInitialPageText() {
    typeText(softwareDevelopmentText, softwareDevelopmentTyped).then(function(): void {
        typeText(webDevelopmentText, webDevelopmentTyped).then(function(): void {
            typeText(leadershipText, leadershipTyped);
        });
    });
}
function setScreenLayout(): void {
    if (screenWindow.innerWidth() < 1300) {
        body.toggleClass('mobile-view');
    }
}
let shouldLoadPage: boolean = loadPage(document.body, 'home');
if (shouldLoadPage) {
    $(document).ready(function (): void {
        typeInitialPageText();
        setScreenLayout();
    });
}
if (shouldLoadPage) {
    screenWindow.on('resize', setScreenLayout);
}