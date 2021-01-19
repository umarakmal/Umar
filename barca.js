const hamburger = document.querySelector(' header nav .hamburger ');
const mobile_menu = document.querySelector(' header nav ul ');
const menu_item = document.querySelectorAll('header nav ul li a ')
const header = document.querySelector(' header ');

hamburger.addEventListener('click', ()=>{
  hamburger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});

menu_item.forEach(item=>{
  item.addEventListener('click',() =>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
  })
})
