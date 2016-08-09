$(document).ready(function(){

    var cnv = $('canvas')
      , cx = cnv[0].getContext('2d');
    cnv[0].width = cnv.width();
    cnv[0].height = cnv.height();

    cx.fillStyle = 'red';

    cx.beginPath();
    cx.arc(150, 50, 40, 0, 2 * Math.PI);

    cx.closePath();
    cx.arc(450, 50, 10, 0, 2 * Math.PI);
    cx.closePath();
    cx.fill();

    cx.moveTo(50, 10);
    cx.lineTo(10, 70);
    cx.lineTo(90, 70);
    cx.closePath();

    cx.moveTo(150, 110);
    cx.lineTo(110, 170);
    cx.lineTo(190, 70);
    cx.closePath();
    cx.stroke();

});