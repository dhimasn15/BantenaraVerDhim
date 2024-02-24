//active class

const navbarNav = document.querySelector('.navbar-nav');
 document.querySelector('#humberger').onclick=()=>{
      navbarNav.classList.toggle('active')
 };

 const humberger = document.querySelector('#humberger');
 document.addEventListener('click',function(e) {
     if(!humberger.contains(e.target)&& !navbarNav.contains(e.target)){
          navbarNav.classList.remove('active');
     }
     
 });

 //navbar efek
 var lastScrollTop = 0;
 var navbar = document.getElementById("navbar");

 window.addEventListener("scroll", function(){
     var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

     // Atur transparansi navbar saat berada di paling atas atau sebelum di-scroll
     if (scrollTop <= 0) {
          navbar.classList.remove("active");
         navbar.style.color = "white !important";
     } else {
          navbar.classList.add("active");
          navbar.style.color = "black";
     }

     // Atur posisi top navbar saat scroll
     if (scrollTop > lastScrollTop) {
         navbar.style.top = "-80px"; // Sembunyikan navbar saat scroll ke bawah
     } else {
         navbar.style.top = "0"; // Tampilkan kembali navbar saat scroll ke atas
     }

     lastScrollTop = scrollTop;
 });
 navbar.addEventListener("mouseenter", function() {
     navbar.classList.add("active");
     navbar.style.color = "black"; // Warna teks navbar saat di-hover
 });

 // Hapus kelas active saat hover dihilangkan
 navbar.addEventListener("mouseleave", function() {
     if (lastScrollTop <= 0) {
         navbar.classList.remove("active");
         navbar.style.color = "white"; // Warna teks navbar saat belum di-hover
     }
 });

//  container

  document.addEventListener("DOMContentLoaded", function () {
    var containerPanel = document.querySelector(".container-panel");

    window.addEventListener("scroll", function () {
      if (isScrolledIntoView(containerPanel)) {
        containerPanel.classList.add("visible");
      }
    });

    function isScrolledIntoView(element) {
      var rect = element.getBoundingClientRect();
      var elemTop = rect.top;
      var elemBottom = rect.bottom;

      // Only completely visible elements return true
      var isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
      return isVisible;
    }
  });


