var nei = document.getElementById("lonzun").children;
// var left = document.getElementsByClassName("left")[0];
var lunbo = document.getElementsByClassName("lunbo")[0];
// var right = document.getElementsByClassName("right")[0];
var bu = document.getElementById("bu").children;
var index = 0
function str() {
    index++
    if (index >= 6) {
        index = 0;
    }
    main()
}

function main() {
    for (var i = 0; i < nei.length; i++) {
        nei[i].style.display = "none"
        bu[i].classList.remove("hei")
    }
    nei[index].style.display = "block"
    bu[index].classList.add("hei")
}

item = setInterval(str, 2000)
// 自动轮播
lunbo.onmouseover = function () {
    clearInterval(item)
}
lunbo.onmouseout = function () {
    item = setInterval(str, 2000)
}