const mongoose = require('mongoose')

async function getconnection() {
    try {
        await mongoose.connect('mongodb://localhost:27017/cardb')
        console.log('database is connected')
    } catch (error) {
      console.log(error.message)
    }
}
getconnection()