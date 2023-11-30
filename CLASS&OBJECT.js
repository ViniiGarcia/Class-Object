//mago = magia
//guerreiro = espada
//monge = artes marciais
//ninja = shuriken

class infoHero{
	constructor(name, age, genus){
    	this.name = name
        this.age = age
        this.genus = genus
        
        let classe = this.genus
    switch (classe){
    	case "Mago":
    	console.log( " O mago atacou usando magia " )
        break
        case "Guerreiro":
    	console.log( " O Guerreiro atacou usando espada " )
        break
        case "Monge":
    	console.log( " O Monge atacou usando artes marciais " )
        break
        case "Ninja":
    	console.log( " O Ninja atacou usando shuriken " )
        break
    	}
    }
}
	    
let attackMago = new infoHero ("Vinicius", "26", "Mago")
let attackGuerreiro = new infoHero ("Vinicius", "26", "Guerreiro")
let attackMonge = new infoHero ("Vinicius", "26", "Monge")
let attackNinja = new infoHero ("Vinicius", "26", "Ninja")