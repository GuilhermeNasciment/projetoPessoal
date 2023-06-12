var database = require("../database/config");

function buscarUltimasMedidas(idAquario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT COUNT(usuario.fkTripulacao) as voto, tripulacao.nome AS tripulacao
        FROM usuario JOIN tripulacao ON  tripulacao.id = usuario.fktripulacao group by usuario.fktripulacao;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT COUNT(usuario.fkTripulacao) as voto, tripulacao.nome AS tripulacao
        FROM usuario JOIN tripulacao ON  tripulacao.id = usuario.fktripulacao group by usuario.fktripulacao;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT COUNT(usuario.fkTripulacao) as voto, tripulacao.nome AS tripulacao
        FROM usuario JOIN tripulacao ON  tripulacao.id = usuario.fktripulacao group by usuario.fktripulacao;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT COUNT(usuario.fkTripulacao) as voto, tripulacao.nome AS tripulacao
        FROM usuario JOIN tripulacao ON  tripulacao.id = usuario.fktripulacao group by usuario.fktripulacao;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
