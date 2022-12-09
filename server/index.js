const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const { query } = require("express");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "pouya19991345",
  database: "bookdb",
});

/////////////////Getbook
app.get("/bookapi/getbook", async (req, res) => {
  await db.query("SELECT * FROM bookdb.book ", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/bookapi/getsinglebook/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getSingleBook = await db.query(
      "SELECT * FROM book WHERE id= ?",
      id,
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
    if (getSingleBook === undefined) {
      res.status(404).json({ msg: `No Such a data with id of ${id}` });
    }
    res.status(200).json({ getSingleBook });
  } catch (error) {}
});

///////////////////Get title book name
app.get("/bookapi/gettitlename", async (req, res) => {
  await db.query("SELECT title FROM book ", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      let title = result.map((i) => {
        return Object.entries(i);
      });
      let finalTitle = [
        "All",
        ...new Set(title.flat(2).filter((i) => i !== "title")),
      ].flat();
      res.send(finalTitle);
    }
  });
});

////////////////////comments about books
app.get("/bookapi/getcomments/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getBookComment = await db.query(
      "SELECT * FROM customer_comments_book WHERE bookID=?",
      id,
      (err, result, fields) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );

    res.status(200).json({ getBookComment });
  } catch (error) {}
});

app.post("/bookapi/setcomment", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const bookID = req.body.bookID;
  const comment = req.body.comment;

  db.query(
    "INSERT INTO customer_comments_book (name,email,bookID,comment) VALUES (?,?,?,?)",
    [name, email, bookID, comment],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("values inserted");
      }
    }
  );
});

///////////comments for about shop
app.post("/bookapi/setcommentforshop", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const comment = req.body.comment;

  db.query(
    "INSERT INTO customer_comments_site (name,email,comment) VALUES (?,?,?)",
    [name, email, comment],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("values inserted");
      }
    }
  );
});

app.get("/bookapi/getcommentsforshop/", async (req, res) => {
  try {
    const { id } = req.params;
    const getBookComment = await db.query(
      "SELECT * FROM customer_comments_site ",
      id,
      (err, result, fields) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );

    res.status(200).json({ getBookComment });
  } catch (error) {}
});

app.listen(3001, () => {
  console.log("server is ruuning in port 3001");
});
