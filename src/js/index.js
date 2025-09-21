const btnTopo = document.querySelector(".btn-topo");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) { // aparece depois de descer 300px
      btnTopo.style.display = "block";
    } else {
      btnTopo.style.display = "none";
    }
  });

