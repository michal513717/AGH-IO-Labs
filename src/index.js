import OpenAIClient from "./OpenAIClient";
import "./input";

const openAIClient = new OpenAIClient();

async function answerQuestion(question) {
  const answer = await openAIClient.getAnswer(question);
  return answer;
}

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);

  document.getElementById("mouth").classList.add("talking");
  window.speechSynthesis.speak(utterance);

  utterance.addEventListener("end", () => {
    document.getElementById("mouth").classList.remove("talking");
    console.log("stop talking");
  });
}

async function process() {
  let text = document.getElementById("in-out").value;
  console.log(text);
  let answer = await answerQuestion(text);
  speak(answer);
}

document.getElementById("send-button").addEventListener("click", () => {
  process();
});
