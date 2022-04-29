const express = require("express");
const cors = require("cors");
const wordlist = require("wordlist-english");

const PORT = process.env.PORT;

const app = express();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/words", (req, res) => {
  let wordlistEnglish = wordlist["english"];
  let words = [];
  for (let i = 0; i < wordlistEnglish.length; i++) {
    if (wordlistEnglish[i].length === 5) {
      words.push(wordlistEnglish[i]);
    }
  }
  res.send(words);
});
