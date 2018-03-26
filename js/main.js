var screenCanvas,info;
var run = true;
var fps = 50;
var ctx;
var x = 60;
var y = 540;
var up = false;
var y_pre = 0;
var y_nex = 0;
var message;
var start = true;
const stageX = 600;
const stageY = 550;
// stageのx座標
var stage_now_x = 0;

//main
window.onload = function() {
    var counter = 0;
    var i,j;
    //BGM関連
    var audio = new Audio();

    //audio.preload = "none";

    audio.addEventListener("loadstart", function(e) {
        audio.loop = true;
        audio.play();
    });
    audio.src = "./js/kongyo___1.wav";

    //audio.load();
    
    //スクリーン初期化
    screenCanvas = document.getElementById('screen');
    screenCanvas.width = 600;
    screenCanvas.height = 600;
    
    //2dコンテキスト
    ctx = screenCanvas.getContext('2d');
    
    //イベント登録
    window.addEventListener('keydown', keyDown, true);
    
    //エレメント関連
    info = document.getElementById('info');

    //ランダム地形を配列に保存
    var drwRnd = (Math.random()*1) + 3;
    // var rndLnd = [20];
    // for (let i = 0; i < rndLnd.length; i++) {
    //     var drwRnd = (Math.random()*1) + 3;
    //     rndLnd[i] = drwRnd;        
    // }


    var timer = setInterval(function() {
        //HTML更新
        info.innerHTML = 'SCORE ' + message;
        
        // screenクリア 
        ctx.clearRect(0, 0, screenCanvas.width, screenCanvas.height);
        
        //経過時間と開始判定
        if(start == true){
            //ステージ 
            // updateStage(rndLnd);
            updateStage(drwRnd);
            do{
                switch(true){
                    case (x > 0 && x < 600 && y < 600 && y > 0):
                        counter++
                        message = counter;
                        break;
                        
                    // Game Over and Restart
                    case start == true: 
                        message = "GAME OVER";
                        counter = 0;
                        start = false;
                        //自機の初期位置
                        x=60;
                        y=540;
                        break;

                    // First Start
                    case start == true:
                        counter=0;
                        //自機の初期位置
                        x=60;
                        y=540;
                        break;     
                }
                //ジャンプ
                jump(drwRnd);
            }while(i>0);  
        }


        //パス設定開始
        ctx.beginPath();
        
        //キャラのパス設定
        ctx.fillRect(x,y,10,10);
        
        //色を設定
        ctx.fillStyle = 'rgba(0, 0, 255, 0.75)';
        ctx.fill();
        
        ctx.closePath;
        

        if (!run) clearInterval(timer);
    }, fps);
};

function keyDown(event){
    // キーコードを取得
    var key = event.keyCode;
    // ←キー
    if(key === 37){x-=5; console.log('x');}
    // →キー
    if(key === 39){x+=5; console.log('x');}
    // ↑キー
    if(key === 38){up = true; y_pre = y; y = y - 20; console.log('y');
    }
    //ESCキー
    if(key === 27){
        console.log("stop");
        start = false;
    }
    //スペースキー　リスタート
    if(key === 32){
        console.log("start");
        start = true;
        counter = 0;
    }
}

//ステージ
function drawRoad(drw_nmb) {
    ctx.beginPath();
    ctx.fillRect(
        stage_now_x,stageY/* + rand*/,
        100*drw_nmb,50
    );
    ctx.closePath();
}

function nextRoad(drw_nmb) {
    let drwRd = stage_now_x+100*drw_nmb;
    ctx.beginPath();
    ctx.fillRect(
        drwRd+100*drw_nmb,stageY/* + rand*/,
        100*drw_nmb,50
    );
    ctx.closePath();
}

function drawStage(drw_nmb) {
    drawRoad(drw_nmb);
    // nextRoad(drw_nmb+1);
    nextRoad(drw_nmb);
    // if(stage_now_x < -(100*drw_nmb+100*(drw_nmb+1)*2)) {
    if(stage_now_x < -(100*drw_nmb*3)) {
        stage_now_x=screenCanvas.width;
    }
}

var stageX_speed = 20;
function moveStage() {
    stage_now_x -= stageX_speed;

}

function generateStage(rndLnd) {
    // for (let i = 0; i < rndLnd.length; i++) {        
    //     drawStage(rndLnd[i]);
    // }
    drawStage(rndLnd);    
}

function updateStage(rndLnd) {
    generateStage(rndLnd);
    moveStage();
}

// ジャンプ処理
function jump(drw_nmb){
    if (up) {
        y_nex = y;
        y += (y-y_pre)+2;
        y_pre = y_nex;
        if(y==150) {
            up = !up;
        }
        if(y>600) {
            if(x > stage_now_x && x < drw_nmb){
                y = 540;
            }else{
                y = 600;
            }
        }
    }
}

