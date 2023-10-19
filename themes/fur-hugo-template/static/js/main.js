$(document).ready(function() {
    // Initially hide all content items
    $(".content-item").hide();

    // Show the home content item by default
    $("#home").show();

    $(".nav-item").click(function() {
        // Get the id of the content item to show
        var target = $(this).data("target");

        // Hide all content items
        $(".content-item").hide();

        // Show the selected content item
        $(target).show();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let wasOnHomepage = window.location.pathname === '/';

    window.addEventListener('popstate', function() {
        if (wasOnHomepage) {
            document.querySelector('.special-offer-popup').style.display = 'block';
            history.pushState(null, null, window.location.href);
        }
    });

    window.addEventListener('beforeunload', function() {
        wasOnHomepage = window.location.pathname === '/';
    });
});