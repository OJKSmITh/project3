class BoardRepository {
    constructor({ sequelize, Board, Comment, User, Liked }) {
        this.sequelize = sequelize;
        this.Board = Board;
        this.Comment = Comment;
        this.User = User;
        this.Liked = Liked;
    }
    
    
    async findAll() {
        try{
            const board = await this.Board.findAll({raw: true})
            return board
        }catch(e){

        }
    }


    async createBoard(payload) {
        try{
            console.log("repo::: ",payload)
            const test = await this.Board.create(payload, {raw:true})
            console.log(test)
        }catch(e){
            console.log(e)
        }

    }
}

module.exports = BoardRepository;

