$(document).ready(function(){

    var cnv = $('canvas')
  , cx = cnv[0].getContext('2d')
  , widthScreen = $(window).width()
  , heightScreen = $(window).height()
  , kX1 = widthScreen / 21
  , kX2 = widthScreen / 2
  , kY = heightScreen / 10
  , socket = io.connect('', { 'reconnect': false });
  
    cnv[0].width = cnv.width();
    cnv[0].height = cnv.height();
    cnv.css({'background': '#2a2a2a'});

    cx.fillStyle = '#363636';
    cx.strokeStyle = '#363636';

    cx.lineWidth = 1;
    
    socket.on('draw', function(listRibs){
        cx.clearRect(0, 0, widthScreen, heightScreen);
        cx.beginPath();
        var listRibsLength = $(listRibs).length / 2;
        listRibs.forEach(function(e, i){
            var kX = kX1;
            cx.moveTo(e[0][0]*kX +  ( i < listRibsLength ? 0 : kX2), e[0][1]*kY);
            cx.lineTo(e[1][0]*kX +  ( i < listRibsLength ? 0 : kX2), e[1][1]*kY);

            cx.moveTo(e[0][0]*kX +  ( i < listRibsLength ? 0 : kX2), e[0][1]*kY);
            cx.arc(e[0][0]*kX +  ( i < listRibsLength ? 0 : kX2), e[0][1]*kY, e[0][2], 0, 2 * Math.PI);
            cx.moveTo(e[1][0]*kX +  ( i < listRibsLength ? 0 : kX2), e[1][1]*kY);
            cx.arc(e[1][0]*kX +  ( i < listRibsLength ? 0 : kX2), e[1][1]*kY, e[1][2], 0, 2 * Math.PI);
        });
        cx.stroke();
        cx.fill();
        cx.closePath();
    })
    
    
});