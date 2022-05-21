const express = require("express");
const adminRevert = require("./components/adminRevert");
const app = express();
const alertAdmin = require("./components/alertAdmin");
const retriveMedia = require("./components/retriveMedia");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

ADMIN = process.env.ADMIN;

app.use("/api/notify", (req, res) => {
  res.status(200).json({ message: "ok" });


  try {
    if (req.body.messages[0].from == ADMIN) {
      if (req.body.messages[0].type == "text") {
        let bodyTrimmed = req.body.messages[0].text.body;
        let body = bodyTrimmed.replace(/\s{2,}/g, " ").trim();
        alertAdmin(
          ADMIN,
          body,
          req.body.contacts[0].profile.name,
          req.body.messages[0].from
        );
      } else if (req.body.messages[0].type == "interactive") {
        alertAdmin(
          ADMIN,
          req.body.messages[0].interactive.button_reply.title,
          req.body.contacts[0].profile.name,
          req.body.messages[0].from
        );
      } else if (req.body.messages[0].type == "image") {
        alertAdmin(
          ADMIN,
          "*Image sent by the client*",
          req.body.contacts[0].profile.name,
          req.body.messages[0].from
        );
      }
    }
  } catch (err) {
    // console.log(err.message);
  }
});

app.use("/api/alertRevert", (req, res) => {
  res.status(200).json({ message: "ok" });

  try {
    if (req.body.messages[0].from == ADMIN) {
      let a = req.body.messages[0].text.body;
      console.log(a);
      let b = a.split(";");
      let number = b[0];
      let message = b[1];
      console.log(b);
      adminRevert(number, message);
    }
  } catch (err) {
    // console.log(err.message);
  }
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port @${port}...`);
});
