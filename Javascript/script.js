document.addEventListener('visibilitychange', function () {
  if (document.visibilityState === "visible") {
      document.title = "Portfolio | Mohammed Vahith";
      document.getElementById("icon").setAttribute("href", "../PortFolio/Img/logo.png");
  } else {
      document.title = "Come Back To Portfolio";
      document.getElementById("icon").setAttribute("href", "../PortFolio/Img/logo.png");
  }
});
