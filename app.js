const express = require("express");
const router = express.Router();

const app = express();

// визначимо домашній роутер
router.get("/", (req, res) => {
  res.send("Це головний роутер");
});

// визначимо роутер about
router.get("/about", (req, res) => {
  res.send("About");
});

module.exports = router;

// app.use((req, res, next) => {
//   console.log("Наше проміжне ПЗ");
//   next();
// });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/contact/:id", (req, res) => {
  res.send(`<h1>Contact</h1> Параметр: ${req.params.id}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact page</h1>");
});

// якщо приймаємо дані з форми реєстрації, то
app.post("/login", (req, res, next) => {
  const { email, password } = req.body;
  // Виконуємо необхідні операції
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});

// ланцюги методів----------------
app
  .route("/blog")
  .get((req, res) => {
    res.send("Get a list of blog");
  })
  .post((req, res) => {
    res.send("Add a record to blog");
  })
  .put((req, res) => {
    res.send("Update blog");
  });
