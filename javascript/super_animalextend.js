class Animal {
    constructor() {
this.noLegs=4;
    }
    printLegs () {
        console.log(this.noLegs);
    }
}
let someAnimal = new Animal();
someAnimal.printLegs();

class Dog extends Animal
{
    constructor()
    {
        super();
        this.breed = "retreiver";
    }
}