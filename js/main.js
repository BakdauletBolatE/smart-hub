let mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    autoHeight: true,
    
    slidesPerView: 3,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })

  const burger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");
  const body = document.querySelector("body");
  const toggleItem = document.querySelectorAll(".toglle-item");

  burger.addEventListener('click',e=>{
    
    if (menu.classList.contains('mob-header--active')) {
      menu.classList.remove('mob-header--active');
      body.classList.remove('hide');

    }
    else{
      menu.classList.add('mob-header--active');
      body.classList.add('hide');
    }
  });

  toggleItem.forEach(tI=>{
    tI.addEventListener('click',tIC=>{
      parent = tIC.target.parentElement.nextElementSibling;
      if (parent.classList.contains('toglle-item__list')){
        if (parent.classList.contains('toglle-item__list--active')){
          tIC.target.classList.remove('hero__description-text--active');
          parent.classList.remove('toglle-item__list--active');
        }
        else{
          tIC.target.classList.add('hero__description-text--active');
          parent.classList.add('toglle-item__list--active');
        }
      }
      else{
        console.log("error");
      }
      
    });
  });
