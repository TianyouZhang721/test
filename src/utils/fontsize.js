function fontsize () {
    var width = document.documentElement.clientWidth
    var size = width / 7.5
    document.documentElement.style.fontSize = size + 'px'
}

fontsize()

window.onresize = function () {
    fontsize()
}