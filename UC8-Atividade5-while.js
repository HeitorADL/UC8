

let NumerodeAlunos = 10
let contador = 0
while (contador<=NumerodeAlunos){
    // console.log(contador)
    if (contador==0) {
        console.log("O número atual é zero") 
    }
    else if(contador%2==1)
    console.log(`O número ${contador} é impar`)
    else if(contador%2==0)
    console.log(`O número ${contador} é par`)
    contador++
}

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

let NomedeAluno = ["Caique", "Thiago", "Jessica", "Odinlei"]
for (let nome of NomedeAluno){
    console.log(`Esta pessoa se chama ${nome}`)
}
// |||||||||||||||||||||||||||||||||||||||||||
let acompanhante = true
let idade = 18
let ingresso = true
if((idade>=18 || acompanhante==true) && ingresso==true){
    console.log("Bem vindo a festa!!")
}
else{
    console.log("Você não pode entrar")
}
