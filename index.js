const express = require("express")
const app = express()


app.get("/health", (req, res) => {
    res.status(200).json({ status: "Healthy." })
})

app.get("/articles", (req, res) => {
    res.json({
        articles: [
            {
                id: 1,
                title: "My first article",
                body: "This is just a plain article body"
            },
            {
                id: 2,
                title: "My second article",
                body: "This is just a plain article body"
            },
            {
                id: 3,
                title: "My third article",
                body: "This is just a plain article body"
            }
        ]
    })
})

app.post("/articles", (req, res) => {
    const { title, id, body } = req.body;
    res.json({
        article: {
            title,
            body,
            id
        }
    })
})

app.listen(9000, () => {
    console.log("Our server is listening on port 9000")
})