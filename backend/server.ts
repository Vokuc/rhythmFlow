import express from "express";
import path from "path";

const app = express();

const port = 7115;

// Serve the angular app as static files
app.use(express.static(path.join(__dirname, '../rythmFlow/dist/rythmFlow')))

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: '../rythmFlow/dist/rythmFlow'})
})