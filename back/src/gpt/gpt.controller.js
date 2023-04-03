class GptController {
  constructor({ gptService }) {
    this.gptService = gptService;
  }

  async postText(req, res, next) {
    try {
      const { noteContent } = req.body;
      const response = await this.gptService.API({ noteContent });
      res.json(response);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = GptController;
