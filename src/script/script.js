// script.js
let carrinho = [];
let total = 0;
const comandaID = gerarComandaID();
const lanches = [
  { nome: "X - Salada", preco: 25, imagem: "x-salada.png", selo: "🏆 Top 1" },
  { nome: "X - Bacon", preco: 28, imagem: "x-bacon.png", selo: "🏆 Top 1" },
  { nome: "X - Burguer", preco: 25, imagem: "x-burguer.png", selo: "🌟 Recomendado" },
  { nome: "X - Frango", preco: 25, imagem: "x-frango.png", selo: "🌟 Recomendado" },
  { nome: "X - Egg", preco: 25, imagem: "x-egg.png" },
  { nome: "X - Calabresa", preco: 28, imagem: "x-calabresa.png" },
  { nome: "X - Calafrango", preco: 28, imagem: "x-calafrango.png" },
  { nome: "X - Bacon Egg", preco: 28, imagem: "x-baconegg.png" },
  { nome: "X - Tudo", preco: 28, imagem: "x-tudo.png" },
  { nome: "X - Duplo", preco: 28, imagem: "x-duplo.png" },
  { nome: "X - Triplo", preco: 28, imagem: "x-triplo.png" },
  { nome: "Hot-Dog Simples", preco: 28, imagem: "hot-dog-simples.png" },
  { nome: "Hot-Dog Duplo", preco: 28, imagem: "hot-dog-duplo.png" }
];

const salgados = [
  { nome: "Coxinha", preco: 3.00, imagem: "salgados/coxinha.png" },
  { nome: "Bolinha de Queijo", preco: 3.00, imagem: "salgados/bolinha-de-queijo.png" },
  { nome: "Maravilha", preco: 3.00, imagem: "salgados/maravilha.png" },
  { nome: "Risole de Carne", preco: 3.00, imagem: "salgados/risole.png" }
];

const adicionais = [
  { nome: "+ Queijo", id: "Queijo Extra", preco: 4.00, imagem: "icones/queijo.png" },
  { nome: "+ Bacon", id: "Bacon Extra", preco: 4.00, imagem: "icones/bacon.png" },
  { nome: "+ Batata Frita", id: "Batata Frita", preco: 4.00, imagem: "icones/batatas-fritas.png" },
  { nome: "+ Molho de Queijo", id: "Molho de Queijo", preco: 4.00, imagem: "icones/molho.png" }
];

const bebidas = [
  { nome: "Coca-Cola Lata", preco: 6.00, imagem: "bebidas/coca-lata.png" },
  { nome: "Coca-Cola 2L", preco: 15.00, imagem: "bebidas/coca2L.png" },
  { nome: "Dolly 350mL", preco: 8.00, imagem: "bebidas/dollyP.png" },
  { nome: "Dolly 2L", preco: 8.00, imagem: "bebidas/dolly2L.png" },
  { nome: "It! 2L", preco: 8.00, imagem: "bebidas/it2L.png" },
  { nome: "Guaraviton", preco: 8.00, imagem: "bebidas/guaraviton.png" }
];


const container = document.getElementById("lista-lanches");

lanches.forEach(lanche => {
  const item = document.createElement("div");
  item.classList.add("item");

  if (lanche.selo) {
    const selo = document.createElement("div");
    selo.classList.add("selo");
    selo.textContent = lanche.selo;
    item.appendChild(selo);
  }

  const img = document.createElement("img");
  img.src = `./src/img/${lanche.imagem}`;
  img.alt = lanche.nome;
  item.appendChild(img);

  const p = document.createElement("p");
  p.innerHTML = `${lanche.nome} <span class="preco">R$ ${lanche.preco.toFixed(2)}</span>`;
  item.appendChild(p);

  const botao = document.createElement("button");
  botao.classList.add("btn-adicionar");
  botao.textContent = "Adicionar";
  botao.onclick = () => adicionarItem(lanche.nome, lanche.preco);
  item.appendChild(botao);

  container.appendChild(item);
});

const containerSalgados = document.getElementById("lista-salgados");

salgados.forEach(salgado => {
  const item = document.createElement("div");
  item.classList.add("item");

  const img = document.createElement("img");
  img.src = `./src/img/${salgado.imagem}`;
  img.alt = salgado.nome;
  item.appendChild(img);

  const p = document.createElement("p");
  p.innerHTML = `${salgado.nome} <span class="preco">R$ ${salgado.preco.toFixed(2)}</span>`;
  item.appendChild(p);

  const botao = document.createElement("button");
  botao.classList.add("btn-adicionar");
  botao.textContent = "Adicionar";
  botao.onclick = () => adicionarItem(salgado.nome, salgado.preco);
  item.appendChild(botao);

  containerSalgados.appendChild(item);
});

const containerAdicionais = document.getElementById("lista-adicionais");

adicionais.forEach(extra => {
  const item = document.createElement("div");
  item.classList.add("item");

  const icone = document.createElement("span");
  icone.classList.add("icone-sabor");

  const img = document.createElement("img");
  img.src = `./src/img/${extra.imagem}`;
  img.alt = extra.nome;
  icone.appendChild(img);
  item.appendChild(icone);

  const p = document.createElement("p");
  p.innerHTML = `${extra.nome} <span class="preco">R$ ${extra.preco.toFixed(2)}</span>`;
  item.appendChild(p);

  const botao = document.createElement("button");
  botao.classList.add("btn-adicionar");
  botao.textContent = "Adicionar";
  botao.onclick = () => adicionarItem(extra.id, extra.preco);
  item.appendChild(botao);

  containerAdicionais.appendChild(item);
});

const containerBebidas = document.getElementById("lista-bebidas");

bebidas.forEach(bebida => {
  const item = document.createElement("div");
  item.classList.add("item");

  const imgWrap = document.createElement("span");
  imgWrap.classList.add("bebidas");

  const img = document.createElement("img");
  img.src = `./src/img/${bebida.imagem}`;
  img.alt = bebida.nome;
  imgWrap.appendChild(img);
  item.appendChild(imgWrap);

  const p = document.createElement("p");
  p.innerHTML = `${bebida.nome} <span class="preco">R$ ${bebida.preco.toFixed(2)}</span>`;
  item.appendChild(p);

  const botao = document.createElement("button");
  botao.classList.add("btn-adicionar");
  botao.textContent = "Adicionar";
  botao.onclick = () => adicionarItem(bebida.nome, bebida.preco);
  item.appendChild(botao);

  containerBebidas.appendChild(item);
});

function adicionarItem(nome, preco) {
    const existente = carrinho.find(item => item.nome ===nome);
    if(existente){
        existente.quantidade +=1;
    } else{
        carrinho.push({ nome, preco, quantidade:1 });
    }

    mostrarPopup(`✅ ${nome} adicionado!`);
    atualizarCarrinho();
}
const checkboxesPastel = document.querySelectorAll('#pastel input[type="checkbox"]');
const precoEl = document.getElementById('preco-pastel');

checkboxesPastel.forEach(cb => {
  cb.addEventListener('change', atualizarPrecoPastel);
});

function atualizarPrecoPastel() {
  const selecionados = document.querySelectorAll('#pastel input[type="checkbox"]:checked');
  const quantidade = selecionados.length;

  const precoBase = 10;
  const adicional = quantidade > 1 ? (quantidade - 1) * 3 : 0;
  const precoFinal = precoBase + adicional;

  precoEl.textContent = `Valor: R$ ${precoFinal.toFixed(2)}`;
}

function adicionarPastel() {
  const selecionados = Array.from(document.querySelectorAll('#pastel input[type="checkbox"]:checked'))
    .map(cb => cb.value);

  if (selecionados.length === 0) {
    alert("Escolha pelo menos um sabor!");
    return;
  }
  const precoBase = 10;
  const adicional = selecionados.length > 1 ? (selecionados.length - 1) * 3 : 0;
  const precoFinal = precoBase + adicional;

  const nome = `Pastel (${selecionados.join(" + ")})`;
  adicionarItem(nome, precoFinal);
}
function mostrarPopup(mensagem) {
  const popup = document.getElementById("popup-alerta");

  if (!popup) return; // evita erro se o elemento não existir

  popup.textContent = mensagem;
  popup.style.opacity = "1";

  setTimeout(() => {
    popup.style.opacity = "0";
  }, 2000);
}

function removerItem(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}
function mostrar(id) {
  const selecionado = document.getElementById(id);

  if (selecionado.classList.contains('ativa')) {
    selecionado.classList.remove('ativa');
    return;
  }

  const categorias = document.querySelectorAll('.categoria');
  categorias.forEach(secao => secao.classList.remove('ativa'));

  selecionado.classList.add('ativa');
}

function atualizarCarrinho() {
  const lista = document.getElementById('lista-carrinho');
  const totalEl = document.getElementById('total');
  lista.innerHTML = '';
  let total = 0;

  carrinho.forEach((item, index) => {
    const subtotal = item.preco * item.quantidade;
    total += subtotal;

    lista.innerHTML += `
      <li>
        ${item.nome} x${item.quantidade} — R$ ${subtotal.toFixed(2)}
        <button class="btn-remover" onclick="removerItem(${index})">❌</button>
      </li>
    `;
  });

  totalEl.textContent = `Total: R$ ${total.toFixed(2)}`;
}
function definirTipo(valor) {
  const tipoInput = document.getElementById("tipo-pedido");
  const botoes = document.querySelectorAll(".tipo-opcao");

  const mesmoValor = tipoInput.value === valor;

  // Se o mesmo botão foi clicado novamente, desativa tudo
  if (mesmoValor) {
    tipoInput.value = "";
    botoes.forEach(btn => btn.classList.remove("ativo"));
    return;
  }

  // Ativa o botão clicado
  tipoInput.value = valor;
  botoes.forEach(btn => btn.classList.remove("ativo"));
  const selecionado = document.querySelector(`.tipo-opcao[onclick="definirTipo('${valor}')"]`);
  if (selecionado) selecionado.classList.add("ativo");
}

function abrirModal() {
  const tipo = document.getElementById("tipo-pedido").value;
  document.getElementById("modal-pedido").classList.add("show");

  // mostra campo de endereço se for entrega
  document.getElementById("campo-endereco").style.display = tipo === "entregar" ? "block" : "none";
}

function fecharModal() {
  document.getElementById("modal-pedido").classList.remove("show");
}

document.getElementById("input-pagamento").addEventListener("change", function () {
  const pagamento = this.value;
  document.getElementById("campo-troco").style.display = pagamento.toLowerCase() === "dinheiro" ? "block" : "none";
});

function gerarComandaID() {
  let comandaAtual = localStorage.getItem("comandaID");

  if (!comandaAtual) {
    comandaAtual = 1;
  } else {
    comandaAtual = parseInt(comandaAtual) + 1;
  }

  localStorage.setItem("comandaID", comandaAtual);

  // Comanda formatada com zeros: COM-001
  return `COM-${String(comandaAtual).padStart(3, '0')}`;
}

function enviarPedido() {
  const tipo = document.getElementById('tipo-pedido').value;
  const nome = document.getElementById('input-nome').value;
  const telefone = document.getElementById('input-telefone').value;
  const endereco = tipo === 'entregar' ? document.getElementById('input-endereco').value : '';
  const pagamento = document.getElementById('input-pagamento').value;
  const troco = pagamento.toLowerCase() === 'dinheiro' ? document.getElementById('input-troco').value : '';
  
  const agora = new Date();
  const comandaID = gerarComandaID(); // gera e usa só aqui
  const horario = agora.toLocaleString();
  const data = agora.toLocaleDateString();
  const total = carrinho.reduce((soma, item) => soma + item.preco * item.quantidade, 0);
  
  const itensPedido = carrinho.map(item =>
    `- ${item.quantidade}x ${item.nome} — R$ ${item.preco.toFixed(2)}`
  ).join('\n');

  const mensagem = `${tipo === "entregar" ? "🚚 ENTREGA" : tipo === "retirar" ? "🏃‍♂️ RETIRAR" : "🍽️ COMER NA HAMBURGUERIA"}

🍔 Pedido Hamburgueria L&M
📋 Comanda: ${comandaID}
📅 Horário: ${horario}

${itensPedido}

🧾 Total: R$ ${total.toFixed(2)}

👤 Nome: ${nome}
📞 Telefone: ${telefone}
${endereco ? `🏠 Endereço: ${endereco}` : ''}
💳 Pagamento: ${pagamento}
${troco ? `💰 Troco para: R$ ${troco}` : ''}
`;

  window.open(`https://wa.me/5513996415175?text=${encodeURIComponent(mensagem)}`, '_blank');

  // Salva no histórico local
  salvarPedidoNaMemoria({
    itens: [...carrinho],
    total: total,
    data: data
  });

  // Salva na planilha
  salvarPedidoNaPlanilha(comandaID, total, [...carrinho]);

  fecharModal();
  carrinho = [];
  atualizarCarrinho();
}


function salvarPedidoNaPlanilha(comandaID, totalPedido, carrinho) {
  const data = new Date().toLocaleDateString();
  const itensFormatados = carrinho.map(item =>
    `${item.quantidade}x ${item.nome} — R$ ${item.preco.toFixed(2)}`
  );

  fetch("https://script.google.com/macros/s/AKfycbwBvNYq0FEVRxQ5roN4j9vfgdgTOS1qhK56e53jZ_PVl4rQ5Owk6OoMM-_kFLTHL1an/exec", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      data: data,
      comanda: comandaID,
      totalPedido: totalPedido,
      itens: itensFormatados
    })
  })
  .then(res => res.text())
  .then(texto => console.log("📋 Resposta da planilha:", texto))
  .catch(erro => console.error("❌ Erro ao salvar pedido:", erro));
}



function abrirCampoSenha() {
   document.getElementById("fundo-admin").style.display = "block";
  document.getElementById("acesso-admin").style.display = "block";
  document.getElementById("area-admin").style.display = "none";
}

function validarSenha() {
  const senhaDigitada = document.getElementById("senha-admin").value;
  if (senhaDigitada === "lm2025") {
    document.getElementById("acesso-admin").style.display = "none";
    document.getElementById("area-admin").style.display = "block";
    mostrarComandaAtual();
    mostrarRelatorioDia();
  } else {
    alert("❌ Senha incorreta!");
  }
}

function fecharPainelAdmin() {
  // Fecha fundo escuro/modal
  document.getElementById("fundo-admin").style.display = "none";

  // Fecha painel interno e campo de senha (se estiverem abertos)
  document.getElementById("area-admin").style.display = "none";
  document.getElementById("acesso-admin").style.display = "none";
}
function mostrarComandaAtual() {
  let comandaAtual = localStorage.getItem("comandaID") || 0;
  document.getElementById("comanda-atual").textContent = `COM-${String(comandaAtual).padStart(3, '0')}`;
}

function resetarComandas() {
  localStorage.removeItem("comandaID");
  alert("✅ Contador de comandas zerado!");
  document.getElementById("comanda-atual").textContent = "COM-000";
}
window.addEventListener("load", function() {
    const preloader = document.getElementById("preloader");
          preloader.style.display = "none";
});

function salvarPedidoNaMemoria(pedido) {
  let historico = JSON.parse(localStorage.getItem("historicoPedidos")) || [];
  historico.push(pedido);
  localStorage.setItem("historicoPedidos", JSON.stringify(historico));
}

function gerarRelatorioDia() {
  const historico = JSON.parse(localStorage.getItem("historicoPedidos")) || [];
  const hoje = new Date().toLocaleDateString();

  let totalFaturamento = 0;
  let totalComandas = 0;
  let contagemItens = {};

  historico.forEach(pedido => {
    if (pedido.data === hoje) {
      totalFaturamento += pedido.total;
      totalComandas++;
      pedido.itens.forEach(item => {
        contagemItens[item.nome] = (contagemItens[item.nome] || 0) + item.quantidade;
      });
    }
  });

  return { totalFaturamento, totalComandas, contagemItens };
}
function mostrarRelatorioDia() {
  const relatorio = gerarRelatorioDia();
  document.getElementById("relatorio-admin").textContent =
    `📅 Data: ${new Date().toLocaleDateString()}\n\n` +
    `🧾 Faturamento Total: R$ ${relatorio.totalFaturamento.toFixed(2)}\n` +
    `📋 Total de Comandas: ${relatorio.totalComandas}\n\n` +
    `🍽️ Itens Vendidos:\n` +
    Object.entries(relatorio.contagemItens).map(([nome, quantidade]) =>
      `- ${quantidade}x ${nome}`).join('\n');
}

function resetarRelatorioDia() {
  localStorage.removeItem("historicoPedidos");
  alert("✅ Relatório do dia zerado!");
  document.getElementById("relatorio-admin").textContent = "";
}

function salvarRelatorioPDF() {
  const relatorio = document.getElementById("relatorio-admin");
  html2pdf().from(relatorio).save("relatorio-hamburgueria.pdf");
}


