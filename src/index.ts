import {Person, GreeterService} from "./greeter"

const user: Person = {
  firstName: "Nico", 
  lastName: "Savois"
};

const greeterService = new GreeterService();
console.log(greeterService.greet(user));
