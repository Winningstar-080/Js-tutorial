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
//a function inside of an object is a method
//Objects have properties(nouns) and values(adjectives) that helps describe them
console.log(person.Firstname);
console.log(person.Age);
console.log(person);

let shopping = [ "rice","beans", "pepper", "salt","maggie"];
//Arrays are in zero order
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
//embedding an array inside of an object inside of an object
console.log(car);

function add(u,w) 
    {return u+w;
        }
let result = add(28, 36);
console.log (result);

console.log(this);
//the word this in general context makes referenc to the window object

var object  = {
    prop: this
};
console.log(object.prop);
//still directs to te window object because this is not inside a function therefore no new context is created

var array = [this];
console.log(array[0]);
//same thing happens here
//only callable objects (functions) can change this

var obj = {
    prop:this,
    good: function(){return this;} 
};
console.log(obj.good());
//in this case this = the object that called it

const arr = ["toy",
             function () {return this;}
];
console.log(arr[1]());
//this will point to the array, because it invoked the function

console.log (10 == 10); //loose equal to
console.log ("Hello" == "hello"); //loose equal to, converts first before checking
console.log (100 == "100"); //loose equal to
console.log (100 === "100"); //strict equal to, checks straight
console.log ( null == undefined ); //loose equal to
console.log ( null === undefined ); //strict equal to
console.log ( 100 != 10 ); //not equal to, converts first before checking
console.log ( 100 != "100"); //not equal to, converts first before checking
console.log ( 100 !== "100"); //strictnot equal to, checks straight

var carsleft = 0,
    carsright = 0,
    trafficgreen = "yes";

if ( trafficgreen == "yes" ) {
    console.log("cross the road");
}

var trucksleft = 0,
    trucksright = 0,
    trafficgreen = "no";

if ( trafficgreen === "yes" ) {
    console.log("cross the road");
}
else if ( trucksleft === 0 && trucksright === 0 )
    { console.log ("All clear, cross the road");
    }


let score = 45;
    if (score >= 50) {console.log ("Passed"); }
    else {console.log ("False");}

var ClassRegister = [ "Umah", "Winner", "Micheal" ];
    for (let i = 0; i < ClassRegister.length; i++) {
        console.log(ClassRegister[i]);
    }
//What each part means: 
//1. let i = 0
//Start counting from index 0
//2. i < classRegister.length
//Keep going while there are still items
//3. i++
//Move to the next item
//4. classRegister[i]
//Get the name at the current position

for (let i = ClassRegister.length - 1; i >=0; i--){
    console.log(ClassRegister[i]);
}
//1. let i = ClassRegister.length - 1
// starts counting from the rare
//2. i >=0
//keep going till it gets to the top
//3. i--, Move to the next item (backwards)

for (let index in ClassRegister){
    console.log(ClassRegister[index]);
}

console.log (document.getElementsByTagName('p'));
console.log (document.getElementsByTagName('h1'));
console.dir (document.getElementById ("hello") ); //the problem was because of the position of the script tag
console.log (document.getElementsByClassName('pClass'));
console.log (document.querySelectorAll(".pClass"));
console.log (document.querySelectorAll('#hello'));
console.log (document.querySelectorAll('#hello, .pClass'));

console.log (document.querySelectorAll (' p[data-content="123"], body > h1.pClass > span'));

var pHello = document.getElementById ("hello");
pHello.innerText = "new world" ;//case sensitive
pHello.innerText += " new year" ;
pHello.innerHTML += " <span> new being </span>" ;
pHello.outerHTML = '<h2 id="hello">Happy New Year <span> 2026 </span></h2>';

var spanH1 = document.querySelectorAll (' h1 span');
spanH1[0].innerHTML = "new topic" ;

var el = document.getElementById('style');
el.style.background = "purple";
el.style.color = "yellow";
el.style.width = "200px";
el .style.boarder = "10px";

el.style.cssText += "height:50px";

var select = document.getElementsByName('cars')[0];
select.onclick = function( event ) {console.log (event);
};

function ClickCallback ( event ) {
    console.log ('clicked by add event listner');
}
function ClickCallback1( event ) {
    console.log ('clicked by add event listner');
}

select.addEventListener( 'click', ClickCallback);
select.addEventListener( 'click', ClickCallback1);

select.removeEventListener('click', ClickCallback);