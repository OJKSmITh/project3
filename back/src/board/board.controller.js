class BoardController {
    constructor({ boardService }) {
        this.boardService = boardService;
    }

    async getList(req,res,next) {
        try{
            const list = await this.boardService.list()
            res.json(list)
        }catch(e){

        }
    }

    async postBoard(req,res,next) {
        try{
            const body = req.body
            await this.boardService.write(body)
            res.send('success')
        }catch(e){

        }
    }
    
}

module.exports = BoardController;

