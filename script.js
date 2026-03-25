function scrollToForm(){
  document.getElementById('contato').scrollIntoView({
    behavior: 'smooth'
  });
}

function enviarWhats(e){
  e.preventDefault();

  let nome = document.getElementById('nome').value;
  let telefone = document.getElementById('telefone').value;
  let endereco = document.getElementById('endereco').value;
  let horario = document.getElementById('horario').value;
  let descricao = document.getElementById('descricao').value;

  let mensagem = `Olá, meu nome é ${nome}%0A` +
  `Telefone: ${telefone}%0A` +
  `Endereço: ${endereco}%0A` +
  `Horário disponível: ${horario}%0A` +
  `Serviço: ${descricao}`;

  let numero = "5566999341695"; // COLOQUE SEU NÚMERO AQUI

  window.open(`https://wa.me/${numero}?text=${mensagem}`, '_blank');
}