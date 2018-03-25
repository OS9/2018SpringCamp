var screenCanvas,info;
var run = true;
var fps = 100;
var ctx;
var jump = false;
var x = 256;
var y = 128;
var down = false;
var up = false;
var count = 0;

//main
window.onload = function() {
    var counter = 0;
    if(count < 10 && count > 10){
        up = true;
        c;
    }else{
        down = true;
    }
    
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


    (function(){

        //HTML更新
        info.innerHTML = 'SCORE ' + counter;

        // screenクリア 
        ctx.clearRect(0, 0, screenCanvas.width, screenCanvas.height);

        switch(true){
            case counter < 1000:
            counter ++;
            break;

            default:
            run = false;
            break;
        }

        switch(true){
            case up = true:
            y--;
            count++;
            break;

            case down = true:
            y++;
            count --;
            break;
        }

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
    if(key === 37){x-=50; console.log('x');}
    // →キー
    if(key === 39){x+=50; console.log('x');}
    // ↑キー
    if(key === 38){up = true && count ++; console.log('y');
    }
}