var canvas = new fabric.Canvas("myCanvas");
var player_object = "";
player_x = 10;
player_y = 10;
var image_object = "";
block_img_width = 30;
block_img_height = 30;

function player_update(){
    fabric.Image.fromURL("player.png",function(img){
        player_object = img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    })
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(img){
        image_object = img;
        image_object.scaleToWidth(block_img_width);
        image_object.scaleToHeight(block_img_height);
        image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(image_object);
    })
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if(e.shiftKey == true && keypressed == "80"){
        console.log("P & SHIFT pressed together; block width & height + 10");
        block_img_width = block_img_width + 10;
        block_img_height = block_img_height + 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }
    if(e.shiftKey && keypressed == "77"){
        console.log("M & SHIFT pressed together; block width & height - 10");
        block_img_width = block_img_width - 10;
        block_img_height = block_img_height - 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }
    if(keypressed == "38"){
        up();
        console.log("UP ARROW clicked, moved player up");
    }
    if(keypressed == "40"){
        down();
        console.log("DOWN ARROW clicked, moved player down");
    }
    if(keypressed == "37"){
        left();
        console.log("LEFT ARROW clicked, moved player left");
    }
    if(keypressed == "39"){
        right();
        console.log("RIGHT ARROW clicked, moved player right");
    }
    if(keypressed == "66"){
        new_image("wall.jpg");
        console.log("B is pressed, placed brick texture");
    }
    if(keypressed == "69"){
        new_image("ground.png");
        console.log("E is pressed, placed grass_alpha_side texture");
    }
    if(keypressed == "71"){
        new_image("light_green.png");
        console.log("G is pressed, placed grass_alpha_top texture");
    }
    if(keypressed == "79"){
        new_image("trunk.jpg");
        console.log("O is pressed, placed oak_log_old texture");
    }
    if(keypressed == "78"){
        new_image("roof.png");
        console.log("N is pressed, placed netherrack_old texture");
    }
    if(keypressed == "89"){
        new_image("yellow_wall.png");
        console.log("Y is pressed, placed yellow retextured bricks texture; not part of base game");
    }
    if(keypressed == "68"){
        new_image("dark_green.png");
        console.log("D is pressed, placed grass texture from another voxel game");
    }
    if(keypressed == "76"){
        new_image("unique.png");
        console.log("L is pressed, placed glowstone_old texture");
    }
    if(keypressed == "83"){
        new_image("cloud.jpg");
        console.log("S is pressed, placed stone texture");
    }
}

function up(){
    if(player_y >= 0){
        player_y = player_y - block_img_height;
        console.log("block_img_height = " + block_img_height);
        console.log("Up arrow key has been pressed, x = "+player_x+", y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if(player_y <= 500){
        player_y = player_y + block_img_height;
        console.log("block_img_height = " + block_img_height);
        console.log("Down arrow key has been pressed, x = "+player_x+", y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if(player_x > 0){
        player_x = player_x - block_img_width;
        console.log("block_img_width = " + block_img_width);
        console.log("Left arrow key has been pressed, x = "+player_x+", y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if(player_x <= 850){
        player_x = player_x + block_img_width;
        console.log("block_img_width = " + block_img_width);
        console.log("Right arrow key has been pressed, x = "+player_x+", y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}