$(document).ready(function () {
    const slideShow = $('.slide-show');
    const slideCount = $('.single-slide').length; 
    const slideWidth = 100 / slideCount;
    console.log(slideWidth)
    let slideIndex = 0;

    slideShow.css('width', slideCount * 100 + '%');
    
    slideShow.find('.single-slide').each(function (index) {
        $(this).css({
            'width': slideWidth + '%',
            'margin-left': index * slideWidth + '%'
        });
    });


    $('.prev-slide').click(function () {
        slide(slideIndex - 1);
    });

    $('.next-slide').click(function () {
        slide(slideIndex + 1);
    });

    function slide(newSlideIndex) {
        if (newSlideIndex < 0 || newSlideIndex > slideCount - 1) {
            return;
        }

        const slideCaption = $('.slide-caption').eq(newSlideIndex);

        const marginLeft = (newSlideIndex * (-100)) + '%';

        slideCaption.hide();

        slideShow.animate({
            'margin-left': marginLeft
        }, 600, function () {
            slideIndex = newSlideIndex;
            slideCaption.fadeIn();
        });
    }
});