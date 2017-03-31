
var playTrack = function(item){

  if ($(item).hasClass("playing")){
      window.sm2BarPlayers[0].actions.pause();
      pauseTrackDisplay();
  }
  else if ($(item).hasClass("paused")){
    playTrackDisplay();
    window.sm2BarPlayers[0].actions.play();
  }
  else{
    stopTrackDisplay();
    var offset = $(item).attr("data-pos");
    $('#audio-bar').show();
    window.sm2BarPlayers[0].playlistController.playItemByOffset(offset);
    $(item).addClass("playing");
  }
}

var playTrackDisplay = function(){
  var offset = window.sm2BarPlayers[0].playlistController.data.selectedIndex;
  $("li[data-pos='"+offset+"']").removeClass("paused").addClass("playing");

}

var pauseTrackDisplay = function (){
  var offset = window.sm2BarPlayers[0].playlistController.data.selectedIndex;
  $("li[data-pos='"+offset+"']").removeClass("playing").addClass("paused");
}

var stopTrackDisplay = function (){
  $(".demo-list li").removeClass("playing").removeClass("paused");
}

var closeTrackDisplay = function(){
  window.sm2BarPlayers[0].actions.pause();
  stopTrackDisplay();
  $('#audio-bar').hide();
}
