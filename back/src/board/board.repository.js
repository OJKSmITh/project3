class BoardRepository {
    constructor({ sequelize, Board, Temp, History, Hashtag, Comment, User, Hash, Liked, PointUp }) {
        this.sequelize = sequelize;
        this.Board = Board;
        this.Comment = Comment;
        this.User = User;
        this.Liked = Liked;
    }


}

module.exports = BoardRepository;

