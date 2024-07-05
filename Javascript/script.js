document.addEventListener('visibilitychange', function () {
  if (document.visibilityState === "visible") {
      document.title = "Portfolio | Mohammed Vahith";
      document.getElementById("icon").setAttribute("href", "../PortFolio/Img/logo.png");
  } else {
      document.title = "Come Back To Portfolio";
      document.getElementById("icon").setAttribute("href", "../PortFolio/Img/logo.png");
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
window.onload = function() {
  const imageElement = document.querySelector('.hoverImage');
  if (imageElement) {
      const handleMouseMove = (e) => {
          let rect = imageElement.getBoundingClientRect();
          let x = e.clientX - rect.left;
          let y = e.clientY - rect.top;

          let dx = (x - rect.width / 2) / (rect.width / 2);
          let dy = (y - rect.height / 2) / (rect.height / 2);

          imageElement.style.transform = `perspective(500px) rotateY(${dx * 5}deg) rotateX(${-dy * 5}deg)`;
      };

      const handleMouseLeave = () => {
          imageElement.style.transform = "";
      };

      imageElement.addEventListener('mousemove', handleMouseMove);
      imageElement.addEventListener('mouseleave', handleMouseLeave);
  }
}
