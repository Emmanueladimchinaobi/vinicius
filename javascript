const menubtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");


menubtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  menubtn.classList.toggle ("rotate-90");
});
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click' , () => {
       menu.classList.toggle('hidden');
    })
  });
const botiquebtn = document.getElementById("botique-btn");
const botiquemenu = document.getElementById("botique-menu");
const arrow = document.getElementById("arrow");
botiquebtn.addEventListener("click", () => {
  botiquemenu.classList.toggle("hidden");
  arrow.classList.toggle("rotate-180")
});
const botiquebtn2 = document.getElementById("botique-btn2");
const botiquemenu2 = document.getElementById("botique-menu2");
const arrow2 = document.getElementById("arrow2");
botiquebtn2.addEventListener("click", () => {
  botiquemenu2.classList.toggle("hidden");
  arrow2.classList.toggle("rotate-180")
});
 document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click' , () => {
       botiquemenu2.classList.toggle('hidden');
    })
  });

const botiquebtn3 = document.getElementById("botique-btn3");
const botiquemenu3 = document.getElementById("botique-menu3");
const arrow3 = document.getElementById("arrow3");
botiquebtn3.addEventListener("click", () => {
  botiquemenu3.classList.toggle("hidden");
  arrow3.classList.toggle("rotate-180")
});
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click' , () => {
       botiquemenu3.classList.toggle('hidden');
    })
  });

   