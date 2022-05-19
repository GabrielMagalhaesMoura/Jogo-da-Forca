let btnPlay = document.querySelector('.btn-play');
let btnAdd = document.querySelector('.btn-add');

btnPlay.addEventListener('click', play);
btnAdd.addEventListener('click', add);

function play() {
    // alert("Você cliclou em play")
    // Redireciona para outra pag sem opção de voltar
    // window.location.replace("http://www.google.com.br");
    window.location.href = "jogar.html";
}

function add () {
    // alert("Você cliclou em add")
    window.location.href = "adicionar.html";

}