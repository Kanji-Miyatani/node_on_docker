import express from 'express'
const app: express.Express = express();
const port = process.env.PORT || 3000;
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/',(req: express.Request, res: express.Response) => {
    res.send("HEllo world!");
})
app.listen(port, () => {
    console.log(`Start on port .${port}`)
})
