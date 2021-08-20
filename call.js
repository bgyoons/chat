function calling() {
    console.log("hi")
    setTimeout(whoRU, 2000);
}

function whoRU () {
    document.getElementById("name").innerHTML = "배균";
    document.getElementById("number").innerHTML = "010-2021-0820";
    document.getElementById("clickCalling").innerHTML = "전화 끊기";
}

document.getElementById("clickCalling").addEventListener('click', calling);