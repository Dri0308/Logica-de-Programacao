class Hero{
	constructor (name, age, type){
    	this.name = name
        this.age = age
        this.type = type
    
}
 
	attack (){
		let attackType
    
    if (this.type === "mago"){
      attackType = "magia"
   }else if (this.type === "guerreiro"){
      attackType = "espada"
   }else if (this.type === "monge"){
      attackType = "artes marciais"
   }else if (this.type === "ninja"){
      attackType = "shuriken"
  }else{ 
      	attackType = "ataque desconhcido"
      }
      		

	console.log(`O heroi de nome ${this.name}, de ${this.age} de idade, é do tipo ${this.type} e atacou usando ${attackType}`)
    }
}
    
let ninja = new Hero ("Adriana", 26, "ninja")
ninja.attack()