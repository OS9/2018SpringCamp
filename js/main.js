var screenCanvas,info;
var run = true;
var fps = 30;
var ctx;
var x = 256;
var y = 200;
var up = false;
var y_pre = 0;
var y_nex = 0;
var message;
var start = true;

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

    var timer = setInterval(function() {
    //(function(){
        //HTML更新
        info.innerHTML = 'SCORE ' + message;

        // screenクリア 
        ctx.clearRect(0, 0, screenCanvas.width, screenCanvas.height);

        //カウンター
        //counter++;
        //経過時間と開始判定
        if(start == true){
            do{
                /*if( x < 0 || x > 512 || y < 0){
                    message = "GAME OVER";
                    start = false;
                    x=256;
                    y=200;
                    break;
                }*/

                switch(true){
                    case (x > 0 && x < 512 && y > 0):
                        counter++
                        message = counter;
                        break;
                        
                    case start == true: 
                        //(x < 0 || x > 512 || y < 0):
                        message = "GAME OVER";
                        counter = 0;
                        start = false;
                        x=256;
                        y=200;
                        break;

                    /*case counter < 500:
                        message = counter;
                        break;
                    
                    case counter < 600:
                        message = counter + "  GAME OVER";
                        start = false;
                        break;
                    */

                    case start == true:
                        counter=0;
                        x=256;
                        y=200;
                        break;     
                }
            }while(i>0);  
        }

        jump();
        //パス設定開始
        ctx.beginPath();

        //キャラのパス設定
        ctx.fillRect(x,y,10,10);
        
        //色を設定
        ctx.fillStyle = 'rgba(0, 0, 255, 0.75)';
        ctx.fill();

        //if(run){setTimeout(arguments.callee,fps);}
        if (!run) clearInterval(timer);
    //})();
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

// ジャンプ処理
function jump(){
    if (up) {
        y_nex = y;
        y += (y-y_pre)+1;
        y_pre = y_nex;
        if(y==50) {
            up = !up;
        }
        if(y>200) {
            y = 200;
        }
    }
}