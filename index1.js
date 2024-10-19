const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

// in Express, if you want to send JSON data
// you need to first parse the JSON data
app.post("/sum", function(req, res) {
    console.log(req.body);
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b,
    });
});

app.listen(3000);