var KeyPressed
var canvas = new fabric.Canvas("minecraftboogle");
var block_object = ""
block_width = 30;
block_height = 30;
playerX = 40;
playerY = 500;
var player_object = "";
function player(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
        top: playerY,
        left: playerX

        });
        canvas.add(player_object)
    });
}

function newBlock(getImage){
    fabric.Image.fromURL(getImage, function(Img){
        block_object =  Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
        top: playerY + 40,
        left: playerX
        });
        canvas.add(block_object)
    })  ;
}

window.addEventListener("keydown", boogle7)
function boogle7(e){
    if(KeyPressed == "70"){
        newBlock("hulk_face.png")
        console.log("face")
    }
    if(KeyPressed == "66"){
        newBlock("spiderman_body.png")
        console.log("body")
    }
    if(KeyPressed == "76"){
        newBlock("ironman_legs.png")
        console.log("legs")
    }
    if(KeyPressed == "82"){
        newBlock("thor_right_hand.jpg")
        console.log("right")
    }
    if(KeyPressed == "72"){
        newBlock("captain_america_left_hand.jpg")
        console.log("left")
    }
if(KeyPressed == "38"){
    up()
    console.log("up")
}
if(KeyPressed == "40"){
    down()
    console.log("down")
}
if(KeyPressed == "39"){
    right()
    console.log("right")
}
if(KeyPressed == "37"){
    left()
    console.log("left")
}
}

function up(){
    if(playerY >= 0){
        playerY = playerY - block_height;
        canvas.remove(player_object)
        player()
    }
}
function down(){
    if(playerY <= 700){
        playerY = playerY + block_height;
        canvas.remove(player_object)
        player()
    }
}
function left(){
    if(playerX >= 0){
        playerX = playerX - block_width;
        canvas.remove(player_object)
        player()
    }
}
function right(){
    if(playerX <= 900){
        playerX = playerX + block_width;
        canvas.remove(player_object)
        player()
    }
}