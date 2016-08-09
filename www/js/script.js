$(document).ready(function(){

    var cnv = $('canvas')
  , cx = cnv[0].getContext('2d')
  , list = [ [150, 50, 20], [250, 150, 40], [100, 150, 10], [250, 100, 40], [250, 150, 40] ]
  , x
  , y;
    cnv[0].width = cnv.width();
    cnv[0].height = cnv.height();

    cx.fillStyle = 'rgb(200, 200, 200, 0.5)';

    cx.beginPath();
    cx.lineWidth = 5;
    list.forEach(function(e){
        cx.moveTo(e[0], e[1]);
        if ( x != 'undefined' && y != 'undefined' ) {
            //build line
            cx.lineTo(x, y);
            cx.stroke();
            //cx.closePath();
        }
        
        //cx.lineTo(e[0], e[1]);
        cx.moveTo(e[0], e[1]);
        cx.arc(e[0], e[1], e[2], 0, 2 * Math.PI);
        //cx.moveTo(e[0], e[1]);
        //cx.closePath();
        x = e[0];
        y = e[1];
    });
    cx.fill();
    //cx.stroke();

});