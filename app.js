
const express = require('express')
const path = require ('path') // para agregar html
const app = express()
const port = 3030
app.use(express.static('public')); // imagenes + css
 
app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})

app.listen(port , ()=>{
    console.log('Example app listening at http://localhost:${port}')
})
