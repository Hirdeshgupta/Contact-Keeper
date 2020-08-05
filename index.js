const express = require("express");
const app = express();
app.use(express.json({ urlencoded: false }));

app.get("/", (req, res) => {
    res.json({
        msg: "Welcome to Contact Keeper App"
    })
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server has started at port ${PORT}`);
})