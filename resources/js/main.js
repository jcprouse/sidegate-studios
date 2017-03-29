
var player;

var init = function(){
  player = $("#audio-player");
  $(".demo-list li").click(function(e){
    playTrack(this);
  });

  $(player).on('timeupdate', function() {
      $('.audio-controls .duration').html(formatTime(this.currentTime) +" / "+ formatTime(this.duration));
  });

  $(".scrubber").click(function(e){
    alert($(this).offset().left);
  });

}

var playTrack = function(item)
{
  if ($(item).hasClass("play")){
    $(item).removeClass("play");
    player[0].pause();
  }
  else{
    $(".demo-list li").removeClass("play");
    $(item).addClass("play");

    if (player.attr("src") != $(item).attr("data-src"))
      player.attr("src", $(item).attr("data-src"));
    player[0].play();
  }
}


function formatTime(seconds) {
    minutes = Math.floor(seconds / 60);
    minutes = (minutes >= 10) ? minutes : "" + minutes;
    seconds = Math.floor(seconds % 60);
    seconds = (seconds >= 10) ? seconds : "0" + seconds;
    return minutes + ":" + seconds;
 }

/*;
(function($) {
    'use strict'
    var def_settings = {
        playlistClass: 'playlist',
        fixed: true,
        fixedClass: 'fixed-player',
        fixedBG: '#000'
    }
    $.fn.rdAudio = function(settings) {
        settings = $.extend(true, {}, def_settings, settings);
        var fixedCnt = $('.' + settings.fixedClass);
        var players = audiojs.createAll({
            trackEnded: function() {
                var active;
                for (i in players) {
                    if ($('.' + settings.playlistClass + ' li.playing').parent().data('player-id') == $(players[i].wrapper).find('audio').attr('id')) {
                        active = i;
                    }
                }
                var activeTrack = $('.' + settings.playlistClass + '[data-player-id="' + $(players[active].wrapper).find('audio').attr('id') + '"] li.playing');
                var next = activeTrack.next();
                if (!next.length) next = activeTrack.parent().find('li').first();
                next.addClass('playing').siblings().removeClass('playing');
                players[active].load(next.attr('data-src'));
                players[active].play();
            }
        });
        if ($('.' + settings.playlistClass).length > 0) {
            for (var i = 0; i < players.length; i++) {
                var first = $("." + settings.playlistClass + "[data-player-id='" + $(players[i].wrapper).find('audio').attr('id') + "'] li").first();
                players[i].load(first.data('src'));
            }
        }
        $('.play-pause').click(function(i) {
            var playerId = $(this).parent().find('audio').attr('id');
            var player;
            for (var i in players) {
                if (playerId == $(players[i].wrapper).find('audio').attr('id')) {
                    player = i;
                }
            }
            if ($(this).parent().hasClass('playing')) {
                $('.' + settings.playlistClass + '[data-player-id="' + playerId + '"] li.stopped').addClass('playing').removeClass('stopped');
            } else {
                $('.' + settings.playlistClass + '[data-player-id="' + playerId + '"] li.playing').addClass('stopped').removeClass('playing');
            }
            for (i in players) {
                if (playerId != $(players[i].wrapper).find('audio').attr('id')) {
                    $('.' + settings.playlistClass + '[data-player-id="' + $(players[i].wrapper).find('audio').attr('id') + '"] li.playing').removeClass('playing').addClass('stopped');
                    players[i].pause();
                }
            }
        });
        $('.' + settings.playlistClass + ' li').click(function(e) {
            var id = $(this).parent().data('player-id');
            var player;
            var existPlayer = false;
            var target = $(e.target);
            if (target.is("a")) {
                window.location = $(target, this).attr("href");
                $(".close-button").trigger("click");
                return false;
            }
            for (var i in players) {
                if (id == $(players[i].wrapper).find('audio').attr('id')) {
                    if ($(this).hasClass('playing')) {
                        players[i].playPause();
                        $(this).removeClass('playing').addClass('stopped');
                        return;
                    } else {
                        if ($(this).hasClass('stopped')) {
                            players[i].playPause();
                            $(this).removeClass('stopped').addClass('playing');
                            return;
                        }
                    }
                }
            }
            $('.' + settings.playlistClass + '[data-player-id="' + id + '"] li.stopped').removeClass('stopped');
            for (var i in players) {
                if (id != $(players[i].wrapper).find('audio').attr('id')) {
                    $('.' + settings.playlistClass + '[data-player-id="' + $(players[i].wrapper).find('audio').attr('id') + '"] li.playing').removeClass('playing').addClass('stopped');
                }
            }
            for (i in players) {
                if (id == $(players[i].wrapper).find('audio').attr('id')) {
                    existPlayer = true;
                }
            }
            if (existPlayer) {
                for (i in players) {
                    if (id == $(players[i].wrapper).find('audio').attr('id')) {
                        $('.' + settings.playlistClass + ' li').removeClass('playing');
                        $(this).addClass('playing').siblings().removeClass('playing');
                        players[i].load($(this).attr('data-src'));
                        players[i].play();
                    } else {
                        players[i].pause();
                    }
                }
            }
            if (settings.fixed) {
                fixedCnt.fadeIn(500);
            }
        });
        if (settings.fixed) {
            fixedCnt.css({
                'display': 'none',
                'position': 'fixed',
                'bottom': '0',
                'left': '0',
                'right': '0',
                'background': settings.fixedBG
            });
            fixedCnt.append('<span class="close-button fa fa-times"></span>');
            $('.close-button').click(function(e) {
                e.preventDefault();
                for (var i in players) {
                    players[i].pause();
                    $('.' + settings.playlistClass + ' li.playing').removeClass('playing');
                    $('.' + settings.playlistClass + ' li.stopped').removeClass('stopped');
                }
                fixedCnt.fadeOut(300);
            })
        }
    }
})(jQuery); */
