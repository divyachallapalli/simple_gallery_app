document.addEventListener('DOMContentLoaded', function () {


    var sideMenu = document.querySelector('.nav_side_menu');
    var sideBar = document.querySelector('.side_bar');

    sideMenu.addEventListener('click', function () {
        if (sideBar.style.display === 'block') {
            sideBar.style.display = 'none';
        } else {
            sideBar.style.display = 'block';
        }
    });

});