// Add your answer here

$('.lesson').hover(
    function() {
        $(this).find('.text-contents').css('display', 'block');
    },
    function() {
        $(this).find('.text-contents').css('display', 'none');
    }
);

