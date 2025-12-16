console.log ('hello world');
console.log ("Hello 'this is' winner");
console.log (200, 2.1);
console.log (true,false);

var name = "Winner";
console.log (name);

const lastname = "Umah";
console.log (lastname);

let a = 5 + 7;
console.log (a);

let b = 12 - 8;
console.log (b);

let c = 5 + 2**4 * (8 * 2) / 2;
console.log (c);

let d = 10 % 3;
console.log (d);

function maketea (milk, chocolate, sugar)
    {
        var instructions = "boil watter ";
        instructions += "pour into cup ";
        instructions += "add " + milk + " spoon full of milk ";
        instructions += "add " + chocolate + " spoon full of chocolate ";
        instructions += "add " + sugar + " cubes of sugar ";
        instructions += " stir properly";
        return instructions;
    }
console.log (maketea (2, 3, 2));

let person = {
    Firstname: "Winner",
    Lastname: "Umah",
    Age: 25,
    complexion: "dark",
    walking: function(){return "walking";}
            };
console.log(person.Firstname);
console.log(person.Age);
console.log(person);

let shopping = [ "rice","beans", "pepper", "salt","maggie"];
console.log(shopping[3]);

let car = {
    make: "Toyota",
    speed: 200,
    engine: {
        size: 150,
        type: "lexus",
        fuel: "petrol",
        piston: [" piston 1 ", " piston 2 ", " piston 3 "]
    }
            };
console.log(car);

