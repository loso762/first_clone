const menu = document.querySelector ('.menu');
const bg1 = document.querySelector ('.menu > .bg1');
const contents = document.querySelector ('.menu > .contents');
const btnmenu = document.querySelector ('.open_menu');
const btnesc = document.querySelector ('.esc');
const btnmenuspan = document.querySelectorAll ('.open_menu > span');

btnmenu.addEventListener('click', function(){

    btnmenuspan.forEach(function(btn,key){
        btnmenuspan[key].style = 'transform: translateX(200px)';
    })
    
    contents.classList.toggle('animate__fadeInDownBig');

    setTimeout(function(){
    menu.style = 'transform : translateY(0)';
    bg1.classList.toggle('animate__fadeInBig');
    },600),
    setTimeout(function(){
    bg1.style = 'transform: translateX(0)';
    },1000);

    setTimeout(function(){
        btnesc.children[0].style = 'transform:translateY(3px) rotate(45deg) scale(1)';  
        btnesc.children[1].style = 'transform:translateY(0) rotate(-45deg) scale(1)';  
    },1400);             

});

btnesc.addEventListener('click', function(){

    for(let i=0; i<3 ; i++){
    btnmenuspan[i].style = 'transform: translateX(0)';   
    }
    
    btnesc.children[0].style = 'transform:translateY(3px) rotate(45deg) translateX(-70px)';  
    btnesc.children[1].style = 'transform:translateY(0) rotate(-45deg) translateX(70px)';   

    setTimeout(function(){
    menu.style = 'transform: translateY(-100%)';
    bg1.style = 'opacity: 0';
    },400)
                
    setTimeout(function(){
    bg1.style = 'transform: translateX(-3%)';
    },1000)
    bg1.classList.toggle('animate__fadeIn');
    contents.classList.toggle('animate__fadeInDown');
});

// logo 애니메이션
let logo = document.querySelector('.logoP');
const logoSpan = document.querySelector('.logoP').innerHTML;
let logoO = '';

for(let i=0;i<logoSpan.length;i++){
    logoO +=`<span>${logoSpan[i]}</span>`;
}
logo.innerHTML = logoO;

const logoSpan2 = document.querySelectorAll('.logoP > span');

logoSpan2.forEach(function(logo,key){
    setTimeout(function(){
        logo.style.cssText = "animation-name : logoSpan";
    },80*[key])
})


// popup 로그인창
const popcon = document.querySelector('.pop');
const pop = document.querySelector('.jojo');
const popdown = document.querySelector('.jojoexit');

pop.addEventListener('click',function(){
    
    popcon.classList.toggle("is_off");
    popcon.childNodes[1].animate([
    { transform: 'scale(0.6)'},
    { transform: 'scale(1.05)'},
    { transform: 'scale(1)'}
    ],{
        duration : 700, 
        delay:0,
        fill:"forwards",
        easing:"ease"
    });

    popcon.childNodes[1].childNodes[1].animate([
    { transform: 'scale(0)'},
    { transform: 'scale(1)'}
    ],{
        duration : 200,
        delay: 250,
        fill:"forwards"
    });
})

popdown.addEventListener('click',function(){
    popcon.childNodes[1].animate([
    { transform: 'scale(1)'},
    { transform: 'scale(1.1)'},
    { transform: 'scale(0.8)'},
    { transform: 'scale(0)'}
    ],{
        duration : 300,
        fill:"forwards",
        easing:"ease"
    });            
    popcon.childNodes[1].childNodes[1].animate([
    { transform: 'scale(1)'},
    { transform: 'scale(0)'}
    ],{
        duration : 300,
        fill:"forwards"
    });
    
    setTimeout(function() {
        popcon.classList.toggle("is_off");
    }, 330);
})