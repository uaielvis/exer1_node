// Aluno.js

class Aluno {
    constructor(nome, login, ra) {
        this.nome = nome;
        this.login = login;
        this.ra = ra;
        this.turma = null;
    }

    setTurma(turma) {
        this.turma = turma;
    }

    aprovado() {
        if (this.turma) {
            return this.turma.aprovado();
        }
        return false;
    }
}

module.exports = Aluno;
