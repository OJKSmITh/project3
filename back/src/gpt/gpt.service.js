const dotenv = require("dotenv").config({ path: "../../.env" });
const GPT_API_KEY = process.env.GPT_APIKEY;

class GptService {
  constructor({ gptRepository, utils }) {
    this.gptRepository = gptRepository;
    this.utils = utils;
  }

  async API({ pianoState }) {
    // console.log("pianoState :::::::::", pianoState);
    try {
      // console.log(GPT_API_KEY, "aslknclasknaslkncalknc");
      const { Configuration, OpenAIApi } = require("openai");
      const configiration = new Configuration({
        organization: "org-oqXxpiEYAU0duJAPh5ckxVEv",
        apiKey: GPT_API_KEY,
      });

      // console.log(configiration, "configi sadsdasdasdasdasdasdasd");

      const noteContent = pianoState.join("");

      const openai = new OpenAIApi(configiration);

      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `간단하고 짧은 곡을 만드려고해. ${noteContent} 음계가 들어간 신나는 분위기 곡을 만들어서 ABC notation 기법으로 써줘`,
        max_tokens: 300,
        temperature: 0.2,
      });

      const str = response.data.choices[0].text;
      console.log("GPT API 가 주는 데이터", str);

      const noteContentData = this.utils.parseABC(str);
      console.log(noteContentData);

      const defaultNoteData = {
        music: "",
        referenceNumber: "1",
        title: "",
        timeSignature: "",
        noteLength: "",
        key: "",
      };
      const noteData = Object.assign({}, defaultNoteData, noteContentData, {
        pianoState,
        noteContent,
        music: noteContentData.music,
      });

      const Note = await this.gptRepository.postNote({
        noteData: {
          music: noteData.music,
          referenceNumber: noteData.referenceNumber,
          title: noteData.title,
          timeSignature: noteData.timeSignature,
          noteLength: noteData.noteLength,
          key: noteData.key,
          noteContent: noteData.noteContent,
        },
      });

      console.log("가공데이터:::::::::", Note);

      return Note;
    } catch (e) {
      console.error("Failed to process note content:", e);
      return new Error(e);
    }
  }
}

module.exports = GptService;
