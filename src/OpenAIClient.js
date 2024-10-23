import OpenAI from "openai";

class OpenAIClient {
  constructor() {
    const apiKey = process.env.APP_KEY;

    if (!apiKey) {
      throw new Error("API key is missing.");
    }

    this.openai = new OpenAI({
      apiKey: apiKey,
      dangerouslyAllowBrowser: true,
    });
  }

  async getAnswer(question) {
    try {
      const completion = await this.openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful assistant for children." },
          { role: "user", content: question },
        ],
      });

      return completion.choices[0].message.content;
    } catch (error) {
      console.error("Error getting answer from OpenAI:", error);
      return "Sorry, I am unable to answer right now.";
    }
  }
}

export default OpenAIClient;
