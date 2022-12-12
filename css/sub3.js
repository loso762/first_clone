
const tabList = document.querySelectorAll('ul.list li');
const tabcon = document.querySelectorAll('div.cont_area .container');
let activeCont = ''; 
for(var k = 0; k < tabList.length; k++){
    tabList[k].querySelector('.btn').addEventListener('click', function(e){
    e.preventDefault();
    for(var j = 0; j < tabList.length; j++){
        tabList[j].classList.remove('is_on');
        tabcon[j].style.display = 'none';
    this.parentNode.classList.add('is_on');
    activeCont = this.getAttribute('href');
    document.querySelector(activeCont).style.display = 'block';
    }});
}


let acc = document.querySelectorAll(".accordion");
let panel = document.querySelectorAll(".panel");
let i=0;

acc.forEach(function(button,key){
    button.addEventListener("click", function () {
        if(i!=key){
            acc[i].classList.remove("active");
            panel[i].style.maxHeight = null;
        }
        button.classList.toggle("active");
        if (panel[key].style.maxHeight) {
            panel[key].style.maxHeight = null;
        } else {
            panel[key].style.maxHeight = panel[key].scrollHeight + "px";
        }
        i=key;
    });
})

const newspop = document.querySelector('.newspop');
const news = document.querySelectorAll('.news > li');
const popdown2 = document.querySelector('.newsexit');
const imgwrap = document.querySelector('.newspop > .con > .wrap > img');
const imgex = document.querySelector('.newspop > .con > .ex');
const newsnextbtn = document.querySelector('.newsnext');
const newsprevtbtn = document.querySelector('.newsprev');
let t; 

const newsdata = [
        {data:"<span>문학동네 <우리 사이엔 오해가 있다> 이슬아 x 남궁인 작가.</span>이슬아 x 남궁인 작가님이 주고받은 서간문이 책으로 나왔어요 ✨<br>두 작가님의 '사진온실-개인경관' 촬영 사진이 책 띠지를 포함 18장이 포함되었습니다."},
        {data:"<span>BNMR 이현진 디자이너, ‘사진온실’ 브랜딩 디자인 iF 어워드 수상</span>네이버 디자인프레스 <스튜디오 NOW><br><국제 디자인상 거머쥔 셀프 사진 스튜디오><br>BNMR 이현진 디자이너, ‘사진온실’ 브랜딩 디자인 iF 어워드 수상<br><br>브랜드 크리에티브 파트너 ‘BNMR’의 디렉터 이현진 디자이너가 거울 셀프 사진관 ‘사진온실’ 브랜딩 디자인으로 iF 디자인 어워드의 커뮤니케이션 디자인 부문 본상을 수상했다."},
        {data:"<span><사진온실 매장 이전 안내></span>새로운 매장은 촬영 공간이 넓어졌어요✨<br>오직 한 사람(또는 한 팀)을 위한 독립된 공간에서 촬영 순간 타인을 신경 쓰지 않고,<br>오롯이 본인에게 집중할 수 있는 환경과 인물 사진이 더 잘 나오도록 세팅했습니다."},    
        {data:"<span>문학동네 <우리 사이엔 오해가 있다> 이슬아 x 남궁인 작가</span>문학동네 <우리 사이엔 오해가 있다> 출간<br>이슬아 x 남궁인 작가님이 주고받은 서간문이 책으로 나왔어요✨<br>두 작가님의 '사진온실-개인경관' 사진이 책 띠지를 포함 18장이 들어갔어요<br>한 권은 매장 선반에 전시하고, 다른 한 권은 사진온실을 방문하는 분들이 읽거나, 살펴볼 수 있게 매장에 비치해뒀습니다"},    
        {data:""} 
];
const newspic = [
    {src:"./img_sub3/q1.jpg"},
    {src:"./img_sub3/q2.jpg"},
    {src:"./img_sub3/q3.jpg"},
    {src:"./img_sub3/q4.jpg"},
    {src:""}
];

news.forEach(function(li,key){
    li.addEventListener('click',function(){  
        imgwrap.setAttribute('src',newspic[key].src);   
        imgex.innerHTML = newsdata[key].data;
        newspop.classList.toggle("is_off");
        newspop.childNodes[1].animate(
            [
                { opacity:'0'},{ opacity:'1'}
            ],
            {
                duration : 400,
                delay:0,
                fill:"forwards",
                easing:"ease"
            }
        );
        popdown2.animate([
            { transform:'scale(0)'},
            {  transform:'scale(1)'}
            ],{
                duration : 400,
                fill:"forwards",
                easing:"ease"
        });
        newspop.childNodes[1].childNodes[1].animate([
        { opacity:'0'},
        { opacity:'1'}
        ],{
            duration : 400,
            fill:"forwards"
        });             
        t = Number(imgwrap.src.slice(imgwrap.src.lastIndexOf('/')+2,'-4'));  
        // y = t+1; u = t-1;   
    })
})    

popdown2.addEventListener('click',function(){        
    popdown2.animate([
        { transform:'scale(1)'},
        {  transform:'scale(1.2)'},
        {  transform:'scale(0)'}
        ],{
            duration : 300,
            fill:"forwards",
            easing:"ease"
    });
    newspop.childNodes[1].animate([
    { opacity:'1'},
    { opacity:'0'}
    ],{
        duration : 400,
        fill:"forwards",
        easing:"ease"
    });            
    newspop.childNodes[1].childNodes[1].animate([
    {opacity:'1'},
    {opacity:'0'}
    ],{
        duration : 400,
        fill:"forwards"
    });

    setTimeout(function() {
        newspop.classList.toggle("is_off");
    }, 350);
})
newsnextbtn.addEventListener('click',function(){           
    t+=1;
    imgwrap.setAttribute('src', newspic[t-1].src)
    imgex.innerHTML = newsdata[t-1].data;   
    this.animate([
        { transform:'scale(1)'},
        {  transform:'scale(1.2)'},
        {  transform:'scale(1)'}
        ],{
            duration : 300,
            fill:"forwards",
            easing:"ease"
    });
}); 
newsprevtbtn.addEventListener('click',function(){         
    t-=1;        
    if(t>=1){
        imgwrap.setAttribute('src', newspic[t-1].src)
        imgex.innerHTML = newsdata[t-1].data;  
    }else{
        t=1;
        imgwrap.setAttribute('src', newspic[0].src)
        imgex.innerHTML = newsdata[0].data;  
    }
    this.animate([
        { transform:'scale(1)'},
        {  transform:'scale(1.2)'},
        {  transform:'scale(1)'}
        ],{
            duration : 300,
            fill:"forwards",
            easing:"ease"
    });
});