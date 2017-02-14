TinyTurtle.apply(window);

function square(x){
forward(x);
right(90);
forward(x);
right(90);
forward(x);
right(90);
forward(x);
right(90);
forward(x);
}

function triangle(x){
forward(x);
right(120);
forward(x);
right(120);
forward(x);
}

function othertriangle(y){
right(270);
forward(y);
right(160);
forward(y+y);
right(40);
forward(y+y);
right(160);
forward(y);
}

square(25);
othertriangle(15);
// Type your function call below

stamp();