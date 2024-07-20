$(function () {
    $('.slider-home').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        dots: true
     });

     $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1
     });

     $('.slider-stock__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1
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
})



window.addEventListener('DOMContentLoaded',() => {
        const mobile = document.querySelector(".header-box__icon");
      
        mobile.addEventListener("click", function () {
          this.classList.toggle("header-box__icon--active");
        
        });
})