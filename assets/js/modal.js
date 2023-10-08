window.onload = function() {
    setTimeout(function() {
      var modal = document.getElementById("modal");
      modal.style.display = "block";
  
      var closeModalBtn = document.getElementById("closeModalBtn");
      closeModalBtn.onclick = function() {
        modal.style.display = "none";
      };
    }, 1600); // Exibe a janela modal após 1 segundo (1000 milissegundos)
  };