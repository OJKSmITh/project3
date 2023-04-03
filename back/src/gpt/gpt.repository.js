class GptRepository {
  constructor({ Note }) {
    this.Note = Note;
  }

  async postNote({ noteData }) {
    try {
      const {
        noteContent,
        music,
        referenceNumber,
        title,
        timeSignature,
        noteLength,
        key,
      } = noteData;

      const note = await this.Note.create({
        noteContent,
        music,
        referenceNumber,
        title,
        timeSignature,
        noteLength,
        key,
      });

      return note;
    } catch (e) {
      throw new Error(e);
    }
  }
}

module.exports = GptRepository;
