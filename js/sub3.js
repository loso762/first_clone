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
        }
        button.classList.toggle("active");
        $(".panel").eq(key).toggle('slow');
        i=key;
    });
})