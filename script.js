"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// selecting element
const header = document.querySelector(".header");
//Creating and Inserting elements

const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML = `We use Cookies for improved functionality and
analytics. <button class ="btn btn--close-cookie">Got it!</button>`;

// header.prepend(message);
// header.append(message); // live element in dom cannot be at multiple places

// dom element is unique , can exist at one place at a time
// how to insert multiple copies of same element
// need to create copy

// header.append(message.cloneNode(true));

header.append(message);

// Delete elements
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    message.remove();
    //message.parentElement.removeChild(message);
    // moving up and down in dom tree like selecting parent element
    // is called dom traversing
  });

// styles ; will be set as inline style
message.style.backgroundColor = "#37383D";
message.style.width = "120%";

//console.log(message.style.height); will not get it
console.log(message.style.backgroundColor);
console.log(typeof getComputedStyle(message).height);
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + "px";

// FOR CSS CUSTOM PROPERTIES , css variables
// can chnage them
// can chnage style of page by setting one property

//document.documentElement.style.setProperty("--color-primary", "orangered");

// Attributes
// src, alt , class, id they all are attributes
const logo = document.querySelector(".nav__logo");
console.log(logo);
console.log(logo.alt); // on images we have alt and src attributes
console.log(logo.src);
console.log(logo.className);

logo.alt = "Beautiful minimalist logo";

// Non standard
// now if we have property 'designer' , which is not a standard one
// console.log(logo.designer)  // undefined
console.log(logo.getAttribute("designer"));
logo.setAttribute("company", "Bankist");

console.log(logo.src); // absolute url
console.log(logo.getAttribute("src")); // relative url (relative to folder)

const link = document.querySelector(".twitter-link");
console.log(link.href); // absolute
console.log(link.getAttribute("href")); // absolute

// Smooth Scrolling
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function () {
  const s1cords = section1.getBoundingClientRect();
  console.log(s1cords);

  // console.log(`Current scroll (X/Y) `, window.pageXOffset, window.pageXOffset);

  // console.log(
  //   "height/width viewport",
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  // scrolling
  //window.scrollTo(s1cords.left, s1cords.top); // relative to viewport not document

  // current scroll + section 1 start  to the viewport

  // window.scrollTo(
  //   s1cords.left + window.pageXOffset,
  //   s1cords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1cords.left + window.pageXOffset,
  //   right: s1cords.top + window.pageYOffset,
  //   behavior: "smooth",
  // });
  section1.scrollIntoView({ behavior: "smooth" });
});
