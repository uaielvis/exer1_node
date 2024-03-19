// index.js

const Aluno = require('./src/Aluno');
const Turma = require('./src/Turma');
const TurmaPresencial = require('./src/TurmaPresencial');

// Exemplo de uso dos módulos
const aluno = new Aluno('Fulano', 'fulano123', '123456');
const turma = new Turma('T1', 7.0);
const turmaPresencial = new TurmaPresencial('TP1', 6.5, 80);

aluno.setTurma(turma);
console.log('Aluno aprovado na turma regular:', aluno.aprovado());

aluno.setTurma(turmaPresencial);
console.log('Aluno aprovado na turma presencial:', aluno.aprovado());
