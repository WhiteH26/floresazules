onload = () => {
  document.body.classList.remove("container");

  const letras = document.getElementById("letras")

  setTimeout(function() {
    letras.classList.add("hide");
    
}, 3000);
}
