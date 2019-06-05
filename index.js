const express = require('express')
const app = express()
const path = require('path')

const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname,'public')))
app.set('views', path.join(__dirname,'views'))


app.get('/', (req, res) => {
    res.render('home')
})

app.get('/home', (req, res) => {
    res.render('home',{      
    })
})

app.listen(port, (err) => {
    if (err){
        console.log('server is not running')
    }else{
        console.log('server is running')
    }
})