function createMidi(){
    console.log('---------- CreateMidi ----------');
    
    var MidiWriter = require('MidiWriter');
    var Vex = new MidiWriter.VexFlow;
    console.log(window.voice);
    var track = Vex.trackFromVoice(window.voice); //new MidiWriter.VexFlow().trackFromVoice(window.voice); 
    var writer = new MidiWriter.Writer([track]);
    
    console.log("MIDI Data URI:")
    console.log(writer.dataUri());
   
    //TODO: Pending to test
    updateMidiPlayer(writer.dataUri()); 

}  

function renderTab(){
    console.log('---------- RenderTab ----------');
   
    window.renderer = new Renderer($('#tabCanvas')[0], Renderer.Backends.CANVAS);
    window.artist = new window.Artist(10, 10, 600, {scale: 0.8});
    window.vextab = new window.VexTab(artist);

    $("#plainText").keyup(_.throttle(window.render, 250));
    render();
  
    window.voice = window.artist.getPlayerData().voices[0][0];

}

function render() {
    try {
      window.vextab.reset();
      window.artist.reset();
      window.vextab.parse($("#plainText").val());
      window.artist.render(renderer);
      $("#error").text("");
    } catch (e) {
      console.log(e);
      $("#error").html(e.message.replace(/[\n]/g, '<br/>'));
    }
}

function loadMidiPlayer(){
    console.log('---------- PlayMidi ----------'); 
    window.midiPlayer = new MidiPlayer('song.midi', 'playerBtn'); 
}
    
function updateMidiPlayer(midiURI){
    console.log('---------- UpdateMidi ----------'); 
    console.log(midiURI);
    window.midiPlayer = new MidiPlayer(midiURI, 'playerBtn'); 
}

function doPlay(m, btn) {
    if (btn.value == 'Play') {
        m.play();
        btn.value = 'Stop';
    }
    else {
        m.stop();
        btn.value = 'Play';
    }
}