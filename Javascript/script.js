document.addEventListener('visibilitychange', function () {
  const favicon = document.getElementById("icon");
  const logoPath = "../PortFolio/Img/Mcircleperfect.png";
  
  if (document.visibilityState === "visible") {
      document.title = "Portfolio | Mohammed Vahith";
      if (favicon) favicon.setAttribute("href", logoPath);
  } else {
      document.title = "Come Back To Portfolio";
      if (favicon) favicon.setAttribute("href", logoPath);
  }
});

// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
  strings: ["ml engineer","ai engineer","frontend development", "backend development", "web designing","web development"],
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