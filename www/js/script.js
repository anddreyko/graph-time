$(document).ready(function(){

    var cnv = $('canvas')
  , cx = cnv[0].getContext('2d')
  , widthScreen = $(window).width()
  , heightScreen = $(window).height()
  , kX1 = widthScreen / 21
  , kX2 = widthScreen / 2
  , kY = heightScreen / 10;
  
    cnv[0].width = cnv.width();
    cnv[0].height = cnv.height();
    cnv.css({'background': '#2a2a2a'});

    cx.fillStyle = '#363636';
    cx.strokeStyle = '#363636';

    cx.lineWidth = 1;

    (function f() {
        cx.clearRect(0, 0, widthScreen, heightScreen);
        cx.beginPath();
        var d = new Date()
      , s1 = d.getSeconds() + 0 + d.getMilliseconds() / 1000
      , m1 = d.getMinutes() + 0 + s1 / 60
      , h1 = d.getHours() + 0 + m1 / 60
      , d1 = d.getDate() + 0 + h1 / 24
      , f1 = d.getMonth() + 0 + d1 / 30
      , listVertex = [
            [
                s1 / 10
              , 9
              , 10
            ], [
                s1 % 10
              , 9
              , 10
            ] , [
                m1 / 10
              , 8
              , 12
            ], [
                m1 % 10
              , 8
              , 12
            ] , [
                h1 / 10
              , 7
              , 15
            ], [
                h1 % 10
              , 7
              , 15
            ] , [
                d1 / 10
              , 6
              , 17
            ], [
                d1 % 10
              , 6
              , 17
            ] , [
                f1 / 10
              , 5
              , 20
            ], [
                f1 % 10
              , 5
              , 20
            ]
        ]
      , listRibs = [
            [
                listVertex[0]
              , listVertex[2]
            ], [
                listVertex[2]
              , listVertex[4]
            ], [
                listVertex[4]
              , listVertex[6]
            ], [
                listVertex[6]
              , listVertex[8]
            ], [
                listVertex[1]
              , listVertex[3]
            ], [
                listVertex[3]
              , listVertex[5]
            ], [
                listVertex[5]
              , listVertex[7]
            ], [
                listVertex[7]
              , listVertex[9]
            ]
        ]
      , listRibsLength = $(listRibs).length / 2;
//console.log((d.getMilliseconds()) / 1000 + s1);
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
        setTimeout(f, 24);
    })();

});