var pageWrapper = document.querySelector('.page-wrapper');
var sideNavbar = document.querySelector('.side-navbar');
var toggleButton = document.querySelector('.toggle_button');

toggleButton.addEventListener('click', function() {
    sideNavbar.style.display = 'block';
});
pageWrapper.addEventListener('click', function() {
    sideNavbar.style.display = 'none';
});