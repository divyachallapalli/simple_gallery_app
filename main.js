document.addEventListener('DOMContentLoaded', function () {

    var modal = document.querySelector('.modal');
    var backdrop = document.querySelector('.backdrp');
    var products = document.querySelectorAll('.product');

    for (var i = 0; i < products.length; i++) {
        products[i].addEventListener('click', function () {
            modal.style.display = 'block';
            backdrop.style.display = 'block';
        });
    }
    var closeModalBtn = document.querySelector('.close-modal');
    closeModalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
        backdrop.style.display = 'none';
    });

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