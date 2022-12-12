$('body').prepend('<header>');
$('body').append('<footer>');

$('header').load("./inc.html header .headcon",head);
$('footer').load("./inc.html footer>div");


function head(){
    const menu = document.querySelector ('.menu');
    const bg1 = document.querySelector ('.bg1');
    const btnesc = document.querySelector ('.esc');
    
    $('.open_menu').on('click',function(){
        $('.open_menu > span').css({'transform':'translateX(100px)'});
        $('.menu > .contents').toggleClass('animate__fadeInDownBig');
    
        setTimeout(function(){
            menu.style = 'transform : translateY(0)';
            bg1.classList.toggle('animate__fadeInBig');
        },600);
        setTimeout(function(){
            bg1.style = 'transform: translateX(0)';
        },1000);
    
        setTimeout(function(){
            btnesc.children[0].style = 'transform:translateY(3px) rotate(45deg) scale(1)';  
            btnesc.children[1].style = 'transform:translateY(0) rotate(-45deg) scale(1)';  
        },1400);
    });
    

    $('.esc').click(function(){
        $('.open_menu > span').css({'transform':'translateX(0)'}); 
        $('.esc > span').eq(0).css({'transform':'translateY(3px) rotate(45deg) translateX(-70px)'});  
        $('.esc > span').eq(1).css({'transform':'translateY(0) rotate(-45deg) translateX(70px)'});   
    
        setTimeout(function(){
            menu.style = 'transform: translateY(-100%)';
            bg1.style = 'opacity: 0';
        },400)
                    
        setTimeout(function(){
        bg1.style = 'transform: translateX(-3%)';
        },1000)

        $('.bg1').toggleClass('animate__fadeIn');
        $('.menu > .contents').toggleClass('animate__fadeInDown');
    });    

    const con = document.querySelector('.con');
    const popdown = document.querySelector('.jojoexit');

    $('.jojo').click(function(){   
        $('.pop').toggleClass("is_off");
        $('.esc > span').eq(1).css({'transform':'translateY(0) rotate(-45deg) translateX(70px)'});   
        
        con.animate([
        { transform: 'scale(0.6)'},
        { transform: 'scale(1.05)'},
        { transform: 'scale(1)'}
        ],{
            duration : 700, 
            delay:0,
            fill:"forwards",
            easing:"ease"
        });

        con.childNodes[1].animate([
        { transform: 'scale(0)'},
        { transform: 'scale(1)'}
        ],{
            duration : 200,
            delay: 250,
            fill:"forwards"
        });
    })  
    
    popdown.addEventListener('click',function(){
        con.animate([
        { transform: 'scale(1)'},
        { transform: 'scale(1.1)'},
        { transform: 'scale(0.8)'},
        { transform: 'scale(0)'}
        ],{
            duration : 300,
            fill:"forwards",
            easing:"ease"
        });       

        con.childNodes[1].animate([
        { transform: 'scale(1)'},
        { transform: 'scale(0)'}
        ],{
            duration : 300,
            fill:"forwards"
        });
        
        setTimeout(function() {
            $('.pop').toggleClass("is_off");
        },300);
    })
    
    const logoSpan = $('.logoP').html();
    let logoO = '';
    
    for(let i=0;i<logoSpan.length;i++){
        logoO +=`<span>${logoSpan[i]}</span>`;
    }
    $('.logoP').html(logoO);

    $('.logoP > span').each(function(key,logo){
        setTimeout(function(){
            logo.style.cssText = "animation-name : logoSpan";
        },80*[key])
    })
}
