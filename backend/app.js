"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const port = process.env.PORT || 7115;
app.get('/', (req, res) => {
    res.send("Hi MEAN stack");
});
app.listen(port, () => {
    console.log(`server started a port ${port}`);
});
