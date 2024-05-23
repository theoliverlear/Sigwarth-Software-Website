import * as bootstrap from 'bootstrap';
import 'jquery-touchswipe';

$(document).ready(function () {
    $('#experience-carousel').swipe({
        swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
            if (direction == 'left') $(this).carousel('next');
            if (direction == 'right') $(this).carousel('prev');
        },
        allowPageScroll: 'vertical'
    });
});
let carousel = document.getElementById('experience-carousel');
if (carousel) {
    new bootstrap.Carousel(carousel, {
        interval: 5000
    });
}