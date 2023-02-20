import mongoose from "mongoose"

const URL: string = "mongodb://localhost/accountApi"

mongoose.connect(URL).then(() => {
    console.log("Connected to database")
}).catch((err) => {
    console.log(err)
})