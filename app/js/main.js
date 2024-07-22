$(function () {
    $('.slider-home').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        dots: true
     });


     $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
                {
                  breakpoint: 1250,
                  settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                  },
                },
                {
                breakpoint: 900,
                settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                },
                },
                {
                breakpoint: 576,
                settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                },
                },
               
              ],
     });

     $('.slider-stock__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
                {
                  breakpoint: 650,
                  settings: {
                       arrows: false,
                       dots: true
                  },
                },
               
               
              ],
        
     });


     $('.qty-btn').on('click', function (e) {
        e.preventDefault();
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
                var newVal = parseFloat(oldValue) + 1;
        } else {
                // Don't allow decrementing below zero
                if (oldValue > 0) {
                        var newVal = parseFloat(oldValue) - 1;
                } else {
                        newVal = 0;
                }
        }
        $button.parent().find('input').val(newVal);
        });


        $('.questions-accardion__btn').on('click', function(){
                $(this).next().slideToggle(500); 
             });
})



window.addEventListener('DOMContentLoaded',() => {
        const menu = document.querySelector(".menu");
        const mobile = document.querySelector(".nav-icon");
        const itemDropdown = document.querySelector('.menu__list-dropdown');
        const menuVertical = document.querySelector('.menu-vertical');
        const verticalArrows = document.querySelector('.menu-vertical__arrows');
        // const test = calcScroll();
      
        mobile.addEventListener("click", function () {
         document.body.classList.toggle('mobile-class');
          this.classList.toggle("nav-icon--active");
          menu.classList.toggle("nav--active");
          document.body.classList.toggle('overflow');
        //   document.body.style.marginRight = `${test}px`;
        document.body.classList.toggle('w');
        });
       
       

        itemDropdown.addEventListener('click',() => {
                menuVertical.classList.toggle('opacity-dropdown');
                mobile.classList.toggle('nav-icon-zindex');
        })
        verticalArrows.addEventListener('click', () => {
                menuVertical.classList.remove('opacity-dropdown');
                mobile.classList.remove('nav-icon-zindex');
        })


        // function calcScroll(){
        // let div = document.createElement('div');
        // div.style.width = '50px';
        // div.style.height = '50px';
        // div.style.overflowY = 'scroll';
        // div.style.visibility = 'hidden';
        
        // document.body.append(div);

        // let scrollWidth = div.offsetWidth - div.clientWidth;
        
        // div.remove();
        
        // return scrollWidth;
        // }

        const newsHidden = document.querySelector('.news-hidden');
        const newsBtn = document.querySelector('.news__btn');
        if(newsBtn){
                newsBtn.addEventListener('click', () => {
                        newsHidden.classList.add('news-show');
                })
        }
       


        const accardionBtn = document.querySelectorAll('.questions-accardion__btn');
                accardionBtn.forEach(item => {
                item.addEventListener('click', () => {
                        item.classList.toggle('open')
                });
        });



})