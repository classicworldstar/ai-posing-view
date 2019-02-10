window.onload = function () {
  resizeFrame(0, 0);
}
window.onresize = function () {
  resizeFrame(0, 0);
}

function resizeFrame(offsetX, offsetY) {
  var tmp_height = document.documentElement.clientHeight - 80 - offsetY;
  var tmp_width = document.documentElement.clientWidth - 220 - offsetX;
  //フレームのエレメント取得
  var fm_elm = document.getElementById("ifrm");
  fm_elm.style.height = tmp_height + "px";
  fm_elm.style.width = tmp_width + "px";

  //document.getElementById("title").innerHTML = 'h:' + tmp_height + ' w:' + tmp_width + '<br>'
}