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
    document.querySelector(activeCont).style.display = 'flex';
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

                this.classList.add('is_on');
                activeCont = this.getAttribute('href');
                document.querySelector(activeCont).style = 'display:flex';
            });
        }
    }

    const picpop = document.querySelector('.picpop');
    const pic = document.querySelectorAll('.panel > li');
    const picu = document.querySelectorAll('.panel > li > img');
    const popdown2 = document.querySelector('.picexit');
    const imgwrap = document.querySelector('.picpop > .con > .wrap > img');
    const imgex = document.querySelector('.picpop > .con > .ex');
    const picnextbtn = document.querySelector('.picnext');
    const picprevtbtn = document.querySelector('.picprev');
    let num; 

    pic.forEach(function(li,key){
        li.addEventListener('click',function(){  
            imgwrap.setAttribute('src', pic[key].children[0].src);   
            imgex.innerHTML = pic[key].children[1].innerHTML;
            picpop.classList.toggle("is_off");
            picpop.childNodes[1].animate(
                [
                    { opacity:'0'},{ opacity:'1'}
                ],
                {
                    duration : 700,
                    delay:0,
                    fill:"forwards",
                    easing:"ease"
                }
            );
            picpop.childNodes[1].childNodes[1].animate([
            { opacity:'0'},
            { opacity:'1'}
            ],{
                duration : 200,
                delay: 250,
                fill:"forwards"
            }); 
            num = Number([key]);
        })
    })
    popdown2.addEventListener('click',function(){
        picpop.childNodes[1].animate([
        { opacity:'1'},
        { opacity:'0'}
        ],{
            duration : 300,
            fill:"forwards",
            easing:"ease"
        });            
        picpop.childNodes[1].childNodes[1].animate([
        {opacity:'1'},
        {opacity:'0'}
        ],{
            duration : 300,
            fill:"forwards"
        });
     
        setTimeout(function() {
            picpop.classList.toggle("is_off");
        }, 200);
    })
    picnextbtn.addEventListener('click',function(){            
        num+=1;
        imgwrap.setAttribute('src', pic[num].children[0].src)
        imgex.innerHTML =  pic[num].children[1].innerHTML;                   
    }); 
    picprevtbtn.addEventListener('click',function(){         
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

