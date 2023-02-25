

let app = new PIXI.Application({ width: 1000, height: 600 });
let bgSky;
let bgJungle;
let bgBushes;
let bgGrass;
let bgRoad;
let bgX = 0;
let bgSpeed = 1


const tree = PIXI.Sprite.from("assets/tree_face.png");
// tree.x = 100;
// tree.y = 100;



// let background = new PIXI.Sprite.from('images/img-1.png')
// let palmTree = new PIXI.Sprite.from('images/palmtree-1.png')
// var text = new PIXI.Text("Hello Adventurer!", { fill: "red" });
// var text = new PIXI.Text("You have travelled far", { fill: "white", fontFamily: 'VT323-Regular' });


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

        loadAssets()
        // setTimeout(loadText, 5000)



        count++;
    }


}


document.querySelector('.pause-btn').onclick = function pauseGame() {
    audio.pause();
    count = 0;
    app.ticker.remove(gameLoop)

}

document.querySelector('.restart-btn').onclick = function restartGame() {
    audio.currentTime = 0
    audio.play()
    audio.loop = true;
    count = 0;
    bgX = 0
    app.stage.removeChild(tree);
    document.querySelector('.game-text').innerHTML = ''
    myStopFunction()
    loadAssets()
    count++;
    console.log(count);
    console.log('restarting');
}

// init level
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


let myVar;
let myVar2;


function loadAssets() {

    powerTree = setTimeout(function () {

        app.stage.addChild(tree);
    }, 5000);

    text = setTimeout(function () {
        document.querySelector('.game-text').innerHTML = 'You have travelled Far...'
    }, 5000)


    text = setTimeout(function () {
        document.querySelector('.game-text').innerHTML = 'You stumble upon what seems to be a talking tree...'
    }, 8000)


    text = setTimeout(function () {
        document.querySelector('.game-text').innerHTML = "Power Tree: 'Halt! Who dares awaken me from my deep slumber?' "

        const optionsShow = document.querySelector('.game-options');
        optionsShow.style.display = 'inline-block';

        const option1 = document.querySelector('.option1-btn').innerHTML = "'Tis I, the great adventurer'"
        const option2 = document.querySelector('.option2-btn').innerHTML = "'I meant not to wake you, apologies oh great talking tree'"
        const option3 = document.querySelector('.option3-btn').innerHTML = "'A talking tree? I must be dreaming'"
        const option4 = document.querySelector('.option4-btn').innerHTML = "'I am lost and looking for a path out of the forest'"
    }, 12000)

}

function myStopFunction() {
    clearTimeout(powerTree);
    clearTimeout(text);
}




app.loader.onComplete.add(initLevel)
app.loader.load();




function gameLoop(delta) {
    updateBg()

}

function createBg(texture) {
    let tiling = new PIXI.TilingSprite(texture, 1000, 600);
    tiling.position.set(0, 0);
    app.stage.addChild(tiling);

    return tiling;
}

function updateBg() {
    bgX = (bgX + bgSpeed);
    bgFireFly.tilePosition.x = bgX / 4
    bgLianas.tilePosition.x = bgX / 6
    bgGrass.tilePosition.x = bgX / 4
    bgRoad.tilePosition.x = bgX / 4
    bgBushes.tilePosition.x = bgX / 4;
    bgJungle.tilePosition.x = bgX / 6;
    bgSky.tilePosition.x = bgX
}

