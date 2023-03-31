class BoardService {
    constructor({ boardRepository, config, jwt }) {
        this.boardRepository = boardRepository;
        this.config = config;
        // this.BadRequest = config.exception.BadRequest;
        this.jwt = jwt;
    }

}

module.exports = BoardService;

