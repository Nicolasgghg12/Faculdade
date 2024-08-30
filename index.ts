// npm i prompt-sync
// function CalcularArea(lado) {
//     return lado*lado
// }

// const quadrado = CalcularArea(20)
// console.log(quadrado);
// vvvvvvvvvvvvvvvvvvvv

// import PromptSync from 'prompt-sync'

// const prompt = PromptSync()

// let ladoQuadrado =  Number(prompt('digite o tamanho do lado: '))


// function calcularArea(lado: number) {
//     return lado * lado
// }


// const quadrado =  calcularArea(ladoQuadrado)

// console.log(quadrado);

// -----**------**-------***------**------

// objeto literal :
// interface Aluno{
//     nome: String;
//     mediaFinal: Number;
//     situacao: 'Aprovado' | 'Reprovado';
//     Nome: ()=>void;
// }

// const aluno: Aluno = {
//     nome: 'Maria',
//     mediaFinal: 3,
//     situacao: 'Reprovado',
//     Nome(){console.log(this.nome)}
// }

// const aluno2: Aluno = {
//     nome: 'João',
//     mediaFinal: 7,
//     situacao: 'Aprovado',
//     Nome(){console.log(this.nome)}
// }

// aluno.Nome()
// console.log(aluno);

// aluno2.Nome()
// console.log(aluno2);


// -----**------**-------***------**------

// type Situacao = 'Aprovado' | 'Reprovado';   

// interface Aluno{
//     nome: string;
//     mediaFinal: number;
//     situacao: Situacao;
// }

// function alunoFactory(nome: string, mediaFinal: number): Aluno{
//     let situacao: Situacao = 'Reprovado'

//     if(mediaFinal >= 6){
//         situacao = 'Aprovado'
//     }

//     return{
//         nome,
//         mediaFinal,
//         situacao
//     }
// }

// const aluno3 = alunoFactory('teste 3', 9)
// console.log(aluno3.situacao);

// -----**------**-------***------**------














