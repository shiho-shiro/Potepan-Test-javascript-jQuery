let timeCount = document.getElementById("timeCount");
let startButton = document.getElementById("startButton");
let stopButton = document.getElementById("stopButton");
let resetButton = document.getElementById("resetButton");

let timeEV;
let millisecond = 0;
let second = 0;
let tensecond = 0;
let hundred = 0;

//タイマーカウント
function timer(){
    millisecond++;

	if (millisecond / 10 == 1){
		second++;
		millisecond = 0;
		 　　if(second / 10 == 1){
            　　tensecond++;
				second = 0;
				　　if(tensecond / 10 == 1){
					 　hundred++;
					 　tensecond 	= 0;
				 　　}
		 　　}
	 }
 timeCount.innerHTML= hundred + ":" + tensecond + ":" + second + ":" + millisecond;
};

//ボタンを押したときのイベント編集
//スタートボタン
function buttonA(button){
   timeEV = setInterval(timer,100);
	stB = startButton;
	stB.disabled = true;
    stopB.disabled = false;
	rsC.disabled = false;
};
//ストップボタン
function buttonB(button){
    clearInterval(timeEV);
	stopB = stopButton;
    stopB.disabled = true;
	stB.disabled = false;
	rsC.disabled = false;
};
//リセットボタン
function buttonC(buttton){
	rsC = resetButton;
	rsC.disabled = true;
	millisecond = 0;
    second = 0;
    tensecond = 0;
    hundred = 0;
	// 先に数値を０にしてから表示させるようにする
	timeCount.innerHTML= hundred + ":" + tensecond + ":" + second + ":" + millisecond;
}