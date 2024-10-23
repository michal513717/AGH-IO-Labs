

class Reader {

  setupEvents() {

    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
    recognition.lang = 'pl-PL';

    recognition.onstart = () => {
      //edit start button
    }

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      outputDiv.textContent = transcript;
    };

    recognition.onend = () => {

      // SEND API REQUEST

      startButton.textContent = 'Start Voice Input';
    };

    startButton.addEventListener('click', () => {
      recognition.start();
    });

  }
}