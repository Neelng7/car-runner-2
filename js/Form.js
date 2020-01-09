class Form{
    constructor(){}
    display(){
        var title = createElement('h2');
        title.html("Car Runner");
        title.position(600,100);

        var input = createInput("");
        var button = createButton('play');
        input.position(500,315);
        button.position(600,350);

        button.mousePressed(function(){
       input.hide();
       button.hide();

       var name = input.value();
       playerCount = playerCount+1;
       player.update(name);
       player.updateCount(playerCount);

       var greeting = createElement('h3');
       greeting.html("hello"+name);
       greeting.position(600,315);
        });
    }
}