var txt = document.getElementById("reply");
let n;
var today = new Date();
var year = today.getFullYear();
var month = today.getMonth();
var date = today.getDate();
var hour = today.getHours();
var min = today.getMinutes();
var pm = hour - 12;
var question = "";
var answer = '';
var key = 0;

var json = 
[
    {
        "question" : "안녕",
        "answer" : "저도 반가워요 냥!",
    },
    {
        "question" : "며칠",
        "answer" : `오늘은 ${year}년 ${month}월 ${date}일이에요 냥`,
    },
    {
        "question" : "몇시",
        "answer" : hour > 12 ? `지금은 오후 ${pm}시 ${min}분 이에요 냥` : `지금은 오전 ${hour}시 ${min}분 이에요 냥`,
    },
]

function chatting() {
    var inputvalue = document.getElementById("console").value;
    var app = document.getElementById('app');

    for (let i = 0; i < json.length; i++) {
        if (inputvalue == json[i].question) {
            txt.innerHTML = json[i].answer;
            return;
        }
    }

    // if (inputvalue.includes("안녕")) {
    //     txt.innerHTML = "저도 반가워요 냥";
    // } else if (inputvalue.includes("며칠")) {
    //     var today = new Date();
    //     var year = today.getFullYear();
    //     var month = today.getMonth();
    //     var date = today.getDate();
    //     txt.innerHTML = "오늘은 " + year + "년 " + month + "월 " + date + "일이에요 냥";
    // } else if (inputvalue.includes("몇시")) {
    //     var today = new Date();
    //     var hour = today.getHours();
    //     var min = today.getMinutes();
    //     if (hour > 12) {
    //         var pm = hour - 12;
    //         txt.innerHTML = "지금은 " + "오후 " + pm + "시 " + min + "분 이에요 냥";
    //     } else {
    //         txt.innerHTML = "지금은 " + "오전 " + hour + "시 " + min + "분 이에요 냥";
    //     }
    // } else 
    
    if (inputvalue.includes("켜줘")) {
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
        var typewriter = new Typewriter(app, {
            loop: true
        });
        typewriter.typeString('고양이는 모르는 말이 많아요.')
        .pauseFor(1300)
        .deleteAll()
        .typeString('말을 가르쳐보세요.')
        .pauseFor(4000)
        .start();
        
        txt.innerHTML = "말을 가르쳐 주실래요?(네 or 아니요)";
        console.log('1', key);
        
        if (key == 1) {
            if (inputvalue == "네") {
                txt.innerHTML = "대답을 입력해주세요!";
                key = 2;
                console.log('2', key, question, inputvalue);
            } else {
                txt.innerHTML = "냐 ~ 다음에 알려줘 냐 ~";
                key = 0;
                console.log('20', key);
            }
            return;
        }
        console.log('4', key);
        
        if (key == 2) {
            answer = inputvalue;
            console.log(answer, question, inputvalue);
            push_json();
            console.log('5', key);
        }
        
        for (let i = 0; i < json.length; i++) {
            if (inputvalue == json[i].question) {
                txt.innerHTML = json[i].answer;
                return;
            }
        }
        question = inputvalue;
        key = 1;
        console.log('6', key);
    }
    console.log(inputvalue, n);
    document.getElementById("console").value = '';
}

function push_json() {
    console.log(answer, question);
    json.push({question : `${question}`, answer : `${answer}`});
    txt.innerHTML = "말을 배웠다 냥!";
    key = 0;
}

document.getElementById("button").addEventListener('click', chatting);