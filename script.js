alert("cadastre-se para que receba descontos.");


















const produtos = [ 
     "pão de forma",
     "pão françês",
   "manteiga",
     "queijo",
     "mortadela",
     "geleia",
     "nescau",
     "biscoito maizena",
 "biscoito cream cracker",
 " Brahma lata 450ml" ,
 "Brahma garrafa 1L",
 "1L itaipava lata",
 "taipava garrafa 1.5L",
 "1.5L skol lata 450ml",
 "skol garrafa 1L",
 "Ice vodka 500ml",
 "café melita 250g", 
 "café 3 corações 250g",
 "café pinpinela 250g",
 "café evolutivo 250g", 
 "café pilão 500g", 
 "café pinpinela 500g",
 "café 3 corações 500g",
 "café evolutivo 500g", 
 "biscoito maizena vitarela",
 "250g biscoito maizena vitarela", 
 "500g chettos sabor queijo",
 "200g doritos sabor ketchup 250g"
]
  









  
  function sugerirProdutos() {
    console.log("ENTREI NA FUNÇÃO");
    const input = document.getElementById("buscar").value.toLowerCase();
    const sugestoes = document.getElementById("sugestoes");

    sugestoes.innerHTML = "";

    if (input === "") return;

    for (let produto of produtos) {
      const nomeProduto = produto.toLowerCase();
    
      if (nomeProduto.includes(input)) {
        const p = document.createElement("p");
        p.textContent = produto;

        // clicar na sugestão coloca no input
        p.onclick = function () {
          document.getElementById("buscar").value = produto;
          sugestoes.innerHTML = "";
        };

        sugestoes.appendChild(p);
      }
    }
  }

  document
  .getElementById("buscar")
  .addEventListener("input", sugerirProdutos);  

  


















function buscarproduto() {
   



let total = 0;

const botoes = document.querySelectorAll(".adicionar");

botoes.forEach(botao => {
  botao.addEventListener("click", function () {

    const cards = this.closest(".cards");

    const nome = cards.dataset.nome;
    const preco = Number(cards .dataset.preco);

    adicionarProduto(nome, preco);
  });
});
}
function adicionarProduto(nome, preco) {
  const carrinho = document.getElementById("carrinho");

  const item = document.createElement("p");
  item.textContent = `${nome} - R$ ${preco.toFixed(2)}`;

  carrinho.appendChild(item);

  total += preco;

  document.getElementById("total").textContent =
    `Total: R$ ${total.toFixed(2)}`;
}


function cadastrar() {
    document.getElementById("modal").style.display = "flex";
}

function fechar() {
    document.getElementById("modal").style.display = "none";
}




  