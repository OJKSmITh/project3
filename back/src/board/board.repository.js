class BoardRepository {
    constructor({ sequelize, Board, Comment, User, Liked }) {
        this.sequelize = sequelize;
        this.Board = Board;
        this.Comment = Comment;
        this.User = User;
        this.Liked = Liked;
    }

    async createBoard(payload) {
        const test = await this.Board.create(payload, {raw:true})
        console.log(test)
    }
}

module.exports = BoardRepository;

