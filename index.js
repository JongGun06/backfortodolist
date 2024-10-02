require('dotenv').config()

let express = require('express')
let sequelize = require('./db')
let cors = require('cors')
let router = require('./routes/index')

let PORT = 1234 || process.env.PORT

let app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

async function start() {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`server work port=${PORT}`)
        )
        
    } catch (error) {
        console.log('error='+error);
        
    }
} 
start()