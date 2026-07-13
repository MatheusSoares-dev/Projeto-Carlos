const telefone = '5531973565413'

function servico(botao) {
    const servico = botao.id
    const mensagem = `Olá, estava interessado no serviço de ${servico}, podemos fazer um orçamento?`

    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`
    window.open(url,"_blank")
}

function enviarWhats(event) {
    event.preventDefault()

    const nome = document.getElementById('nome').value;
    const msg = document.getElementById('mensagem').value;

    const text = `Olá tudo bom? meu nome e ${nome}, ${msg}`
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(text)}`
    window.open(url,"_blank")
}