const boton = document.getElementById("modobtn");
boton.addEventListener("click",function(){
    document.body.classList.toggle("oscuro");
    if(document.body.classList.contains("oscuro")){
        boton.textContent = "🌝 Modo claro";
    } else {
        boton.textContent = "🌚 Modo Oscuro";
    }
});
const serviciosbtn = document.getElementById("serviciosbtn");
const cerrarbtn = document.getElementById("cerrarbtn");
const mensaje = document.getElementById("mensaje");

serviciosbtn.addEventListener("click", function() {
    mensaje.style.display = "block";
});

cerrarbtn.addEventListener("click", function() {
    mensaje.style.display = "none";
});