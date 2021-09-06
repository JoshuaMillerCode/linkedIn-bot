require("dotenv").config()
const express = require("express")
const app = express()
const PORT = process.env.PORT || 8001

app.use(express.json())


app.listen(PORT, () => {
  console.log(`Bot booting up and listening on port: ${PORT}`)
})