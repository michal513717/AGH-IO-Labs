function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);

  document.getElementById('mouth').classList.add('talking');
  window.speechSynthesis.speak(utterance);
  
  utterance.addEventListener('end', () => {
    document.getElementById('mouth').classList.remove('talking');
    console.log('stop talking')
  })
}