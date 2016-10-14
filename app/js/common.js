$(function() {

	// Checkboxes
    $('input').iCheck({
        checkboxClass: 'checkbox icheckbox_flat-blue',
        radioClass: 'iradio_flat-blue'
    });

    // Dropdown
    $(document).on('click', '.dropdown', function (e) {
        if($(this).is('.active')) {
            $(this).removeClass('active');
        } else {
            $('.dropdown').removeClass('active');
            $(this).addClass('active');
        }
    });

    // Slideout.js Menu
    var slideout = new Slideout({
        'panel': document.getElementById('panel'),
        'menu': document.getElementById('menu'),
        'padding': 256,
        'tolerance': 70,
        'side': 'right'
    });
    // Slideout.js Menu - Toggle button
    document.querySelector('.toggle-button').addEventListener('click', function() {
        slideout.toggle();
    });
    document.querySelector('.menu-close-button').addEventListener('click', function() {
        slideout.close();
    });

    // Search
    $('.menu-section #search-form input').focusout(function (e) {
        $('.menu-section nav').removeClass('opacity-0');
    });
    $('.menu-section #search-form input').focusin(function (e) {
        $('.menu-section nav').addClass('opacity-0');
    });

});
