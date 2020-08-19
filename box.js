//The first word first letter will be uppercase-naming standards
class Box {


    //properties 
    //constructor is a function where you would give the properties to the object
    //parameterized constructor
    constructor(x, y, w, h) {
        var groundOption = {
            restitution: 1
        };
        //this is a key word which would current calling object
        this.body = Bodies.rectangle(x, y, w, h, groundOption);
        this.width = w;
        this.height = h;
        World.add(world, this.body);
    }


    //function
    display() {
        fill("white");
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
    }





}