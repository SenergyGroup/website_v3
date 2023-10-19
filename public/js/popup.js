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