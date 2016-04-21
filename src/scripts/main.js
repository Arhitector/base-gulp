$( document ).ready(function() {
    $("[data-close]").click(function() {
        var clickElement = $(this).data("close");
        $('.' + clickElement).removeClass('is-show');
    });
});