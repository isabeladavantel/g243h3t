const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json";

async function visualizarInformacoesGlobais(){
    const res = await fetch(url);
    const dados = res.json();

const pessoasConectadas = dados.total_pessoas_conectadas / le9;
const pessoasNoMundo = dados.total_pessoas_mundo/le9;
const minutos = Math.round((dados.tempo_medio - horas) * 60)
const porcentagemConctada = ((pessoasConectadas/pessoasNoMuno) * 100).toFixed()

    const paragrafo = document.createElement('p');
    paragrafo.classList.add('grafico-container__texto')
    paragrafo.innerHTML = `voce sabia que o mundo tem 
    <span> ${dados.total_pessoas_mundo}</span> e pessoas e 
    que aproximadamente <span>${dados.total_pessoas_conectadas}</span>
    estao conectadas em alguma rede social e passam em medeia
    <span>${dados.tempo_medio} </span>hora concetadas.`
    const container = document.getElementById('graficos-container').appendChild(paragrafo)

}
    


visualizarInformacoesGlobais();