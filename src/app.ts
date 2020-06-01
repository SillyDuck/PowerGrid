import express from 'express';

const app = express();
const port = 8787;
app.get('/', (req, res) => {
    res.send('<img src="https://emoji.slack-edge.com/T01083BEH16/silly_sillyduck/a3d959880bef740e.png" height="500px" width="500px" alt="SillyDuck"/>')
});
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
