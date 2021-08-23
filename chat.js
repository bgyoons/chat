var txt = document.getElementById("reply");

function chatting() {
    var inputvalue = document.getElementById("console").value;
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
    } else {
        txt.innerHTML = "무슨 말있지 모르겠다 냥"
    }
    document.getElementById("console").value = '';
}
document.getElementById("button").addEventListener('click', chatting);