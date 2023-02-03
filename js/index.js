
$('body').prepend('<header>');
$('header').load("./inc.html header>.headcon",head);

function head(){
    const menu = document.querySelector ('.menu');
    const bg1 = document.querySelector ('.menu > .bg1');
    const contents = document.querySelector ('.menu > .contents');
    const btnmenu = document.querySelector ('.open_menu');
    const btnesc = document.querySelector ('.esc');
    const btnmenuspan = document.querySelectorAll ('.open_menu > span');

    $('.open_menu').click(function(){
        $('.open_menu > span').css({'transform':'translateX(100px)'});
        $('.menu > .contents').toggleClass('animate__fadeInDownBig');
    
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

        let slides = document.querySelectorAll('.swiper-slide');
        var swiper = new Swiper(".mySwiper", {
            direction: "vertical",
            slidesPerView: 1,
            speed:2000,
            spaceBetween: 0,
            effect: 'fade',
            mousewheel: true,
            autoplay: true,
            scrollbar: {
                el: ".swiper-scrollbar"
            },     
            on: {       
                slideChange : function () {    
                    if(this.realIndex>=1){
                        slides.forEach(function(div,key){
                            div.children[0].classList.remove('animate__fadeOutDownBig');
                            div.children[1].classList.remove('animate__fadeOutUpBig');
                        })
                        slides[this.realIndex-1].children[0].classList.add('animate__fadeOutDownBig');
                        slides[this.realIndex-1].children[1].classList.add('animate__fadeOutUpBig');
                    }else if(this.realIndex==0){
                        slides.forEach(function(div,key){
                            slides[0].children[0].classList.remove('animate__fadeOutDownBig');
                            slides[0].children[1].classList.remove('animate__fadeOutUpBig');
                        })           
                    }

                    slides.forEach(function(div,key){
                        div.children[0].classList.remove('animate__fadeInUp');
                        div.children[1].classList.remove('animate__fadeInDown');
                    })
                    slides[this.realIndex].children[0].classList.add('animate__fadeInUp');
                    slides[this.realIndex].children[1].classList.add('animate__fadeInDown');
                }             
            }
        });
        swiper.on('init', function () {          
        });


        const bg_1 = document.querySelector('.s1 > .bg1');
        const ex_1 = document.querySelector('.s1 > .ex1 > .content1 > .a2');

        const bgImg = [
            {url:'./img/f1.jpg'},
            {url:'./img/f1_1.jpg'},
            {url:'./img/f1_2.jpg'},
            {url:'./img/f1_3.jpg'},
            {url:'./img/f1_4.jpg'},
            {url:'./img/f1_5.jpg'},
            {url:'./img/f1_6.jpg'},
            {url:'./img/f1_7.jpg'},
            {url:'./img/f1_8.jpg'}
        ]

        const imgEx = [
            {ex:`아빠잘가요<br>빠이<br>#가족사진촬영`},
            {ex:'Like a Real<br>Team<br>#셀프웨딩촬영'},
            {ex:'이제 500일,<br>알아가는 사이<br>#셀프사진관'},
            {ex:'너는 진짜 좋겠다,<br>우리 아들이라서<br>#셀프사진관'},
            {ex:'Goodbye, 2021<br>#자화상촬영'},
            {ex:'세 얼간이<br>#우정사진촬영'},
            {ex:'Since Seattle<br>#결혼기념일촬영'} ,
            {ex:'Aug. 5, 2021<br>#서울셀프사진관'} ,
            {ex:'2021.11.11<br>사랑해<br>#셀프스튜디오'} 
        ]

        let ranNum = Math.ceil(Math.random()*bgImg.length)-1;
        bg_1.style.cssText = `background: url(${bgImg[ranNum].url}) center center/cover;` ;
        ex_1.innerHTML = imgEx[ranNum].ex;

        if(ranNum!=0){
            ex_1.style = 'letter-spacing: 1vw;'
        }
}
