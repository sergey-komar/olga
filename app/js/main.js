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
                        slidesToScroll: 1
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

        $('.questions-accardion__btn--one').on('click', function(){
                $(this).next().slideToggle(500); 
        });
        $('.questions-accardion__btn--two').on('click', function(){
                $(this).next().slideToggle(500); 
        });
        $('.questions-accardion__btn--three').on('click', function(){
                $(this).next().slideToggle(500); 
        });
        $('.questions-accardion__btn--four').on('click', function(){
                $(this).next().slideToggle(500); 
        });
        $('.questions-accardion__btn--fife').on('click', function(){
                $(this).next().slideToggle(500); 
        });
        $('.questions-accardion__btn--six').on('click', function(){
                $(this).next().slideToggle(500); 
        });


        //product
      $('.product-slide__thumb').slick({
        asNavFor: '.product-slide__big',
        focusOnSelect: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable: false,
        arrows: false,
        
        });

        $('.product-slide__big').slick({
                asNavFor: '.product-slide__thumb',
                draggable: false,
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




        $(".filter-price__input").ionRangeSlider({
                type: "double",
                onStart: function (data){
                  $('.filter-price__from').text(data.from);
                  $('.filter-price__to').text(data.to);
                },
                onChange: function (data) {
                $('.filter-price__from').text(data.from);
                $('.filter-price__to').text(data.to);
              
              },
              
              });
              

        //      ЗАМЕНА ТЕКСТА ПРИ КЛИКЕ В КНОПКЕ
              $('.aside__brend-btn').click(function()
              {
                $('strong').toggle();
              });


})



window.addEventListener('DOMContentLoaded',() => {
        const menu = document.querySelector(".menu");
        const mobile = document.querySelector(".nav-icon");
        const itemDropdown = document.querySelector('.menu__list-dropdown');
        const menuVertical = document.querySelector('.menu-vertical');
        const verticalArrows = document.querySelector('.menu-vertical__arrows');
       
      
        mobile.addEventListener("click", function () {
         document.body.classList.toggle('mobile-class');
          this.classList.toggle("nav-icon--active");
          menu.classList.toggle("nav--active");
          document.body.classList.toggle('overflow');
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


        //Кнопка показать ещё в новостях
        const newsHidden = document.querySelector('.news-hidden');
        const newsBtn = document.querySelector('.news__btn');
        if(newsBtn){
                newsBtn.addEventListener('click', () => {
                        newsHidden.classList.add('news-show');
                })
        }
       

        //Кнопка показать ещё в сайдбаре
        const asideBtn = document.querySelector('.aside__brend-btn');
        const asideHidden = document.querySelector('.aside__brend-hidden');
        if(asideBtn){
        asideBtn.addEventListener('click', () => {
                asideHidden.classList.toggle('aside-show');
                asideBtn.classList.toggle('open-arrow');
                })
        }

        // добавление класса в кнопке в ваккардеоне
        const accardionBtn = document.querySelectorAll('.questions-accardion__btn');
                accardionBtn.forEach(item => {
                item.addEventListener('click', () => {
                        item.classList.toggle('open')
                });
        });

        //табы
        const tabsItem = document.querySelector('.tabs__top');
        const tabsItemBtn = document.querySelectorAll('.tabs__item-btn');
        const tabsContent = document.querySelectorAll('.tabs__content');

        function tabsHide(){
        tabsContent.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show');
        });

        tabsItemBtn.forEach(btn =>{
        btn.classList.remove('active-tabs');
        })
        }
        function tabsShow(i){
        tabsContent[i].classList.add('show');
        tabsContent[i].classList.remove('hide');
        tabsItemBtn[i].classList.add('active-tabs');
        }

        if(tabsItemBtn && tabsItem && tabsContent){
        tabsItem.addEventListener('click', (e)=>{
        const target = e.target;

        if(target && target.classList.contains('tabs__item-btn')){
        tabsItemBtn.forEach((item, i)=>{
                if(target == item){
                tabsHide();
                tabsShow(i);
                }
                
        })

        }
        })

        tabsHide();
        tabsShow(0);

        }

        //кнопка фильтр
        const searchBtn = document.querySelector('.search__wrapper-filter');
        const aside = document.querySelector('.aside');

        searchBtn.addEventListener('click', ()  => {
                aside.classList.toggle('aside-show');
        })


        const btnOne = document.querySelectorAll('.questions-accardion__btn--one');
              
                btnOne.forEach(item => {
                item.addEventListener('click', () => {
                        item.classList.toggle('open-one')
                });
        });
        const btnTwo = document.querySelectorAll('.questions-accardion__btn--two');
              
                btnTwo.forEach(item => {
                item.addEventListener('click', () => {
                        item.classList.toggle('open-two')
                });
        });
        const btnThree = document.querySelectorAll('.questions-accardion__btn--three');
              
                btnThree.forEach(item => {
                item.addEventListener('click', () => {
                        item.classList.toggle('open-three')
                });
        });
        const btnFour = document.querySelectorAll('.questions-accardion__btn--four');
              
                btnFour.forEach(item => {
                item.addEventListener('click', () => {
                        item.classList.toggle('open-four')
                });
        });
        const btnFife = document.querySelectorAll('.questions-accardion__btn--fife');
              
                btnFife.forEach(item => {
                item.addEventListener('click', () => {
                        item.classList.toggle('open-fife')
                });
        });
        const btnSix = document.querySelectorAll('.questions-accardion__btn--six');
              
                btnSix.forEach(item => {
                item.addEventListener('click', () => {
                        item.classList.toggle('open-six')
                });
        });
                

})