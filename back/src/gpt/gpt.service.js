class GptService {
  constructor({ gptRepository }) {
    this.gptRepository = gptRepository;
  }

  async API() {
    try {
      const { Configuration, OpenAIApi } = require("openai");

      const configiration = new Configuration({
        organization: "org-oqXxpiEYAU0duJAPh5ckxVEv",
        apiKey: "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",
      });

      const openai = new OpenAIApi(configiration);

      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `옛날 바로크 시대 음악처럼 멜로디를 만들어주는데 다음과 같은 "A-C-B#-D" 순으로 중복되지 않게 만들어줘 ABC-NOTATION형식으로 3줄이상 되게 만들어줘`,
        max_tokens: 300,
        temperature: 0.2,
      });
      console.log("- completion:\n" + response.data.choices[0].text);
      const str = response.data.choices[0].text;
      console.log(str);

      const Note = await this.gptRepository.postNote({
        noteContent,
      });

      return Note;
    } catch (e) {
      return new Error(e);
    }
  }
}

module.exports = GptService;
