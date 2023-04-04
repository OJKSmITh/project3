class Utils {
  parseABC(str) {
    const data = {};
    const lines = str.split("\n");

    lines.forEach((line) => {
      if (line.startsWith("X:")) {
        data.referenceNumber = line.replace("X:", "").trim();
      } else if (line.startsWith("T:")) {
        data.title = line.replace("T:", "").trim();
      } else if (line.startsWith("M:")) {
        data.timeSignature = line.replace("M:", "").trim();
      } else if (line.startsWith("L:")) {
        data.noteLength = line.replace("L:", "").trim();
      } else if (line.startsWith("K:")) {
        data.key = line.replace("K:", "").trim();
      } else if (line.trim() !== "") {
        if (!data.music) {
          data.music = "";
        }

        data.music += line.trim() + "\n";
      }
    });

    return data;
  }
}

module.exports = Utils;
