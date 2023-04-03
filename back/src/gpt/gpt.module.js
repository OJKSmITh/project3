const {
  sequelize: {
    models: { Note },
  },
} = require("../../models");

const GptRepository = require("./gpt.repository");
const GptService = require("./gpt.service");
const GptController = require("./gpt.controller");
const Utils = require("../../lib/utils");
const utils = new Utils();

const gptRepository = new GptRepository({ Note });
const gptService = new GptService({ gptRepository, utils });
const gptController = new GptController({ gptService });

module.exports = { gptController };
