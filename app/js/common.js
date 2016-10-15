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
    $('#menu').attr('style', 'display:block');
    
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

    // Popup
    $(document).on('click', '.show-popup-button', function (e) {
        var popupId = $(this).data('popupId');
        $("html, body").css("overflow", "hidden");
        $('#' + popupId).addClass('open');
        $('#' + popupId + ' input').focus();
    });
    $(document).on('click', '.popup-close-button', function (e) {
        $("html, body").css("overflow", "auto");
        $(this).parent().removeClass('open');
    });
});
