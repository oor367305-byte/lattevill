const footerButtons = document.querySelectorAll('.footer__tag-name');

footerButtons.forEach(function(button){
    button.addEventListener('click', function(){
        const footerItem = button.closest(".footer-first-list")

        footerItem.classList.toggle('active');
    });
});