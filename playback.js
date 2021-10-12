const sources = [
  "http://stream.zeno.fm/ukc8b9e5a48uv", // Ravana Hindi
  "https://wmirchi-lh.akamaihd.net/i/WMIRCHI_1@75780/index_1_a-p.m3u8?sd=10&rebase=on&hdntl=exp=1634049515~acl=%2F*~data=hdntl~hmac=f3c3c49a4c4f7d4efbb1f140020c90ecc289d1c88ca2e43e9b45de586a294025", // Pehla Nasha
  "https://meethimirchihdl-lh.akamaihd.net/i/MeethiMirchiHDLive_1_1@320572/index_1_a-p.m3u8?sd=10&rebase=on&hdntl=exp=1634050163~acl=%2F*~data=hdntl~hmac=05b3b5f288fd4d4fa567c425b8f1cad4a3edbef23d84b1846258c47c36387fac", // Meethi Mirchi
  "https://tootadil-lh.akamaihd.net/i/tootadil_1@42539/index_1_a-p.m3u8?sd=10&rebase=on&hdntl=exp=1634050206~acl=%2F*~data=hdntl~hmac=5ad180be6f3c925309a209553e414109370072f19a50176877d283c3299df2f4", // Mirchi Toota Dil
  "https://pehlanashahdlive-lh.akamaihd.net/i/PehlaNashaHDLive_1@335229/index_1_a-p.m3u8?sd=10&rebase=on", // Mirchi 90s Radio
  "https://meethimirchihdl-lh.akamaihd.net/i/MirchiEdgeHDLive_1_1@336272/index_1_a-p.m3u8?sd=10&rebase=on&hdntl=exp=1634050314~acl=%2F*~data=hdntl~hmac=54b2d7f4712e5835b3a500f2136455680ce5f365a6a686d1c26651f417c36cc3", // Mirchi Indies
  "https://filmymirchihdliv-lh.akamaihd.net/i/FilmyMirchiHDLive_1_1@336266/master.m3u8", // Filmy Mirchi
  "https://puranijeanshdliv-lh.akamaihd.net/i/PuraniJeansHDLive_1_1@334555/index_1_a-p.m3u8?sd=10&rebase=on", // Purani Jeans
  "https://clubmirchihdlive-lh.akamaihd.net/i/ClubMirchiHDLive_1_1@336269/master.m3u8", // Club Mirchi
  "http://103.16.47.70:7222/;stream.mp3", // Hungama 90s
  "https://air.pc.cdn.bitgravity.com/air/live/pbaudio001/playlist.m3u8", // Vividh Bharati
  "https://prclive4.listenon.in/Ghazal", // Radio City Ghazal
  "https://streams.radio.co/s69032f19e/listen", // Radio Selfie
  "https://21293.live.streamtheworld.com/BIGRADIO_S01.mp3", // Bro Big Radio
  "https://prclive4.listenon.in/Freedom", // Radio City Freedom
  "https://prclive4.listenon.in/Electronica", // Radio City Electronica
  "https://prclive4.listenon.in/Metal", // Radio City Metal
  "hhttps://prclive4.listenon.in/HipHop, // Radio City Hip Hop
  "https://prclive4.listenon.in/Dance", // Radio City Dance
  "https://air.pc.cdn.bitgravity.com/air/live/pbaudio139/chunklist.m3u8" // AIR Ragam
];

const labels = [
  [ "Ravana Hindi", "http://stream.zeno.fm/ukc8b9e5a48uv"],
  [ "Pehla Nasha", "https://wmirchi-lh.akamaihd.net/i/WMIRCHI_1@75780/index_1_a-p.m3u8?sd=10&rebase=on&hdntl=exp=1634049515~acl=%2F*~data=hdntl~hmac=f3c3c49a4c4f7d4efbb1f140020c90ecc289d1c88ca2e43e9b45de586a294025"],
  [ "Meethi Mirchi", "https://meethimirchihdl-lh.akamaihd.net/i/MeethiMirchiHDLive_1_1@320572/index_1_a-p.m3u8?sd=10&rebase=on&hdntl=exp=1634050163~acl=%2F*~data=hdntl~hmac=05b3b5f288fd4d4fa567c425b8f1cad4a3edbef23d84b1846258c47c36387fac"],
  [ "Mirchi Toota Dil", "https://tootadil-lh.akamaihd.net/i/tootadil_1@42539/index_1_a-p.m3u8?sd=10&rebase=on&hdntl=exp=1634050206~acl=%2F*~data=hdntl~hmac=5ad180be6f3c925309a209553e414109370072f19a50176877d283c3299df2f4"],
  [ "Mirchi 90s Radio", "https://pehlanashahdlive-lh.akamaihd.net/i/PehlaNashaHDLive_1@335229/index_1_a-p.m3u8?sd=10&rebase=on"],
  [ "Mirchi Indies", "https://meethimirchihdl-lh.akamaihd.net/i/MirchiEdgeHDLive_1_1@336272/index_1_a-p.m3u8?sd=10&rebase=on&hdntl=exp=1634050314~acl=%2F*~data=hdntl~hmac=54b2d7f4712e5835b3a500f2136455680ce5f365a6a686d1c26651f417c36cc3"],
  [ "Filmy Mirchi", "https://filmymirchihdliv-lh.akamaihd.net/i/FilmyMirchiHDLive_1_1@336266/master.m3u8"],
  [ "Purani Jeans", "https://puranijeanshdliv-lh.akamaihd.net/i/PuraniJeansHDLive_1_1@334555/index_1_a-p.m3u8?sd=10&rebase=on"],
  [ "Club Mirchi", "https://clubmirchihdlive-lh.akamaihd.net/i/ClubMirchiHDLive_1_1@336269/master.m3u8"],
  [ "Hungama 90s", "http://103.16.47.70:7222/;stream.mp3"],
  [ "Vividh Bharati", "https://air.pc.cdn.bitgravity.com/air/live/pbaudio001/playlist.m3u8"],
  [ "Radio City Ghazal", "https://prclive4.listenon.in/Ghazal"],
  [ "Radio Selfie", "https://streams.radio.co/s69032f19e/listen"],
  [ "Bro Big Radio", "https://21293.live.streamtheworld.com/BIGRADIO_S01.mp3"],
  [ "Radio City Freedom", "https://prclive4.listenon.in/Freedom"],
  [ "Radio City Electronica", "https://prclive4.listenon.in/Electronica"],
  [ "Radio City Metal", "https://prclive4.listenon.in/Metal"],
  [ "Radio City Hip Hop", "https://prclive4.listenon.in/HipHop"],
  [ "Radio City Dance", "https://prclive4.listenon.in/Dance"],
  [ "AIR Ragam", "https://air.pc.cdn.bitgravity.com/air/live/pbaudio139/chunklist.m3u8"]
];

let playingIndex = 0; // current radio
let playing = true; // stream status
let music = null;

setTimeout(function(){
    loadStream(playingIndex);
}, 1);

function loadStream(index){
  if(playing && music !== null)
    destroyStream();

  music = new Audio();
  music.src = sources[index];
  music.load();
  music.play();
  setLabel(index);
  pauseIcon();
  playingIndex = index;
  playing = true;
}

function destroyStream(){
  music.pause();
  music.src = "";
  playIcon();
  playing = false;
}

function changePlayback(){
  if(playing){ destroyStream();  }else{  loadStream(playingIndex);  }
}

function setLabel(index){
  document.getElementById("label").innerHTML = '<h6> <a target="_blank" href="' + labels[index][1] + '">' + labels[index][0] + '</a></h6>';
}

document.onkeydown = function(e) {
  e = e || window.event;
  switch(e.which || e.keyCode) {
    case 32:
      changePlayback();
    break;
  }
};

// icons
function pauseIcon(){
  document.getElementById('playbackButton').className = 'icon fa-pause';
}
function playIcon(){
  document.getElementById('playbackButton').className = 'icon fa-play';
}
