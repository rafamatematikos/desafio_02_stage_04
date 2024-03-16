/*Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.*/

const students = [
  {
    name: 'Rafael',
    assessmentOne: 8,
    assessmentTwo: 9
  },
  {
    name: 'Camila',
    assessmentOne: 7,
    assessmentTwo: 10
  },
  {
    name: 'Benício',
    assessmentOne: 5,
    assessmentTwo: 2
  },
  {
    name: 'Miguel',
    assessmentOne: 7,
    assessmentTwo: 7
  }
]

function averageCalc(assessmentOne, assessmentTwo) {
  return (assessmentOne + assessmentTwo) / 2
}

function studentMessage(student) {
  let average = averageCalc(student.assessmentOne, student.assessmentTwo)

  if (average >= 7) {
    return `A média do aluno(a) ${student.name} é ${average}. Parabéns, ${student.name}.Você foi aprovado(a) no concurso! `
  } else {
    return `A média do aluno(a) ${student.name} é ${average}. Não foi dessa vez, ${student.name}! Tente novamente! `
  }
}

for (let student of students) {
  let message = studentMessage(student)
  alert(message)
}
