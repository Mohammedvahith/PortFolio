document.querySelector('a[href="#home"]').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default anchor click behavior
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});

// Disable developer mode
document.onkeydown = function (e) {
  // F12 key
  if (e.code === 'F12') {
      e.preventDefault();
      return false;
  }
  // Ctrl + Shift + I
  if (e.ctrlKey && e.shiftKey && e.code === 'KeyI') {
      e.preventDefault();
      return false;
  }
  // Ctrl + Shift + C
  if (e.ctrlKey && e.shiftKey && e.code === 'KeyC') {
      e.preventDefault();
      return false;
  }
  // Ctrl + Shift + J
  if (e.ctrlKey && e.shiftKey && e.code === 'KeyJ') {
      e.preventDefault();
      return false;
  }
  // Ctrl + U
  if (e.ctrlKey && e.code === 'KeyU') {
      e.preventDefault();
      return false;
  }
};

document.addEventListener('visibilitychange',
  function () {
      if (document.visibilityState === "visible") {
          document.title = "Portfolio | Mohammed Vahith";
          $("#favicon").attr("href", "Img/Mcircleperfect.ico");
      }
      else {
          document.title = "Come Back To Portfolio";
          $("#favicon").attr("href", "Img/Mcircleperfect.ico");
      }
  });

window.onload = function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('nav a');
  window.addEventListener('scroll', function() {
    let top = window.scrollY + 200;
    sections.forEach(section => {
      let offset = section.offsetTop;
      let height = section.offsetHeight;
      let id = section.getAttribute('id');
      if (top >= offset && top < offset + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
        });
        document.querySelector('nav a[href*=' + id + ']').classList.add('active');
      }
    });
  });

// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
  strings: ["ml engineer", "ai engineer", "frontend development", "backend development", "web designing", "web development"],
  loop: true,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 500,
});
// <!-- typed js effect ends -->

// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 15,
});
// <!-- tilt js effect ends --> 

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 1000,
  reset: true
});

/* SCROLL HOME */
srtop.reveal('.banner .content h1', { delay: 200 });
srtop.reveal('.banner .content .btn', { delay: 200 });

/* SCROLL ABOUT */
srtop.reveal('#about .content h3', { delay: 200 });
srtop.reveal('#about .content .tag', { delay: 200 });
srtop.reveal('#about .content p', { delay: 200 });
srtop.reveal('#about .content .box-container', { delay: 200 });
srtop.reveal('#about .content .btn', { delay: 200 });

/* SCROLL SKILLS */
srtop.reveal('#skills .container', { interval: 200 });
srtop.reveal('#skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION 
srtop.reveal('.education .box', { interval: 200 });
*/
/* SCROLL PROJECTS 
srtop.reveal('.work .box', { interval: 200 });
*/
/* SCROLL EXPERIENCE 
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });
*/
/* SCROLL CONTACT */
srtop.reveal('.contact-form-1', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });
