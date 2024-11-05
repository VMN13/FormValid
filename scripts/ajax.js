const express = require('express');
const cors = require("cors");
const path = require('path');
const app = express();
const publicPath=path.join(__dirname, 'public')
console.log(publicPath)
app.use(express.static(publicPath));

app.post("/api/registration", (req, res) => {
  if (Math.random() > 0.5) {
    res.statusCode = 400;
    setTimeout(() => {
      res.send({
        status: "error",
       fields: {
        "inputName": "Сообщение об ошибке"
       }
      });
    }, Math.random() * 1000);

    return;
  }

  setTimeout(() => {
    res.statusCode = 200;
    res.send({
      status: "success",
      msg: "Ваша заявка успешно отправлена",
    });
  }, Math.random() * 1000);
});

app.get("/api/ping", (req, res) => {
    res.statusCode = 200;
    res.send({
        status: "success",
        message: "Server is ready",
        
    });
});


app.listen(9090);