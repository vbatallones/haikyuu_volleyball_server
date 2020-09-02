const express = require('express');
const app = express();


app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/haikyuus', require('./controllers/haikyuus'))


app.get('/', (req, res) => {
    res.send('this is the home route app')
})



app.listen(8001, () => {
    console.log(`🎧listening to port 8001 🎧`)
})