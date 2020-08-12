// rem 取决于根元素的font-size 1rem = 16px
function fontSize () {
    console.log("bianle")
    var width = document.documentElement.clientWidth;
    console.log(width)
    var fontSize = width / 7.5
    document.documentElement.style.fontSize = fontSize + "px"
}
fontSize()
window.onresize = function () {
    fontSize()
}