/*Compass Scroll*/
$(document).ready(function(){
    window.onscroll = function() {
        let deg = window.scrollY*(0.0144);

        $(".compass").css({
            "transform": "rotate("+deg+"deg)",
        });
    };
});

/*Hide to Visible Nav*/
setTimeout(function(){
    $('nav').addClass('nav-content-visible');
}, 500);

/*Hide to Visible Header*/
setTimeout(function(){
    $('div#header-text').addClass('content-visible');
}, 250);

/*Hide to Visible Characters*/
setTimeout(function(){
    $('div#characters').addClass('content-visible');
}, 750);

/*Hide to Visible Player*/
setTimeout(function(){
    $('div#player').addClass('content-visible');
}, 750);

/*Hide to Visible Player*/
setTimeout(function(){
    $('div#player-and-header').addClass('content-visible');
}, 750);

window.addEventListener('scroll', reveal);

function reveal(){
    let reveals = document.querySelectorAll('.reveal');

    for(let i = 0; i < reveals.length; i++){

        let windowWeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 400;

        if(revealTop < windowWeight - revealPoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}