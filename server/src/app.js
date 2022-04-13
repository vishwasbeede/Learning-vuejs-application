const express = require('express')
const bodyParser= require('body-parser')
const path = require('path')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(express.static(path.join(dirname,'../../test-app/dist/')))

app.use(cors())
app.get('/status',(req,res)=>{
    res.send({
        message:"Hello world"
    })
})

app.get('/register', (req,res) => {

    res.send(
        {
            message: 'Your user is registered ! have fun' 
        }
    )
})

app.get('*', (req,res) => {
    console.log(path.join(__dirname+'../../test-app/dist/index.html'))
    res.sendFile(path.join(__dirname+'../../test-app/dist/index.html'));
  })

app.listen(process.env.PORT || 8082,'0.0.0.0')
