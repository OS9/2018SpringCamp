var screenCanvas,info;
var run = true;
var fps = 200;
var ctx;
var x = 256;
var y = 200;
var up = false;
var stage;
var pattern = 3;
var stageX = 492;
var stageY = 200;
var rand;

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

    //ステージ
    var stage = new Array();
    for(let k = 0; k < stage.length; k++){
        stage[k] = new stage();
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

        ctx.closePath;

        //ステージ
        while(i<30000){
            rand = (Math.random() * 50) + 1;
            ctx.beginPath();
            ctx.fillRect(
                stage[i] = stageX-=20,
                stage[i] = stageY + rand,
                20,256
            );
            // console.log(i);
            ctx.closePath();
            i++;
        }

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
    if(key === 38){up = true; console.log('y');
    }
}

function jump(j){
}