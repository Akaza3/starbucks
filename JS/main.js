// SCROLL AND BADGE
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // 배지 숨기기
    gsap.to(badgeEl, .6, {
     opacity: 0,
     display: 'none'  
    });
    // TOP으로 버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0
    });
  } else {
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // TOP으로 버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));

// TOP 으로 버튼 작동
toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});


const fadeEls = document.querySelectorAll ('.visual .fade-in');
fadeEls.forEach (function (fadeEl, index) {
  gsap.to (fadeEl, 1, {
    delay: (index + 1) * .5,
    opacity: 1
  });
});


//new Swiper (선택자,옵션)
new Swiper ('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});
new Swiper ('.promotion .swiper-container', {
  slidesPerView: 3,  //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번슬라이드가 가운데 보이기 
  loop: true,
  autoplay: {
    delay: 3000
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true  // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl : '.promotion .swiper-prev',
    nextEl : '.promotion .swiper-next'
  } 
});

new Swiper ('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,  // 한번에 보여지는 슬라이드갯수
  navigation: {
    prevEl: '.awards .swiper-prev', 
    nextEl: '.awards .swiper-next'
  }
})


// TOGGLE 동작 
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion  //! 를 붙이면 반대로 적용 (true => false)
  if (isHidePromotion) {
    promotionEl.classList.add('hide');
  } else {
    promotionEl.classList.remove('hide');
  }
});


// RANDOM
function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
};

// FLOATING 위아래 MOVING 애니메이션
function floatingObject(selector, delay, size) {
  //gsap.to(요소, 시간, 옵션)
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1, // -1 = 무한
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay)
  });
};

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


// SCROLL MAGIC
const spyEl = document.querySelectorAll('section.scroll-spy');
spyEl.forEach( function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,  // 보여짐 여부를 감시할 요소
      triggerHook: .8   // 시작 위치 (각 section 가장 위가 0 가장 아래가 1)
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

