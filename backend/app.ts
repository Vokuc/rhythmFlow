import express = require('express')
import { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 7115

app.get('/', (req: Request, res: Response) => {
    res.send("Hi MEAN stack")
})

app.listen(port, () => {
    console.log(`server started a port ${port}`)
})