import ui from "./ui.js"
import api from "./api.js"

async function manipularSubmissaoFormulario(event) {
    event.preventDefault()
    console.log('oi')
    const id = document.getElementById("pensamento-id").value
    const conteudo = document.getElementById("pensamento-conteudo").value
    const autoria = document.getElementById("pensamento-autoria").value
    console.log('ola')
    try {
        await api.salvarPensamento({ conteudo, autoria })
        ui.renderizarPensamentos()
    }
    catch {
        alert("Erro ao salvar pensamento")
    }

    function manipularCancelamento() {
        ui.limparFormulario();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    ui.renderizarPensamentos()

    const formularioPensamento = document.getElementById("pensamento-form")
    const btnCancelar = document.getElementById("botao-cancelar")

    console.log('hi')
    formularioPensamento.addEventListener("submit", manipularSubmissaoFormulario)
    btnCancelar.addEventListener("click", manipularCancelamento)

})
