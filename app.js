function criaCartao(categoria, pergunta, resposta){
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'



    cartao.innerHTML = `
    
    <article class="cartao">
        <div class="cartao__conteudo">
<h3 class="programacao">Biologia</h3>
<div class="cartao__conteudo__pergunta">
   <p> Normalmente, quantos litros de sangue uma pessoa tem?</p>
</div>
<div class="cartao__conteudo__resposta">
 <p>  Tem entre 4 a 6 litros.</p> 
</div>
</div>

    
    `
    container.appendChild(cartao)
}