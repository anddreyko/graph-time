$(document).ready(function(){
    var cnv = $('canvas')
  , cx = cnv[0].getContext('2d')
  , socket = io.connect('', { 'reconnect': false })
  , COLOR = '#363636'
  , BACKGROUND = '#2a2a2a'
  , widthScreen
  , heightScreen
  , kX1
  , kX2
  , kY
  , kR;

    // set variables
    cnv.css({'background': BACKGROUND});
    Setting();
    cx.lineWidth = 1;

    socket.on('draw', function(listRibs){
        cx.clearRect(0, 0, widthScreen, heightScreen);
        cx.beginPath();
        
        //determine order of vertices on screen
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
              , e[0][2]*kR
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
              , e[1][2]*kR
              , 0
              , 2 * Math.PI
            );
        });
        cx.stroke();
        cx.fill();
        cx.closePath();
    })

    $(window).resize(Setting);
    
    /**
     * Procedure of setting valiables for different screen resolutions 
     */
    function Setting() {
        widthScreen = $(window).width();
        heightScreen = $(window).height();
        kX1 = widthScreen / 21;
        kX2 = widthScreen / 2;
        kY = heightScreen / 10;
        kR = kX1 / 10;
        cnv[0].width = widthScreen;
        cnv[0].height = heightScreen;
        cx.fillStyle = COLOR;
        cx.strokeStyle = COLOR;
    }
});