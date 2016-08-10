$(document).ready(function(){

    var cnv = $('canvas')
  , cx = cnv[0].getContext('2d')
  , d = new Date()
  , s1 = d.getSeconds()
  , listVertex = [
        [
            d.getSeconds() < 10
              ? 0
              : String(d.getSeconds()).charAt(0)
          , 9
          , 20
        ], [
            d.getSeconds() < 10
              ? d.getSeconds()
              : String(d.getSeconds()).charAt(1)
          , 9
          , 20
        ] , [
            d.getMinutes() < 10
              ? 0
              : String(d.getMinutes()).charAt(0)
          , 8
          , 20
        ], [
            d.getMinutes() < 10
              ? d.getMinutes()
              : String(d.getMinutes()).charAt(1)
          , 8
          , 20
        ] , [
            d.getHours() < 10
              ? 0
              : String(d.getHours()).charAt(0)
          , 7
          , 20
        ], [
            d.getHours() < 10
              ? d.getHours()
              : String(d.getHours()).charAt(1)
          , 7
          , 20
        ] , [
            d.getDate() < 10
              ? 0
              : String(d.getDate()).charAt(0)
          , 6
          , 20
        ], [
            d.getDate() < 10
              ? d.getDate()
              : String(d.getDate()).charAt(1)
          , 6
          , 20
        ] , [
            d.getMonth() < 10
              ? 0
              : String(d.getMonth()).charAt(0)
          , 5
          , 20
        ], [
            d.getMonth() < 9
              ? d.getMonth() + 1
              : String(d.getMonth() + 1).charAt(1)
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
  , listRibsLength = $(listRibs).length / 2
  , widthScreen = $(window).width()
  , heightScreen = $(window).height()
  , kX1 = widthScreen / 20
  , kX2 = widthScreen / 2 + kX1
  , kY = heightScreen / 10;

    cnv[0].width = cnv.width();
    cnv[0].height = cnv.height();
    cnv.css({'background': '#2a2a2a'});

    cx.fillStyle = '#363636';
    cx.strokeStyle = '#363636';

    cx.beginPath();
    cx.lineWidth = 5;
    listRibs.forEach(function(e, i){
        var kX = i < listRibsLength ? kX1 : kX2;
        console.log(kX);
        cx.moveTo(e[0][0]*kX, e[0][1]*kY);
        cx.lineTo(e[1][0]*kX, e[1][1]*kY);

        cx.moveTo(e[0][0]*kX, e[0][1]*kY);
        cx.arc(e[0][0]*kX, e[0][1]*kY, e[0][2], 0, 2 * Math.PI);
        cx.moveTo(e[1][0]*kX, e[1][1]*kY);
        cx.arc(e[1][0]*kX, e[1][1]*kY, e[1][2], 0, 2 * Math.PI);
    });
    cx.stroke();
    cx.fill();
    //cx.stroke();
    //cx.closePath();

});