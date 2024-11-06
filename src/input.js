var click_count = 0
const recognitionSvc = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new recognitionSvc();
recognition.continous = true;
recognition.lang = 'pl-PL';

recognition.onresult = (event) => {
    for (const result of event.results) {
        document.getElementById('in-out').textContent += result[0].transcript
    }
}

function mic_click() {
    if (click_count % 2 == 0) {
        document.getElementById('mic').classList.add('recording')
        document.getElementById('in-out').textContent = ''
        recognition.start();
    } else {
        document.getElementById('mic').classList.remove('recording')
        recognition.stop();
    }
    click_count += 1
}