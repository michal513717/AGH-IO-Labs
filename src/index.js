import OpenAIClient from "./OpenAIClient";

const openAIClient = new OpenAIClient();

async function answerQuestion(question) {
  const answer = await openAIClient.getAnswer(question);
  console.log(answer);
}

answerQuestion("Dlaczego pada deszcz?");
