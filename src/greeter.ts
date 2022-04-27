export interface Person {
  firstName: string;
  lastName: string;

}

export class GreeterService {
  greet(user: Person) {
      return `Hello, ${user.firstName} ${user.lastName}`;
  }
}
