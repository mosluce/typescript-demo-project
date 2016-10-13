import {Person} from './models/Person';
import {Pet} from './models/Pet';

export class Main {
    constructor() {

    }

    bootstrap() {
        let person = new Person();
        person.num = "123";
        person.name = "mosluce";
        person.pets = [];

        let pet = new Pet();
        pet.name = "momo";
        pet.owner = person;

        person.pets.push(pet);

        console.log("Person Object => ", person);
        console.log("Person's first Pet's name => ", person.pets[0].name);
        console.log("Pet Object => ", pet);
        console.log("Pet's owner's name => ", pet.owner.name);
    }
}

new Main().bootstrap();