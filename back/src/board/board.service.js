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
        await this.boardRepository.createBoard(data)
    }

    async view(id){

        const result = await this.boardRepository.findOne(id)
        return result
    }

}

module.exports = BoardService;

