 const menu = document.querySelector('.menu');
                const menuSection = menu.querySelector('.menu-section');
                const menuArrow = menu.querySelector('.menu-mobile-arrow');
                const menuClosed = menu.querySelector('.menu-mobile-close');
                const menuToggle = document.querySelector('.menu-mobile-toggle');
                const menuOverlay = document.querySelector('.overlay');
                let subMenu;
                
                menuSection.addEventListener('click', (e) => {
                    if (!menu.classList.contains('active')) {
                        return;
                    }
                    if (e.target.closest('.menu-item-has-children')) {
                        const hasChildren = e.target.closest('.menu-item-has-children');
                        showSubMenu(hasChildren);
                    }
                });
                
                menuArrow.addEventListener('click', () => {
                    hideSubMenu();
                });
                
                menuToggle.addEventListener('click', () => {
                    toggleMenu();
                });
                
                menuClosed.addEventListener('click', () => {
                    toggleMenu();
                });
                
                menuOverlay.addEventListener('click', () => {
                    toggleMenu();
                });
                
                // Show & Hide Toggle Menu Function
                function toggleMenu() {
                    menu.classList.toggle('active');
                    menuOverlay.classList.toggle('active');
                }
                
                // Show the Mobile Side Menu Function
                function showSubMenu(hasChildren) {
                    subMenu = hasChildren.querySelector('.menu-subs');
                    subMenu.classList.add('active');
                    subMenu.style.animation = 'slideLeft 0.5s ease forwards';
                    const menuTitle = hasChildren.querySelector('i').parentNode.childNodes[0].textContent;
                    menu.querySelector('.menu-mobile-title').innerHTML = menuTitle;
                    menu.querySelector('.menu-mobile-header').classList.add('active');
                }
                
                // Hide the Mobile Side Menu Function
                function hideSubMenu() {
                    subMenu.style.animation = 'slideRight 0.5s ease forwards';
                    setTimeout(() => {
                        subMenu.classList.remove('active');
                    }, 300);
                
                    menu.querySelector('.menu-mobile-title').innerHTML = '';
                    menu.querySelector('.menu-mobile-header').classList.remove('active');
                }
                
                // Windows Screen Resizes Function
                window.onresize = function () {
                    if (this.innerWidth > 991) {
                        if (menu.classList.contains('active')) {
                            toggleMenu();
                        }
                    }
                };
                
                // 
                
                const sections = document.querySelectorAll("section");
                const navLi = document.querySelectorAll(".nav-lo .container ul li");
                window.addEventListener("scroll", () => {
                let current = "";
                sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
                }
                });
                
                navLi.forEach((li) => {
                li.classList.remove("active");
                if (li.classList.contains(current)) {
                li.classList.add("active");
                }
                });
                });
                AOS.init();
                var owl = $('.screenshot_slider').owlCarousel({
                loop: true,
                responsiveClass: true,
                nav: true,
                margin: 0,    
                autoplayTimeout: 4000,
                smartSpeed: 400,
                center: true,
                navText: ['&#8592;', '&#8594;'],
                responsive: {
                0: {
                items: 1,
                },
                600: {
                items: 5
                },
                1200: {
                items: 5
                }
                }
                });
                
                /****************************/
                
                jQuery(document.documentElement).keydown(function (event) {    
                
                // var owl = jQuery("#carousel");
                
                // handle cursor keys
                if (event.keyCode == 37) {
                // go left
                owl.trigger('prev.owl.carousel', [400]);
                //owl.trigger('owl.prev');
                } else if (event.keyCode == 39) {
                // go right
                owl.trigger('next.owl.carousel', [400]);
                //owl.trigger('owl.next');
                }
                
                });
                
                $( document ).ready(function() {
                // if ($(".center" == false)){
                //     $('.para').css('display','none');
                //     alert(1);
                // }
                // else{
                // images/img1.jpeg')
                //      alert(2)
                // }
                });   
                
                $(document).ready(function() {
                var s = skrollr.init();
                })

    $(document)
        .mousemove(function(e) {
        $('.cursor')
            .show()
            .eq(0)
            .css({
            "left": e.pageX,
            "top": e.pageY - $(window).scrollTop()
        });
    });
// $('.cursor').removeClass('hover');
//     $(".vii").mouseenter(function(){
//         $('.cursor').addClass('hover');
//     })
//     .mouseleave(function(){
//         $('.cursor').removeClass('hover');
// });

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 600) {
        //clearHeader, not clearheader - caps H
        $(".social-media-fixed").addClass("fix");
    }
    else{

        $(".social-media-fixed").removeClass("fix");
    }
}); //missing );