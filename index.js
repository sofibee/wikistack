const morgan = require("morgan");
const express = require("express");
const app = express();
const { db , Page, User} = require('./models');
const wikiRouter = require("./routes/wiki");
const userRouter = require("./routes/user");
app.use(express.static('./static/stylesheets'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(morgan('dev'));

app.get("/", (req, res, next) => {
  try {
    res.send("hello world");
  } catch(error) {
    console.log(error);
  }

});

app.use("/wiki", wikiRouter);

db.authenticate().
then(() => {
  console.log('connected to the database');
})

const init = async () => {
  await db.sync({force: true});
  const PORT = 8000;
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
});
};

init();


