
var express = require('express')
const path = require('path')
const { dirname } = require('path')
const app = express();
const hostname = '127.0.0.1';
const port = 5500


app.use(express.static(path.join(__dirname , 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname , "index.html"));
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

