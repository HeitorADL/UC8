// Permitir o cadastro somente se ela tiver mais de 100 gramas
// Número de peças na lista é de 10 unidades, caso tenha 10 ou mais peças, usuário receberá mensagem lista de peças está lotada
// Validar se o nome da peça possui mais de 3 caracteres

var lista_de_peca=["filtro de ar","amortecedor","Disco de freio"]

// existe espaço na lista?
if(lista_de_peca.length<10){
    //é possivel cadastrar
    console.log("É possível cadastrar mais peças")
    }
    else{
        //Não é possível cadastrar
        "Não tem mais espaço na lista"
        }
let peso = 50
if(peso<100){
    console.log("A peça precisa ter no minímo 100g")
}
else{
    console.log("A peça possui tamanho  adequado")
}
let nome_da_peca = "Caixa de Cambio"
if (nome_da_peca.length>=3) {
    console.log("Nome válido")
} else {
    console.log("Nome deve ter mais de 3 caracteres, digite um nome adequado")
}