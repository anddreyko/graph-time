$(document).ready(function(){
    /*
    var href = window.location.href;
    if(href[href.length-1]=='/') href = href.substring(href, href.length-1);
    var address = href.split('/');
    */
    var socket = io.connect('', { 'reconnect': false })
    , newTime;
    $('.chat-time').each(function(){
        newTime = $(this).attr('title') - timeOffset;
        $(this).attr('title', timeFormat(newTime, 'date'))
        .text(timeFormat(newTime, 'time'));
    });
    $(".chat #text").keyup(function(e){
        if(e.keyCode == 0xA || e.keyCode == 0xD){
            e.preventDefault();
            onmessage();
        }
    });
    $('form.chat').submit(function(){
        onmessage();
        return false;
    });
    socket
        .on('message', function(u, m, t){
            printmessage(arguments);
        })
        .on('leave', function(u){
            leave(u);
        })
        .on('join', function(u){
            join(u);
        })
        .on('connect', function(){
            //printmessage('соединение установлено');
        })
        .on('disconnect', function(){
            //printmessage(['u','соединение потеряно']);
        })
        .on('logout', function () {
            window.location.href = '/';
        })/*
        .on('error', function (r) {
            alert(r);
            if (r != 'handshake unauthorized') {
                setTimeout(function () {
                    socket.socket.connect();
                }, 500);
            
        });}*/
        .on('error', function(){
            setTimeout(function(){
                socket.connect();
            }, 500);
        });
    socket.emit('join', Date.now(), $('#rmnmbr').val(), function(e){
        join(e);
    });
    $('.logout').click(function(e){
        e.preventDefault();
        socket.emit('logout');
        $('.logout form').submit();
    });
    window.onbeforeunload = function () {
        socket.emit('leave', function(e){
            leave(e);
        });
    };
    $('#chat').scrollTop($(this).height());
    $('.mess').each(function(){
        $(this).click(retweet);
    });
    function timeFormat(t, f){
        t = new Date(t);
        d = t.getDate()
          , j = t.getMonth() + 1
          , y = t.getFullYear()
          , h = t.getHours()
          , m = t.getMinutes();
        if(d < 10) d = '0'+d;
        if(j < 10) j = '0'+j;
        if(h < 10) h = '0'+h;
        if(m < 10) m = '0'+m;
        var r = t;
        switch (f){
            case 'date':
                r = d+'.'+j+'.'+y;
                break;
            case 'time':
                r = h+':'+m;
                break;
        }
        return r ;
    }
    function onmessage(){
        socket.emit('message', $('#text').val(), function(u,t){
            printmessage(arguments);
        });
        $('.chat #text').val('');
        $('.chat #text').focus();
    }
    function printmessage(e){
        var t = Date.now();
        $('#chat').append('<div class="mess"><p class="chat-name">'+e[0]+'</p><p class="chat-time" title="'+timeFormat(t, 'date')+'">'+timeFormat(t, 'time')+'</p><p class="chat-message">'+e[1]+'</p></div>')
        .scrollTop($(this).height());
        $('.mess:last').click(retweet);
    }
    function retweet(e){
        $('.chat #text').val($('.chat #text').val()+' '+$(this).find('.chat-name').text()+', ')
        .focus();
    }
    function join(e){
        if(e!==''){
            leave(e);
            $('#online').append('<span id="'+e+'"> '+e+' </span>');
        }
    }
    function leave(e){
        if(e!=='') $('#online span#'+e).remove();
    }
});