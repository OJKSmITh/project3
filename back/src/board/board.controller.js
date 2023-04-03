class BoardController {
    constructor({ boardService }) {
        this.boardService = boardService;
    }

    async postBoard(req,res,next) {
        try{
            const body = req.body
            console.log(body)
            body.nickname = "testman"
            await this.boardService.write(body)
            res.send('success')
        }catch(e){

        }
    }
    
}

module.exports = BoardController;

