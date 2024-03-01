function ClearForm(){
    alert('You click clear function external');
}

$(function(){
    var pages = ['index', 'about', 'contact'];
    var pathname = window.location.pathname;

    $('.nav-link').each(function (item) {
        if(pathname.includes(pages[item])) {

            $(this).addClass('active');
            $(this).attr('aria-current', 'page');

        }
    });


});