// FUNCTION THAT RETURNS PAGE WIDTH
function docWidth(){
        return(document.body.clientWidth)
}

// DROPDOWN MENU
document.body.onload = function () {
        $('.dropdown-menu').slideToggle(0)
        $('.dropdown-menu').slideUp(0)
    }
window.addEventListener("resize", function(){
        $('.dropdown-menu').hide(0);
})

$('.dropdown-toggle').click(function () {
        if(docWidth()<992){
                $(this).next('.dropdown-menu').slideToggle(300);
        }
});

$('.dropdown-toggle').focusout(function () {
        if(docWidth()<992){
                $(this).next('.dropdown-toggle').css("color","rgba(255, 255, 255, 0.7)")
                $(this).next('.dropdown-menu').slideUp(300);
        }
        
});  

$('.dropdown').hover(function () {

        if(docWidth()>=992){
                $(this).children('.dropdown-menu').fadeIn(300);
        }
});

$('.dropdown-menu').hover(function () {
        $(this).siblings().css("color","white")
});

$('.dropdown').mouseleave(function () {
        $(this).children('.dropdown-toggle').css("color","rgba(255, 255, 255, 0.7)")
        if(docWidth()>=992){
                
                $(this).children('.dropdown-menu').fadeOut(0);
        }
});



// CHANGE OF COLOR NAV-LINK
$('.nav-link').hover(function () {
        $(this).css("color", "white")
});
$('.nav-link').mouseleave(function () {
        $(this).css("color","rgba(255, 255, 255, 0.7)")

});


// When the user scrolls the page, execute Sticky_Menu
window.onscroll = function() {Sticky_Menu()};

// Get the navbar and content
var navbar = document.getElementById("navbar-sticky");
var content = document.getElementById("content-id")
// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function Sticky_Menu() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    content.classList.add("content")

  } else {
    navbar.classList.remove("sticky");
    content.classList.remove("content");
  }
}

//ANIMATION FOR CONTENT WHEN IT APPEARS
squares = document.querySelectorAll('.square')
const observer = new IntersectionObserver(entries => {
        // Loop over the entries
        entries.forEach(entry => {
          // If the element is visible
          if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add('square-animation');
          }
        });
      });

for (var square of squares){
        observer.observe(square);
}
