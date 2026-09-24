const form = document.getElementById("formulario");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const mensagem = document.getElementById("mensagem");


form.addEventListener("submit", function() {
    if (nome.value === "" || email.value === "" || mensagem.value === "") {
       alert("Campo vazio!")
    }
    else if (!email.validity.valid) {
       alert("E-mail inválido!");
   }
    
});