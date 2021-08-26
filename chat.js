var txt = document.getElementById("reply");
let n;

function chatting() {
    var inputvalue = document.getElementById("console").value;
    var app = document.getElementById('app');

    if (inputvalue.includes("안녕")) {
        txt.innerHTML = "저도 반가워요 냥";
    } else if (inputvalue.includes("며칠")) {
        var today = new Date();
        var year = today.getFullYear();
        var month = today.getMonth();
        var date = today.getDate();
        txt.innerHTML = "오늘은 " + year + "년 " + month + "월 " + date + "일이에요 냥";
    } else if (inputvalue.includes("몇시")) {
        var today = new Date();
        var hour = today.getHours();
        var min = today.getMinutes();
        if (hour > 12) {
            var pm = hour - 12;
            txt.innerHTML = "지금은 " + "오후 " + pm + "시 " + min + "분 이에요 냥";
        } else {
            txt.innerHTML = "지금은 " + "오전 " + hour + "시 " + min + "분 이에요 냥";
        }
    } else if (inputvalue.includes("켜줘")) {
        document.body.style.backgroundColor = '#ffffff'
        txt.innerHTML = "불 켰다!";
    } else if (inputvalue.includes("꺼줘")) {
        document.body.style.backgroundColor = '#000000'
        txt.innerHTML = "불 껐다!";
    } else if (inputvalue.includes("따라해")) {
        n = 0;
        if (n == 0) {
            txt.innerHTML = "따라하기 시작! 냥!";
            n++;
        }
    } else if (n == 1) {
        txt.innerHTML = `${inputvalue}! 냥!`;
        if (inputvalue.includes("그만해 냥!")) {
            txt.innerHTML = "알겠다 냥!";
            n = 0;
        }
    } else {
        txt.innerHTML = "ZZZ 졸리다 냥";
        var typewriter = new Typewriter(app, {
            loop: true
        });
        typewriter.typeString('고양이가 말을 알아듣지 못한 것 같다.')
            .pauseFor(1300)
            .deleteAll()
            .typeString('다시 한 번 말해보세요.')
            .pauseFor(4000)
            .start();
    }
    console.log(inputvalue, n);
    document.getElementById("console").value = '';
}
document.getElementById("button").addEventListener('click', chatting);