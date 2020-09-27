window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(document.getElementById('header').offsetTop < window.pageYOffset) {
        document.getElementById('header').style.background = '#a9acb0';
    } else {
        document.getElementById('header').style.background = '#889ed1';
    }
    
    if(document.getElementById('footer').offsetTop < window.pageYOffset) {
        document.getElementById('footer').style.background = '#a9acb0'
    } else if(document.getElementById('footer').offsetTop > window.pageYOffset) {
        document.getElementById('footer').style.background = '#889ed1';
    }
    
}