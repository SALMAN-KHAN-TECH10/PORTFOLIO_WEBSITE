const hamburger= document.querySelector(".hamburger");
const mobileMenu=document.querySelector(".nav-list ul");
const MenuItem=document.querySelectorAll(".nav-list ul li a");
const header=document.querySelector(".header");

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});

// Close mobile menu when a link is clicked
MenuItem.forEach((Item)=>{
    Item.addEventListener("click",()=>{
        hamburger.classList.remove("active");
        mobileMenu.classList.remove("active");
    });
});

// Updated scroll event handler for performance
document.addEventListener("scroll",()=>{
      var scroll_position=window.scrollY;
      if(scroll_position > 250){
        // Add the 'scrolled' class
        header.classList.add('scrolled');
      }
      else{
        // Remove the 'scrolled' class
        header.classList.remove('scrolled');
      }
});