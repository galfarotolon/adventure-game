

let app = new PIXI.Application({ width: 1000, height: 600 });
let bgSky;
let bgJungle;
let bgBushes;
let bgGrass;
let bgRoad;
let bgX = 0;
let bgSpeed = 1






// let background = new PIXI.Sprite.from('images/img-1.png')
// let palmTree = new PIXI.Sprite.from('images/palmtree-1.png')
// var text = new PIXI.Text("Hello Adventurer!", { fill: "red" });


// text.anchor.set(0.5);
// text.x = app.view.width / 2
// text.y = app.view.height / 2


// app.stage.addChild(background)
// app.stage.addChild(palmTree)
// app.stage.addChild(text);


let count = 0
var audio = new Audio("/sounds/intro.mp3");

//Button functionality outside Pixi

document.querySelector('.play-btn').onclick = function playGame() {
    audio.play();
    audio.loop = true;

    if (count === 0) {
        document.querySelector('#game').appendChild(app.view);
        app.ticker.add(gameLoop)
        count++;
    }


}


document.querySelector('.pause-btn').onclick = function plauseGame() {
    audio.pause();
    count--;
    app.ticker.remove(gameLoop)




}



const initLevel = () => {
    bgSky = createBg(app.loader.resources['bgSky'].texture)
    bgJungle = createBg(app.loader.resources['bgJungle'].texture)
    bgBushes = createBg(app.loader.resources['bgBushes'].texture)
    bgGrass = createBg(app.loader.resources['bgGrass'].texture)
    bgRoad = createBg(app.loader.resources['bgRoad'].texture)
    bgLianas = createBg(app.loader.resources['bgLianas'].texture)
    bgFireFly = createBg(app.loader.resources['bgFireFly'].texture)
    // bgTree = createBg(app.loader.resources['bgTree'].texture)


    // app.ticker.add(gameLoop)
}



app.loader.baseUrl = 'assets';
app.loader.add('bgSky', 'sky.png');
app.loader.add('bgJungle', 'jungle_bg.png');
app.loader.add('bgBushes', 'trees&bushes.png');
app.loader.add('bgGrass', 'grasses.png');
app.loader.add('bgRoad', 'grass&road.png');
app.loader.add('bgLianas', 'lianas.png');
app.loader.add('bgFireFly', 'fireflys.png');
// app.loader.add('bgTree', 'tree_face.png');


app.loader.onComplete.add(initLevel)
app.loader.load();




function gameLoop(delta) {
    updateBg()

}

function createBg(texture) {
    let tiling = new PIXI.TilingSprite(texture, 1200, 600);
    tiling.position.set(0, 0);
    app.stage.addChild(tiling);

    return tiling;
}

function updateBg() {
    bgX = (bgX + bgSpeed);
    bgFireFly.tilePosition.x = bgX / 10

    // bgLianas.tilePosition.x = bgX / 2
    // bgBushes.tilePosition.x = bgX / 4;
    // bgJungle.tilePosition.x = bgX / 6;
    // bgSky.tilePosition.x = bgX / 10;



}
