class GptController {
  constructor({ gptService }) {
    this.gptService = gptService;
  }

  async postText(req, res, next) {
    try {
      console.log(req.body);
      const { pianoState } = req.body;
      const response = await this.gptService.API({ pianoState });
      console.log("controller :::", response);
      res.json(response);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = GptController;
