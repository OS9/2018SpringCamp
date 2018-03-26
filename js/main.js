var screenCanvas,info;
var run = true;
var fps = 200;
var ctx;
var x = 256;
var y = 200;
var up = false;
var pattern = 3;

//main
window.onload = function() {
    var counter = 0;
    var i,j;
    
    //スクリーン初期化
    screenCanvas = document.getElementById('screen');
    screenCanvas.width = 512;
    screenCanvas.height = 256;
    
    //2dコンテキスト
    ctx = screenCanvas.getContext('2d');
    
    //イベント登録
    window.addEventListener('keydown', keyDown, true);
    
    //エレメント関連
    info = document.getElementById('info');
    
    //ランダム地形を配列に保存
    var rndLnd = [20];
    for (let i = 0; i < rndLnd.length; i++) {
        var drwRnd = (Math.random()*9) + 1;
        rndLnd[i] = drwRnd;        
    }
    
    (function(){
        counter++;
        //HTML更新
        info.innerHTML = 'SCORE ' + counter;
        
        // screenクリア 
        ctx.clearRect(0, 0, screenCanvas.width, screenCanvas.height);
        
        var pattern = new Array(3);
        for(i = 0; i < pattern.length; i++){
            pattern[i] = (Math.random() * 3) + 1; 
        }
        
        
        //パス設定開始
        ctx.beginPath();
        
        //キャラのパス設定
        ctx.fillRect(x,y,10,10);
        
        //色を設定
        ctx.fillStyle = 'rgba(0, 0, 255, 0.75)';
        ctx.fill();
        
        ctx.closePath;
        
        //ステージ 
        updateStage(rndLnd);

        //色を設定
        ctx.fillStyle = 'red';
        ctx.fill();
        
        if(run){setTimeout(arguments.callee,fps);}
    })();
};

function keyDown(event){
    // キーコードを取得
    var key = event.keyCode;
    // ←キー
    if(key === 37){x-=5; console.log('x');}
    // →キー
    if(key === 39){x+=5; console.log('x');}
    // ↑キー
    if(key === 38){up = true; console.log('y');}
}


//ステージ
var stage = 0;
var stageX = 512;
var stageY = 210;
// let rand = (Math.random() * 50) + 1;
function drawRoad(/*rand*/) {
    ctx.beginPath();
    ctx.fillRect(
        stage = stageX -= 20,
        stage = stageY/* + rand*/,
        20,256
    );
    ctx.closePath();
}

function vanishRoad() {
    ctx.beginPath();
    ctx.fillRect(
        stage = stageX -= 20,
        stage = 256,
        20,256
    );
    ctx.closePath();    
}

function drawStage(drw_nmb) {
    for (let num = 0; num < drw_nmb; num++) {        
        drawRoad();
    }
    vanishRoad();
    if(stageX==0) {
        stageX=512;
    }
}

var stageX_speed = 20;
function moveStage() {
    stageX += stageX_speed;
}

function generateStage(rndLnd) {
    for (let i = 0; i < rndLnd.length; i++) {        
        drawStage(rndLnd[i]);
    }
}

function updateStage(rndLnd) {
    generateStage(rndLnd);
    moveStage();
}