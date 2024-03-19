// src/TurmaPresencial.js

const Turma = require('./Turma');

class TurmaPresencial extends Turma {
    constructor(codigo, nota, presenca) {
        super(codigo, nota);
        this.presenca = presenca;
    }

    aprovado() {
        return super.aprovado() && this.presenca >= 75;
    }
}

module.exports = TurmaPresencial;
