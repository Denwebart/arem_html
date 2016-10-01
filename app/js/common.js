$(function() {

	// Custom JS
    $(document).on('click', '.dropdown', function (e) {
        if($(this).is('.active')) {
            $(this).removeClass('active');
        } else {
            $('.dropdown').removeClass('active');
            $(this).addClass('active');
        }
    });

});
