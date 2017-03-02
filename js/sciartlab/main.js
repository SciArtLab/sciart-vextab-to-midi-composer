  $(document).ready(function() {
    
    window.vextab = VexTabDiv;
    window.VexTab = vextab.VexTab;
    window.Artist = vextab.Artist;
    window.Renderer = vextab.Flow.Renderer;

    window.voice;
    window.renderer;
    window.artist;
    window.vextab;

    window.Artist.DEBUG = true;
    window.VexTab.DEBUG = false;
    
    renderTab();
    createMidi();
    loadMidiPlayer();
});
      
