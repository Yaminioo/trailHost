var express = require("express")
var appl = express()
var path = require("path");
var public = path.resolve("./public")
var port = 3000

appl.get("", (req, res) => {

    res.sendFile(public + "/index.html");
    // res.send("Hello")
})

appl.listen(port, () => {
    console.log("listing to 3000")
})