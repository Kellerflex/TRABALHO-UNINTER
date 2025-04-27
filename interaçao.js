const botao = document.createElement("button"); 
botao.innerText = "Clique para ver a mensagem!";

const mensagem = document.createElement("p"); 
mensagem.style.display = 'none'; 
mensagem.innerText = "Desde pequeno, fui envolvido no universo dos animais, especialmente gatos e cachorros, graças ao canil da minha tia. Cresci vendo o trabalho de veterinários e como eles fazem a diferença na vida dos animais. Esse contato com os cuidados e o carinho me motivou a querer fazer mais por eles, mas, infelizmente, as circunstâncias da vida não me permitiram seguir esse caminho ainda. Porém, estou determinado a conquistar meus objetivos, e cada passo que dou agora é uma forma de me aproximar do meu real sonho: cursar Medicina Veterinária. Quem acha que TI é apenas sobre 'códigos e mais códigos' está bem distante do verdadeiro impacto que a Medicina Veterinária pode ter na vida de um ser vivo. ";
document.body.appendChild(botao);
document.body.appendChild(mensagem);

botao.addEventListener('click', function() {
  mensagem.style.display = 'block'; });