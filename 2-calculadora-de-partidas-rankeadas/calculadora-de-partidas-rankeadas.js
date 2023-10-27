function rankCalculator(wins, defeat){
    let rankNumber = wins - defeat;;

    if (wins < 10){
        console.log(`O Herói tem de saldo de ${rankNumber} está no nível Ferro`);
    } else if (wins >= 11 && wins <= 20) {
        console.log(`O Herói tem de saldo de ${rankNumber} está no nível Bronze`);
    } else if (wins >= 21 && wins <= 50) {
        console.log(`O Herói tem de saldo de ${rankNumber} está no nível Prata`);
    } else if (wins >= 51 && wins <= 80) {
        console.log(`O Herói tem de saldo de ${rankNumber} está no nível Ouro`);
    } else if (wins >= 81 && wins <= 90) {
        console.log(`O Herói tem de saldo de ${rankNumber} está no nível Diamante`);
    } else if (wins >= 91 && wins <= 100) {
        console.log(`O Herói tem de saldo de ${rankNumber} está no nível Lendário`);
    } else if (wins >= 101) {
        console.log(`O Herói tem de saldo de ${rankNumber} está no nível Imortal`);
    } else {
        console.log('[ERROR]: Algo de errado não está certo');
    }
}

rankCalculator(25, 4);