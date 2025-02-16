//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomes =[];

function limparCampo(){
    campo=document.querySelector('input');
    campo.value="";
}



function exibirTexto(id,text){
    let campo=document.getElementById(id);
    campo.innerHTML=text;
}

function adicionarAmigo(){
    let amigoAdd=document.querySelector('input').value;
    if(amigoAdd==""){
        alert("Digite o nome de um amigo");
    }else{
        nomes.push(amigoAdd);
        var i;
      
       for (i=0;i<nomes.length;i++){
       item=nomes;
       exibirTexto(id='listaAmigos',text= item);
       
       ;
}
       
        limparCampo();
    }
    console.log(nomes,item);
    
}
function sortearAmigo(){
    let nomesInserido = nomes.length;
    let nomeEscolhido= parseInt(Math.random() * nomesInserido);
    console.log(nomeEscolhido);
    exibirTexto(id='resultado',text= 'O meu amigo secreto é ' + nomes[nomeEscolhido]); 

}