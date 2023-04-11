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

    async findOne(id){
        try{
            const result = await this.Board.findOne({where:{
                id
            },raw:true})
            return result
        }catch(e){
            console.log(e.message)
        }
    }


    async createBoard(payload) {
        try{
            console.log(payload)
            const test = await this.Board.create(payload, {raw:true})
        }catch(e){
            console.log(e)
        }

    }
}

module.exports = BoardRepository;

