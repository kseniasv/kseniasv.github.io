$('body').on('click', '[href*="#"]', function (e) {
    let fixedOffset = 45;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixedOffset }, 1000);
    e.preventDefault();
});
