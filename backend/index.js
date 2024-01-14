const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      // Using username as the secret, change to password if implementing IRL
      { username: username, secret: username, first_name: username },
      // TODO: Replace with private key from Chat Engine IO
      { headers: { "private-key": "XXX" } }
    );

    return res.status(r.status).json(r.data);
  } catch (error) {
    return res.status(error.response.status).json(error.response.data);
  }
});

app.listen(3001);
