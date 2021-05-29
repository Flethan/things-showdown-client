const express = require('express');
const app = express();
const port = 8001;

app.get('/', (req, res) => {
    res.sendFile('./testclient.html', { root: __dirname });
});
app.use(express.static('./'))

app.listen(port, () => console.log(`listening on port ${port}!`));
