fetch("./json/sub3.json")
    .then(function (res) {
        return res.json();
    })
    .then(function (news) {
        const newsdata = news.newsdata;
        const newspic = news.newspic;
        const imgex = $('.newspop>.con>.ex');
        console.log($('.newspop>.con>.ex'));
        const imgwrap = $('.newspic').attr("src");
        let t; 

        $('.news > li').each(function(key,li){
            li.addEventListener('click',function(){  
                $('.newspic').attr('src', newspic[key].src);   
                $('.newspop>.con>.ex').html(newsdata[key].data);
                $('.newspop').toggleClass("is_off");

                $('.con').animate({
                    opacity:'1'
                }, 400);

                $('.newsexit').animate({
                    opacity:'1'
                }, 400); 

                t = Number(imgwrap.slice(imgwrap.lastIndexOf('/')+2,'-4')); 
            })
        })    

        $('.newsexit').click(function(){         
            
            $('.con').animate({
                opacity:'0'
            },400);    

            $('.newsexit').animate({
                opacity:'0'
            },400);  

            setTimeout(function() {
                $('.newspop').toggleClass("is_off");
            },400);

        })
        $('.newsnext').click(function(){            
            t+=1;
            $('.newspic').attr('src', newspic[t-1].src);   
            $('.newspop>.con>.ex').html(newsdata[t-1].data);
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

        $('.newsprev').click(function(){         
            t-=1;       
            if(t>=1){
                $('.newspic').attr('src', newspic[t-1].src);   
                $('.newspop>.con>.ex').html(newsdata[t-1].data);
            }else{
                t=1;
                $('.newspic').attr('src', newspic[0].src);   
                $('.newspop>.con>.ex').html(newsdata[0].data);
            }

            this.animate([
                { transform:'scale(1)'},
                { transform:'scale(1.2)'},
                { transform:'scale(1)'}
                ],{
                    duration : 300,
                    fill:"forwards",
                    easing:"ease"
            });
        });
    });