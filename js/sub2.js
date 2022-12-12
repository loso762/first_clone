const tabList = document.querySelectorAll('ul.list li');
const tabcon = document.querySelectorAll('div.cont_area .container');
let activeCont = '';
for(var k = 0; k < tabList.length; k++){
    tabList[k].querySelector('.btn').addEventListener('click', function(e){
    e.preventDefault();
    for(var j = 0; j < tabList.length; j++){
        tabList[j].classList.remove('is_on');
        tabcon[j].style.display = 'none';
    }
    this.parentNode.classList.add('is_on');
    activeCont = this.getAttribute('href');
    $(activeCont).css({'display':'flex'});
    document.querySelector(activeCont).children[1].children[0].style.display = 'flex';
    });
}


    const acc = document.querySelectorAll('.conacc');
    const pa = document.querySelectorAll('.conpa');
    const pac = document.querySelectorAll('.conpa .panel');
    const panel = document.querySelectorAll('.panel');
    let activePanel = '';
        
    for(var t = 0; t < acc.length; t++){
        for(var k = 0; k < acc[t].children.length; k++){
            acc[t].children[k].addEventListener('click', function(e){
                for(var r = 0; r < pa.length; r++){
                    for(var k = 0; k < pa[r].children.length; k++){
                        acc[r].children[k].classList.remove('is_on');
                        pa[r].children[k].style = 'display:none'
                    }
                }
                $(this).addClass('is_on');
                activeCont = $(this).attr('href');
                $(activeCont).css({'display':'flex'});
            });
        }
    }

    const pic = document.querySelectorAll('.panel > li');
    const imgwrap = document.querySelector('.pic');
    const imgex = document.querySelector('.picpop > .con > .ex');
    let num; 

    pic.forEach(function(li,key){
        li.addEventListener('click',function(){  
            $('.pic').attr('src', pic[key].children[0].src);   
            $('.picpop > .con > .ex').html(pic[key].children[1].innerHTML);
            $('.picpop').toggleClass("is_off");

            $('.con').animate({
                opacity:'1'
            },300);    
            
            $('.picexit').animate({
                opacity:'1'
            },300);
            
            num = Number([key]);
        })
    })

    $('.picexit').on('click',function(){
        $('.con').animate({
            opacity:'0'
        },400);    

        $('.picexit').animate({
            opacity:'0'
        },400);

        setTimeout(function() {
            $('.picpop').toggleClass("is_off");
        },400);
    })

    $('.picnext').on('click',function(){            
        num+=1;
        imgwrap.setAttribute('src', pic[num].children[0].src)
        imgex.innerHTML =  pic[num].children[1].innerHTML;                   
    }); 

    $('.picprev').on('click',function(){          
        num-=1;        
        if(num>=1){
            imgwrap.setAttribute('src', pic[num].children[0].src)
            imgex.innerHTML =  pic[num].children[1].innerHTML;     
        }else{
            num=1;
            imgwrap.setAttribute('src',  pic[0].children[0].src)
            imgex.innerHTML =  pic[0].children[1].innerHTML;  
        }
    });

