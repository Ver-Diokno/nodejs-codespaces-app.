const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const fullName = "Diokno, Carl Denver D.";
const section = "BSIT-SM-4102";
const quote = "When the time is right, the lord will make it happen";

app.get("/", (req, res) => {
  res.send(`
    <div style="text-align:center; font-family: Arial, sans-serif; margin-top: 50px;">
      <h1>${fullName}</h1>
      <h2>${section}</h2>
      <p>${quote}</p>
    </div>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});