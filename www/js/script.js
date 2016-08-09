$(document).ready(function(){

    var cnv = $('canvas')
  , cx = cnv[0].getContext('2d')
  , list = [ [150, 50, 20], [250, 150, 40] ];
    cnv[0].width = cnv.width();
    cnv[0].height = cnv.height();

    cx.fillStyle = 'rgb(200, 200, 200, 0.5)';

    cx.beginPath();
    list.forEach(function(e){
        //cx.lineTo(e[0], e[1]);
        cx.arc(e[0], e[1], e[2], 0, 2 * Math.PI);
        //cx.moveTo(e[0], e[1]);
        //cx.closePath();
    });
    cx.fill();
    //cx.stroke();

});