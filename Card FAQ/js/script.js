function mostraResposta(id) {
    var resposta = document.getElementById(id);
    var pergunta = resposta.previousElementSibling;

    if (resposta.style.display === "none") {
        resposta.style.display = "block";
        pergunta.classList.add("faq-item--selected")

    } else {
      resposta.style.display = "none";
      pergunta.classList.remove("faq-item--selected")
    }
}