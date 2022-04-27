import {GreeterService, Person} from "../src/greeter";

describe('Test person.ts', () => {
    let service: GreeterService;

    beforeEach(() => service = new GreeterService());

    test('should say', () => {
        const person: Person = {
            firstName: 'Nicolas',
            lastName: 'Savois'
        };
        expect(service.greet(person)).toBe('Hello, Nicolas Savois');
    })
});





