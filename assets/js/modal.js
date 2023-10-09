window.onload = function() {
    setTimeout(function() {
      var modal = document.getElementById("modal");
      modal.style.display = "block";
  
      var closeModalBtn = document.getElementById("closeModalBtn");
      closeModalBtn.onclick = function() {
        modal.style.display = "none";
      };
    }, 2000); // Exibe a janela modal após 1 segundo (1000 milissegundos)
  };


function abrirPDF() {
    window.open("./assets/docs/curriculo.pdf", "_blank");
}