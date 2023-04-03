const {
  sequelize: {
    models: { Note },
  },
} = require("../../models");

const GptRepository = require("./gpt.repository");
const GptService = require("./gpt.service");
const GptController = require("./gpt.controller");

const gptRepository = new GptRepository({ Note });
const gptService = new GptService({ gptRepository });
const gptController = new GptController({ gptService });

module.exports = { gptController };
