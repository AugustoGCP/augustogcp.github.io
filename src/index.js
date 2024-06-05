const express = require(`express`)
// const https = require('https')
// const http = require('http')
const path = require('path')
const port = process.env.PORT || 9000

const app = new express()

app.use(express.static( path.join(__dirname,'public')))
app.set('views', path.join(__dirname, `views`));
app.set('view engine', `ejs`);

app.get(`/`, async (req, res) => { 
    res.render(`index`)
})

app.listen(port, '0.0.0.0', () => {
    console.log(`listening on *:${port}`);
})