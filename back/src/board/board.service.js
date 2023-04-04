class BoardService {
    constructor({ boardRepository, config, jwt }) {
        this.boardRepository = boardRepository;
        this.config = config;
        // this.BadRequest = config.exception.BadRequest;
        this.jwt = jwt;
    }

    async list(){
        const result = await this.boardRepository.findAll()
        return result
    }

    async write(data) {
        console.log("serv::",data)
        await this.boardRepository.createBoard(data)
    }

}

module.exports = BoardService;

