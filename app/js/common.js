$(function() {

    // Detect Windows Phone
    if(is.windowsPhone()) {
        $('body').addClass('is-windows-phone')
    }

	// Checkboxes
    $('input').iCheck({
        checkboxClass: 'checkbox icheckbox_flat-blue',
        radioClass: 'iradio_flat-blue'
    });

    // Dropdown
    /* close dropdown */
    $(window).click(function() {
        $('.dropdown').removeClass('active');
    });
    $(document).on('click', '.dropdown', function (e) {
        e.stopPropagation();
    });
    /* open dropdown */
    $(document).on('click', '.dropdown-button', function (e) {
        e.preventDefault();
        if($(this).parent().is('.active')) {
            $(this).parent().removeClass('active');
        } else {
            $('.dropdown').removeClass('active');
            $(this).parent().addClass('active');
        }
    });

    // Slide Down Container
    $(document).on('click', '.slide-down-button', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var $container = $(this).parent(),
            $content = $container.find('.slide-down-content');
        if($content.is(':visible')) {
            $content.slideUp();
            $container.removeClass('open');
        } else {
            $content.slideDown();
            $container.addClass('open');
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

    slideout.enableTouch();

    // Slideout.js Menu - Toggle button
    /* открытие меню по клику на кнопку меню */
    document.querySelector('.toggle-button').addEventListener('click', function(e) {
        e.stopPropagation();
        slideout.toggle();
    });
    /* закрытие меню по клику на кнопку закрытия */
    document.querySelector('.menu-close-button').addEventListener('click', function(e) {
        slideout.close();
    });
    /* закрытие меню по клику за пределами меню */
    document.querySelector('#panel').addEventListener('click', function(e) {
        slideout.close();
    });
    /* открытие/закрытие подменю */
    $('#menu').on('click', '.open-dropdown', function (e) {
        e.preventDefault();
        var $submenu = $(this).parent().parent().find('ul');
        if($submenu.is(':visible')) {
            $submenu.slideUp();
        } else {
            $submenu.slideDown();
        }
    });

    // Search
    $('.menu-section .search-form input').focusout(function (e) {
        $('.menu-section nav').removeClass('opacity-0');
    });
    $('.menu-section .search-form input').focusin(function (e) {
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

    // Blog
    function blogItemHeight($this) {
        var windowWidth = $(window).width();
        var imageHeight = $this.find(".item-image img").height();
        var titleHeight = $this.find(".item-title").outerHeight(true);
        var infoHeight = $this.find(".item-text .page-info").outerHeight(true);
        var fontSize = 16;
        if(windowWidth < 1200) {
            fontSize = 15;
        }

        textHeight = imageHeight - (imageHeight % (1.5 * fontSize)) + 4;

        if(imageHeight == null || windowWidth <= 480) {
            textHeight = 'auto';
        }

        $this.find('.item-text').height(textHeight);
    }

    $(document).ready(function () {
        $(".blog .item:not(.full)").each(function(){
            blogItemHeight($(this));
        });
    });
    $(window).resize(function () {
            $(".blog .item:not(.full)").each(function(){
                blogItemHeight($(this));
            });
        }
    );


    /* User Profile */

    // Dropify - file upload
    // Image Uploader
    var drEvent = $('.dropify').dropify({
        messages: {
            'default': 'Кликните или перетащите файл.',
            'replace': 'Кликните или перетащите файл для замены.',
            'remove': 'Удалить',
            'error': 'Ошибка.'
        },
        error: {
            'fileSize': 'Размер файла слишком большой (максимум 3Мб).'
        }
    });
    drEvent.on('dropify.afterClear', function(event, element){
        $('#deleteImage').val(1);
    });


});
