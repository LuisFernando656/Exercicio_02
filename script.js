const students = [
  {
    name: 'Laura',
    grade1: 6,
    grade2: 8
  },
  {
    name: 'Jefersson',
    grade1: 9,
    grade2: 4
  },
  {
    name: 'Bruno',
    grade1: 7,
    grade2: 3
  },
  {
    name: 'Luan',
    grade1: 3.4,
    grade2: 1.5
  }
]

const calcMedia = (grade1, grade2) => {
  let media = (grade1 + grade2) /2 
  return media
}

for (const student of students) {
  let res 
  let media = calcMedia(student.grade1,student.grade2)

  if(media >= 7) {
    res = `Parabéns ${student.name}! você foi aprovado(a) no concurso!`
  }else{
    res = `Não foi dessa vez,${student.name}! Tente novamente!`
  }

  alert(`A média do(a) aluno(a) ${student.name} é: ${media.toFixed(1)}
  ${res}`)
}



