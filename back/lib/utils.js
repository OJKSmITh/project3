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

        // || 와 |] 를 | 로 바꿔준다
        if (line.endsWith("||") || line.endsWith("|]")) {
          line = line.slice(0, -1);
        }

        data.music += line.trim() + "\n";
      }
    });

    return data;
  }
}

module.exports = Utils;
