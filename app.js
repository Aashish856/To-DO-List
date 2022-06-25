const express = require("express")
const bodyParser = require("body-parser")

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

var items = ["Buy Food" , "Cook Food" , "Eat Food"]

app.get("/", (req, res) => {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var today = new Date();
    var day = today.toLocaleDateString("en-Us" , options)
    res.render("index" , {kindOfDay : day , newListItem : items})

})

app.post("/" , (req,res)=>{
    var item = req.body.newItem
    items.push(item)
    res.redirect("/")
})
app.listen(3000, () => {
    var today = new Date()
    console.log(today.getDay())
    console.log("Server Started on port 3000")
})