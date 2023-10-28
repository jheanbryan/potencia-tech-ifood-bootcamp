class Hero{
    constructor(name, yearsOld, type){
        this.name = name;
        this.yearsOld = yearsOld;
        this.type = type;
    }

    attack(){
        if (this.type == 'mago'){
            console.log(`${this.type} atacou usando magia`);
        } else if (this.type == 'guerreiro'){
            console.log(`${this.type} atacou usando espada`);
        } else if (this.type == 'monge'){
            console.log(`${this.type} atacou usando artes marciais`);
        } else if (this.type == 'ninja'){
            console.log(`${this.type} atacou usando shuriken`);
        } else {
            console.log('[ERROR]: Digite um tipo de guerreiro correto!');
        }
    }
}
let zed = new Hero('Zed', 30, 'ninja');
let veigar = new Hero('Veigar', 20, 'mago');
let leeSin = new Hero('LeeSin', 30, 'monge');
let garen = new Hero('Garen', 30, 'guerreiro');
zed.attack();
veigar.attack();
leeSin.attack();
garen.attack();