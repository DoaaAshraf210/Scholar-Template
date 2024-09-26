// global fun
function handleActive(arr, element) {
  arr.forEach((el) => el.classList.remove("active"));
  element.classList.add("active");
}
//--------------------public-----------------------
let sections = Array.from(document.getElementsByTagName("section"));
window.onscroll = function () {
  if (window.scrollY >= 600) {
    document.querySelector("header").classList.add("fixed");
  } else {
    document.querySelector("header").classList.remove("fixed");
  }
  sections.forEach((sec) => {
    if (window.scrollY >= sec.offsetTop) {
      links.forEach((a) => {
        a.classList.remove("active");
      });
      links.forEach((a) => {
        if (sec.className == a.dataset.sec.slice(1)) {
          a.classList.add("active");
        }
      });
    }
  });
};
//----------------header------------
let links = document.querySelectorAll("header .container .right ul li a");
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    handleActive(links, e.target);

    document.querySelector(e.target.dataset.sec).scrollIntoView({
      behavior: "smooth",
    });
  });
});

let menu = document.querySelector("header .toggle-menu");

menu.addEventListener("click", (e) => {
  e.stopPropagation();
  menu.classList.toggle("open");
});
//----------------------landing---------------
const swiper1 = new Swiper(".landing .swiper", {
  loop: true,
  navigation: {
    nextEl: ".landing .swiper-button-next",
    prevEl: ".landing .swiper-button-prev",
  },

  scrollbar: {
    el: ".landing .swiper-scrollbar",
  },
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    200: {
      slidesPerView: 1,
      spaceBetween: 80,
    },
    575: {
      slidesPerView: 1,
      spaceBetween: 100,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 100,
    },
  },
 
});

//-------------------about-----------------------
let labels = document.querySelectorAll(
  ".about .container .row .drop-down ul li>div label"
);
let dropDownLis = document.querySelectorAll(
  ".about .container .row .drop-down ul li"
);
labels.forEach((label) =>
  label.addEventListener("click", (e) => {
    handleActive(
      dropDownLis,
      e.target.parentElement.parentElement.parentElement
    );
  })
);
//---------------------.latest-courses --------------------------------

let iso = new Isotope(".latest-courses .container .content", {
  itemSelector: ".latest-courses .item",
  layoutMode: "fitRows",
});

let filterElement = document.querySelector(".latest-courses ul");
let coursesLis = document.querySelectorAll(
  ".latest-courses .container ul li a"
);
filterElement.addEventListener("click", function (event) {
  if (!matchesSelector(event.target, "a")) return;
  event.preventDefault();
  let filterValue = event.target.getAttribute("data-tech");
  iso.arrange({ filter: filterValue });
  handleActive(coursesLis, event.target);
});
//--------------------testimonials----------------
const swiper2 = new Swiper(".testimonials .swiper", {
  loop: true,
  navigation: {
    nextEl: ".testimonials .swiper-button-next",
    prevEl: ".testimonials .swiper-button-prev",
  },

  scrollbar: {
    el: ".testimonials .swiper-scrollbar",
  },
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    200: {
      slidesPerView: 1,
      spaceBetween: 80,
    },
    575: {
      slidesPerView: 1,
      spaceBetween: 100,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 100,
    },
  },
  autoplay: {
    delay: 4000,
  },
});
