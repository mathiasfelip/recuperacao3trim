//as funções servem para executar tarefas que são chamadas por algum gatilho, nesse caso é chamada quando clica no botão que está no html
//tudo que ta dentro da função é o que vai acontecer quando o botão que chama ela for clicado
function InscreverEstudante(){
    //armazena em uma variavel o valor que o usuário digitar na janela de prompt que aparece quando clica no botão
    let idadeDoEstudante = prompt("Qual a idade do estudante?");
    let InteressadosA;
    let InteressadosB;
    
    if (16<=idadeDoEstudante && idadeDoEstudante<=17){
        document.getElementById("classe").textContent="Resultado: Parabéns, você está na classe A";
        InteressadosA=InteressadosA + 1;
        document.getElementById("interessados").textContent="Jogadores Classe A:" + InteressadosA;
 
    }
    if (14<=idadeDoEstudante && idadeDoEstudante<=15){
        document.getElementById("classe").textContent="Resultado: Parabéns, você está na classe B";
        InteressadosB=InteressadosB + 1;
        document.getElementById("interessados b").textContent="Jogadores Classe B:" + InteressadosB;

    }
    if (idadeDoEstudante<=13){
        document.getElementById("classe").textContent="Desculpe, mas infelizmente você não pode competir :(";

    }
    if (idadeDoEstudante>=18){
        document.getElementById("classe").textContent="Desculpe, mas infelizmente você não pode competir :(";

    }

}





//LEIA ANTES DE COMEÇAR:
//Como não estamos usando banco de dados, toda vez que o site for recarregado o valor das variáveis volta a ser zero, não se preocupe com isso
//para realizar o calculo de quantos times podem ser feitos, use o parseInt() para forçar o resultado ser um número inteiro e ignorar as sobras do cálculo.

