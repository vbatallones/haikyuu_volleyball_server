const express = require('express');
const app = express();


app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('this is the home route app')
})



app.listen(3000, () => {
    console.log(`🎧listening to port 3000 🎧`)
})