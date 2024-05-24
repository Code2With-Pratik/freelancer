let navbar = document.querySelector('nav');
    let menuLinks = document.getElementById("menu-links");


    function toogleMenu(){
        menuLinks.classList.toggle('show-menu');
    }


    window.onscroll = function(){
        if(window.scrollY > 0){
            navbar.style.background = '#eefff9';
        }else{
            navbar.style.background = 'transparent';
        }
    }