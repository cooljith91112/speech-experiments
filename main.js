(function () {
    var voices = null
    window.speechSynthesis.onvoiceschanged = function() {
        voices = window.speechSynthesis.getVoices();
        var sele = document.getElementById('voiceSelect');
        voices.forEach(function (voice, index) {
            var opt = document.createElement('option');
            opt.textContent = voice.name;
            opt.value = index;
            sele.appendChild(opt)
        });
    }
    document.getElementById('speak').addEventListener('click', function () { 
        var textToSpeak = document.getElementById('speakText').value;
        console.log(textToSpeak);

        var utterThis = new SpeechSynthesisUtterance(textToSpeak);
        utterThis.voice = speechSynthesis.getVoices()[parseInt(document.getElementById('voiceSelect').value)];
        speechSynthesis.speak(utterThis);
        console.log( speechSynthesis.getVoices())
        var voices = speechSynthesis.getVoices();
        // console.log(voices);
        // var li = '<ul>';
        // utterThis.voice.forEach(function(item){
            
        // });
    })
})();