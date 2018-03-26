var screenCanvas,info;
var run = true;
var fps = 30;
var ctx;
var x = 256;
var y = 200;
var up = false;
var right = false;
var y_pre = 0;
var y_nex = 0;

//main
window.onload = function() {
    var counter = 0;
    var upcount = 0;
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


    /*//ボタン
    var input_key_buffer = new Array();
    //押されたとき
    document.onkeydown = function (e){
        if(!e) e = window.event;
        console.log("ボタンが押された");
        input_key_buffer[e.keyCode] = true;
    };
    //離れたとき
    document.onkeyup = function (e){
        if(!e) e = window.event;
        console.log("ボタンが離れた");
        input_key_buffer[e.keyCode] = false;
    };
    //ウィンドウが非アクティブ
    window.onblur = function(){
        //配列をクリア
        input_key_buffer.length = 0;
    };

    function KeyIsDown(keyCode){
        if(input_key_buffer[key_code])      return true;
        return false;
    }

    setInterval(fanction(){
        if(KeyIsDown(37)){
            console.log("←キーが押されている");
        }else{
            console.log("←キーが離されている");
        }

        //スペースキーが押されている
        if(KeyIsDown(39)){
            console.log("→キーが押されている");
        }else{
            console.log("→キーが離されている");
        }
    });*/


    (function(){

        //HTML更新
        info.innerHTML = 'SCORE ' + counter;

        // screenクリア 
        ctx.clearRect(0, 0, screenCanvas.width, screenCanvas.height);

        //カウンター
        switch(true){
            case counter < 500:
            counter++;
            break;

            default:
            run = false;
            break;
        }

        jump();

        /*//ジャンプ
        if(up == true){
            y--;
            var huga = 0;
            var hoge = setInterval(function() {
                huga++;
                y++;
                //終了条件
                if (huga == 1) {
                    clearInterval(hoge);
                }
            }, 100);
            // while(upcount<50) {
            //     upcount++;
            // }
            // do{
            //     y++;
            //     upcount--;
            // }while(upcount == -1);{
            //     upcount++
            //     up = false;
            // }
        }
        */

        //パス設定開始
        ctx.beginPath();

        //キャラのパス設定
        ctx.fillRect(x,y,10,10);
        
        //色を設定
        ctx.fillStyle = 'rgba(0, 0, 255, 0.75)';
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
    if(key === 38){up = true; y_pre = y; y = y - 20; console.log('y');
    }
}

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