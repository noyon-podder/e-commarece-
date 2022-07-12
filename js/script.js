//copy menu function 
function copyMenu(){
// copy header 
var dptCat = document.querySelector(".dpt-cat");
var departments = document.querySelector(".departments");
departments.innerHTML = dptCat.innerHTML;

// copy nav bar 
var headerNav = document.querySelector(".header-nav nav");
var navbar = document.querySelector(".off-canvas nav");
navbar.innerHTML = headerNav.innerHTML;

// header top 
var headerTop = document.querySelector(".header-top .wrapper");
var theTopNav = document.querySelector(".off-canvas .theTop-nav");
theTopNav.innerHTML = headerTop.innerHTML;
}
copyMenu();
//show mobile menu
const menuButton = document.querySelector('.trigger');
const addClass = document.querySelector('.site');
const closeButton = document.querySelector('.t-close');

menuButton.addEventListener("click", function (){
    addClass.classList.add("showMenu");
});

closeButton.addEventListener("click", function (){
    closeButton.classList.remove("showMenu");
})

// show sub menu on mobile 
const submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach(function(menu){
    menu.addEventListener("click", toggle);
})

function toggle(e){
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove("expand") : null);
    if(this.closest('.has-child').classList != 'expand'){
        this.closest('.has-child').classList.toggle('expand');
    }
}