$(document).ready(function(){
    var cnv = $('canvas')
  , cx = cnv[0].getContext('2d')
  , socket = io.connect('', { 'reconnect': false })
  , widthScreen = $(window).width()
  , heightScreen = $(window).height()
  , kX1 = widthScreen / 21
  , kX2 = widthScreen / 2
  , kY = heightScreen / 10
  , COLOR = '#363636'
  , BACKGROUND = '#2a2a2a';

    cnv[0].width = widthScreen;
    cnv[0].height = heightScreen;

    cnv.css({'background': BACKGROUND});
    cx.fillStyle = COLOR;
    cx.strokeStyle = COLOR;
    cx.lineWidth = 1;

    socket.on('draw', function(listRibs){
        cx.clearRect(0, 0, widthScreen, heightScreen);
        cx.beginPath();
        var listRibsLength = $(listRibs).length / 2;
        listRibs.forEach(function(e, i){
            var kX = ( i < listRibsLength ? 0 : kX2);
            cx.moveTo(
                e[0][0]*kX1 + kX
              , e[0][1]*kX1
            );
            cx.lineTo(
                e[1][0]*kX1 + kX
              , e[1][1]*kX1
            );

            cx.moveTo(
                e[0][0]*kX1 + kX
              , e[0][1]*kX1
            );
            cx.arc(
                e[0][0]*kX1 + kX
              , e[0][1]*kX1
              , e[0][2]
              , 0
              , 2 * Math.PI
            );
            cx.moveTo(
                e[1][0]*kX1 + kX
              , e[1][1]*kX1
            );
            cx.arc(
                e[1][0]*kX1 + kX
              , e[1][1]*kX1
              , e[1][2]
              , 0
              , 2 * Math.PI
            );
        });
        cx.stroke();
        cx.fill();
        cx.closePath();
    })

    $(window).resize(function(){
        widthScreen = $(window).width();
        heightScreen = $(window).height();
        kX1 = widthScreen / 21;
        kX2 = widthScreen / 2;
        kY = heightScreen / 10;
        cnv[0].width = widthScreen;
        cnv[0].height = heightScreen;
        cx.fillStyle = COLOR;
        cx.strokeStyle = COLOR;
    });
});