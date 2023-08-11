const {Circle, Square, Triangle} = require("./shapes");


describe ("Circle test", () => {
    test ("test for a circle that has a red background", ()=> {
        const shape = new Circle();
        shape.setColor("red");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
    });
});

describe ("Square test", () => {
    test ("test for a square that has a green background", ()=> {
        const shape = new Square();
        shape.setColor("green");
        expect(shape.render()).toEqual('<rect x="80" y="40" width="160" height="160" fill="green" />');
    });
});



describe ("Triangle test", () => {
    test ("test for a triangle that has a blue background", ()=> {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});